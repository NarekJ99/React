import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { Staking } from '@/types/typechain'
import { useWallet } from '@/web3/WalletContext'
import { useReadContract } from '@/web3/hooks'

export interface LockedDeposit {
  startDay: number
  endDay: number
  amount: BigNumber
  weight: BigNumber
  withdrawlDay: BigNumber
  withdrawn: boolean
}

const getLockedDeposits = async ({
  contract,
  address,
  contractDeploymentTimestamp,
}: {
  contract: Staking
  address: string
  contractDeploymentTimestamp: BigNumber
}) => {
  let lockedDeposits: LockedDeposit[] = []
  // considering a large number of stakes so its fine to use a for loop.
  for (let index = 0; index < 10000000; index++) {
    try {
      const locked = await contract.lockedDeposit(address, index)
      lockedDeposits = [
        ...lockedDeposits,
        {
          amount: locked.amount,
          startDay: dayjs
            .unix(contractDeploymentTimestamp.toNumber())
            .add(locked.startDay.toNumber(), 'day')
            .unix(),
          endDay: dayjs
            .unix(contractDeploymentTimestamp.toNumber())
            .add(locked.endDay.toNumber(), 'day')
            .unix(),
          weight: locked.weight,
          withdrawlDay: locked.withdrawalDay,
          withdrawn: locked.withdrawn,
        },
      ]
    } catch (error) {
      // Will throw error if there is no locked deposit present at the index
      break
    }
  }

  return lockedDeposits
}

export const useLockedDeposits = (
  contract: Staking | null
): [
  LockedDeposit[],
  {
    refresh: () => void
    loading: boolean
  }
] => {
  const [loading, setLoading] = useState(false)
  const [lockedDeposits, setLockedDeposits] = useState<LockedDeposit[]>([])
  const { response: contractDeploymentTimestamp } = useReadContract(
    contract,
    'startTime'
  )

  const { address } = useWallet()
  useEffect(() => {
    refresh()
  }, [(contract as Contract)?.address, contractDeploymentTimestamp])

  const refresh = () => {
    setLoading(true)
    if (!address) return
    if (!contract) return
    if (!contractDeploymentTimestamp) return
    getLockedDeposits({ contract, address, contractDeploymentTimestamp }).then(
      (ld) => {
        setLockedDeposits(ld)
        setLoading(false)
      }
    )
  }

  return [lockedDeposits, { refresh, loading }]
}
