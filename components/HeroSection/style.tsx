import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div<{
  backgroundImage: string
  small: boolean
}>`
  width: 100vw;
  height: 80vh;
  min-height: 500px;
  max-height: 1500px;
  background-color: #fff;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 100px), 0 100%);

  ${({ small }) =>
    small &&
    css`
      height: 400px;
    `}
`

export const BackdropContainer = styled.div<{ isLoading: boolean }>`
  backdrop-filter: blur(${({ isLoading }) => (isLoading ? 20 : 0)}px);
  transition: backdrop-filter 0.5s linear;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  padding: 60px;
  text-shadow: 0 0 40px #000000;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
`

export const Subtitle = styled.p`
  color: #fff;
  font-size: 36px;
`
