import styled from 'styled-components'
import { FunctionComponent, useState, useEffect } from 'react'

import {
  HeroWrapper,
  BackdropContainer,
  Content,
  Title,
  Subtitle
} from './style'
import Button from 'components/Button'

interface HeroSectionProps {
  title: string
  subtitle?: string
  small?: boolean
  image: string
  smallImage: string
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  subtitle,
  small = false,
  image,
  smallImage
}) => {
  const [currentImage, setCurrentImage] = useState(smallImage)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchImage(image)
  }, [image])

  const fetchImage = (src: string) => {
    const image = new Image()
    image.onload = () => {
      setCurrentImage(loadingImage.src)
      setIsLoading(false)
    }
    image.src = src
    const loadingImage = image
  }

  return (
    <HeroWrapper backgroundImage={currentImage} small={small}>
      <BackdropContainer isLoading={isLoading}>
        <Content>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Button
            title="Go to library"
            onClick={e => console.log('clicked:', e.target)}
          />
        </Content>
      </BackdropContainer>
    </HeroWrapper>
  )
}

export default HeroSection
