import {
  Container,
  Heading,
  Link,
  Box,
  useMediaQuery,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { ReactComponent as Logo } from '@/assets/img/default-logo.svg'
import { ReactComponent as Twitter } from '@/assets/img/social/twitter.svg'
import { ReactComponent as Discrod } from '@/assets/img/social/discord.svg'
import { ReactComponent as Telegram } from '@/assets/img/social/telegram.svg'
import { ReactComponent as Youtube } from '@/assets/img/social/youtube.svg'
import { ReactComponent as Mul } from '@/assets/img/social/mul.svg'
import gecko from '@/assets/img/footer/gecko.png'
import shiba from '@/assets/img/footer/shiba.png'
import kucoin from '@/assets/img/footer/kucoin.png'
import etherscan from '@/assets/img/footer/etherscan.png'
import uniswap from '@/assets/img/footer/uniswap.png'
import dextools from '@/assets/img/footer/dextools.png'
import gate from '@/assets/img/footer/gate.png'
import mexc from '@/assets/img/footer/mexc.png'
import whitepaper from '@/assets/img/footer/whitepaper.png'
import bitmart from '@/assets/img/footer/bitmart.png'
import coinmarket from '@/assets/img/footer/coinmarket.png'
import { RootState } from '../../../store/types'

const Footer = () => {
  const [isLargerThan768] = useMediaQuery('(max-width: 480px)')
  const [isLargerThan422] = useMediaQuery('(max-width: 422px)')

  const dark = false
  const { selectedLanguage } = useSelector((state: RootState) => state.language)
  const {
    footer: {
      about,
      available_on,
      charities,
      dark_metaverse,
      games,
      get_UFO,
      cariers,
      info,
      join_the_UFO_community,
      links,
      privacy_Policy,
      staking,
      terms_and_conditions,
      tournaments,
      web_design_by,
    },
  } = selectedLanguage

  return (
    <footer className="footer">
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Container maxW="container.xl" sx={{ marginBottom: '15px' }}>
          <Heading as="h5" size="lg">
            Reach out
          </Heading>
        </Container>
        <Box
          sx={{
            zIndex: 1,
            position: 'relative',
            paddingRight: '34px',

            ['&:before']: {
              content: "' '",
              width: 'calc(100vw - 50px)',
              background: '#8924F4',
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: '100%',
              borderRadius: '0 10px 0 0',
              zIndex: '-1',
            },
          }}
        >
          <Container maxW="1183px" sx={{ padding: '35px 0' }}>
            <Box margin="7px">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
                marginBottom={{ base: '15px', sm: '115px' }}
              >
                <Logo width={130} height={65} />

                <Box
                  className="social-list-wrapper"
                  marginRight={{ base: '20px', sm: '72px' }}
                >
                  <Heading
                    as="h3"
                    size="md"
                    color="white"
                    sx={{ marginBottom: 5 }}
                    fontSize={{ base: '16px', sm: '18px' }}
                    margin={{ base: '25px 0', sm: '25px 0' }}
                  >
                    {join_the_UFO_community}
                  </Heading>
                  <Box
                    display="flex"
                    maxWidth="260px"
                    justifyContent="space-between"
                  >
                    <Link
                      href="https://twitter.com/theufotoken"
                      isExternal
                      className="link_without_borders"
                    >
                      <Twitter
                        width="27"
                        height="22"
                        fill={dark ? ' #102017' : '#fff'}
                      />
                    </Link>
                    <Link
                      href="https://t.me/ufotokenofficial"
                      isExternal
                      className="link_without_borders"
                    >
                      <Telegram
                        width="24"
                        height="21"
                        fill={dark ? ' #102017' : '#fff'}
                      />
                    </Link>
                    <Link
                      href="https://discord.com/invite/Zjdmt62H24"
                      isExternal
                      className="link_without_borders"
                    >
                      <Discrod
                        width="28"
                        height="22"
                        fill={dark ? ' #102017' : '#fff'}
                      />
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCqIEEqJfp0Mp7-NAs9enJKg"
                      isExternal
                      className="link_without_borders"
                    >
                      <Youtube
                        width="29"
                        height="22"
                        fill={dark ? ' #102017' : '#fff'}
                      />
                    </Link>
                    <Link href="#" isExternal className="link_without_borders">
                      <Mul
                        width="30"
                        height="27"
                        fill={dark ? ' #102017' : '#fff'}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'f lex',
                  justifyContent: 'space-between',
                  marginBottom: '45px',
                  flexWrap: 'wrap',
                }}
              >
                <Box>
                  <Box
                    display="flex"
                    marginBottom="15px"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      minWidth="max-content"
                      marginRight="25px"
                    >
                      <Link
                        href="https://ufo-gaming.gitbook.io/ufo-gaming/"
                        isExternal
                        color="white"
                      >
                        <Box className="footer-title">{about}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{dark_metaverse}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{games}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{staking}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{tournaments}</Box>
                      </Link>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      minWidth="max-content"
                    >
                      <Link color="white">
                        <Box className="footer-title">{get_UFO}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{cariers}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">
                          {terms_and_conditions}
                        </Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{privacy_Policy}</Box>
                      </Link>
                      <Link color="white">
                        <Box className="footer-title">{charities}</Box>
                      </Link>
                    </Box>
                  </Box>
                  {false && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      color="#FFFFFF"
                      margin=" 40px 0"
                    >
                      <Link>{info}</Link>
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    maxWidth: 330,
                    width: '71%',
                    marginRight: '55px',
                    ['& > nav']: {
                      marginTop: '15px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',

                      ['& > a']: {
                        width: '40%',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'flex-end',

                        // ['& img']: {
                        //   marginRight: "10px",
                        // },
                      },
                    },
                  }}
                >
                  <Box display="flex">
                    <Box
                      className="footer-title"
                      // marginRight={{ base: '32px', sm: '54px' }}
                      marginRight={['28px', '61px', '55px']}
                    >
                      {available_on}
                    </Box>
                    <Box className="footer-title">{links}</Box>
                  </Box>
                  <nav>
                    <Link
                      href="https://www.kucoin.com/trade/trade/UFO-USDT"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '9px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={kucoin} alt="Cap Icon" />
                      </Box>
                      KuCoin
                    </Link>
                    <Link
                      href="https://etherscan.io/token/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={etherscan} alt="Cap Icon" />
                      </Box>
                      Etherscan
                    </Link>
                    <Link
                      href="https://app.uniswap.org/#/swap?outputCurrency=0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b&chain=mainnet"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={uniswap} alt="Cap Icon" />
                      </Box>
                      Uniswap
                    </Link>
                    <Link
                      href="https://www.dextools.io/app/ether/pair-explorer/0x97e1fcb93ae7267dbafad23f7b9afaa08264cfd8"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={dextools} alt="Cap Icon" />
                      </Box>
                      Dextools
                    </Link>
                    <Link
                      href="https://shibaswap.com/#/add/ETH/0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={shiba} alt="Cap Icon" />
                      </Box>
                      Shibaswap
                    </Link>
                    <Link
                      href="https://www.coingecko.com/en/coins/ufo-gaming"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '21px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={gecko} alt="Cap Icon" />
                      </Box>
                      CoinGecko
                    </Link>
                    <Link
                      href="https://www.gate.io/trade/UFO_USDT"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '17px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={gate} alt="Cap Icon" />
                      </Box>
                      Gate
                    </Link>

                    <Link
                      href="https://coinmarketcap.com/currencies/ufo-gaming/"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '4px' : '15px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={coinmarket} alt="Cap Icon" />
                      </Box>
                      CoinMarketCap
                    </Link>

                    <Link
                      href="https://www.mexc.com/exchange/UFO_USDT"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '15px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={mexc} alt="Cap Icon" />
                      </Box>
                      MEXC
                    </Link>
                    <Link
                      href="https://drive.google.com/file/d/1C94iqeKcePS-C9jrxEcfgym9ycXgBsx2/view?usp=sharing"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '15px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={whitepaper} alt="Cap Icon" />
                      </Box>
                      Whitepaper
                    </Link>
                    <Link
                      href="https://www.bitmart.com/trade/en?symbol=UFO_USDT&layout=basic"
                      color="white"
                      isExternal
                      className="link_without_borders"
                    >
                      <Box
                        marginRight={isLargerThan422 ? '6px' : '15px'}
                        minWidth={isLargerThan422 ? '24px' : '30px'}
                      >
                        <img src={bitmart} alt="Cap Icon" />
                      </Box>
                      Bitmart
                    </Link>
                  </nav>
                </Box>
                {true && (
                  <Box display="flex" flexDirection="column" color="#FFFFFF">
                    <Link>{info}</Link>
                  </Box>
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
