import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Person } from 'react-ionicons'

import { HeaderWrapper, LogoWrapper, LogoAnchor, ImageWrapper, UserButton } from './style'
import Navigation from 'components/Navigation'
import Searchbar from 'components/Searchbar'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/" style={{ cursor: 'pointer' }} passHref>
          <LogoAnchor>
            <ImageWrapper>
              <Image
                src="/images/songbooks-icon.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </ImageWrapper>
            songbooks
          </LogoAnchor>
        </Link>
      </LogoWrapper>
      <Navigation />
      <Searchbar />
      <UserButton><Person width="25px" height="25px" color="#999" /></UserButton>
    </HeaderWrapper>
  )
}

export default Header
