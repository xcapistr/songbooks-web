import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 70px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  background-color: #fff;
`

export const LogoWrapper = styled.div`
    flex: 1;
`

export const LogoAnchor = styled.a`
  color: #333;
  display: flex;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  margin: 0 10px;
`

export const UserButton = styled.button`
    border: 1px solid #ccc;
    background-color: #ccc;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 20px;
`
