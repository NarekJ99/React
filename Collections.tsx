import { Box, Flex, Grid, Heading, HStack, Stack } from '@chakra-ui/layout'
import { FC, useState } from 'react'
import { BiChevronDown, BiChevronUp, BiFilterAlt } from 'react-icons/bi'

import {
  CollectionCard,
  CollectionCardModal,
  CollectionTab,
  CustomDivider,
  FilterDropDown,
  FilterMenu,
  SortCollection,
} from '@/components'
import { FilterCollection } from '@/components/molecules/FilterCollection'

export const Collections: FC = () => {
  const [stakeModal, setStakeModal] = useState(false)
  const [dropdown, setDropDown] = useState(false)
  const [menuText, setMenuText] = useState('')
  const [collectionTab, setCollectionTab] = useState('MY NFTS')

  return (
    <Box pl="15" pt="15">
      <Flex align="center" justify="center" mt="6" mb="6">
        <Heading variant="h3" as="h3">
          COLLECTION
        </Heading>
      </Flex>

      <Stack w="full" p="4">
        <Flex
          bg="gradient.darkBlue"
          height="full"
          borderRadius="lg"
          pr="6"
          pl="6"
          mb="6"
        >
          <HStack spacing={5}>
            <CollectionTab
              title="MY NFTS"
              isActive={collectionTab === 'MY NFTS'}
              onClick={() => setCollectionTab('MY NFTS')}
            />
            <CollectionTab
              title="NFTS FOR SALE"
              isActive={collectionTab === 'NFTS FOR SALE'}
              onClick={() => setCollectionTab('NFTS FOR SALE')}
            />
          </HStack>

          <Flex
            h="56px"
            w="56px"
            alignItems="center"
            justifyContent="center"
            transform="auto"
            rotate="90"
            ml="2"
            mr="2"
          >
            <CustomDivider />
          </Flex>

          <HStack spacing={5} align="center" position="relative">
            <SortCollection
              title="NAME"
              onClick={() => setMenuText('NAME')}
              icon={menuText === 'NAME' ? BiChevronDown : BiChevronUp}
            />
            <SortCollection
              title="RATING"
              onClick={() => alert('click')}
              icon={menuText === 'NAME' ? BiChevronDown : BiChevronUp}
            />
            <SortCollection
              title="DATE MINTED"
              onClick={() => alert('click')}
              icon={menuText === 'NAME' ? BiChevronDown : BiChevronUp}
            />
            <FilterCollection
              title="SOLDIER TYPE"
              onClick={() => setDropDown(!dropdown)}
              icon={BiFilterAlt}
            />

            {dropdown && (
              <FilterDropDown
                menu={[1, 2, 3, 4, 5].map((menu) => (
                  <FilterMenu title="Menu" />
                ))}
              />
            )}
          </HStack>
        </Flex>

        {collectionTab === 'MY NFTS' && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <CollectionCard
              title="ADBCD"
              rating="2,000"
              onClick={() => setStakeModal(true)}
            />
          </Grid>
        )}

        {collectionTab === 'NFTS FOR SALE' && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <CollectionCard
              title="ADBC"
              rating="1,000"
              price="1,000"
              onClick={() => setStakeModal(true)}
            />
          </Grid>
        )}

        <CollectionCardModal
          isOpen={stakeModal}
          onCloseModal={() => setStakeModal(false)}
        />
      </Stack>
    </Box>
  )
}
