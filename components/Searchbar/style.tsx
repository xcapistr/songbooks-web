import styled from 'styled-components'
import { Search, Close, MusicalNote, Book, Person } from 'react-ionicons'

export const SearchbarWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  top: 13px;
`

export const Input = styled.input<{ hasResults: boolean }>`
  font-size: 18px;
  line-height: 20px;
  width: 300px;
  padding: 10px 40px;
  border-radius: ${({ hasResults }) => (hasResults ? '10px 10px 0 0' : '10px')};
  border: 1px solid #ccc;
  z-index: 2;
  outline: none;
  background-color: #eee;
`

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 10px;
  left: 13px;
  z-index: 1;
`

export const CloseButton = styled.button<{ isVisible: boolean }>`
  position: absolute;
  top: 9px;
  right: 9px;
  border-radius: 50%;
  background-color: transparent;
  height: 24px;
  width: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  &:hover {
    background-color: #eee;
  }
`

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 0 0 10px 10px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
`

export const ResultItem = styled.li`
    border-bottom: 1px solid #ccc;
    &:last-child {
        border-bottom: none;
    }
`

export const ResultAnchor = styled.a`
    padding: 10px 15px;
    cursor: pointer;
    display: block;
    align-items: center;

    & > span {
        margin-right: 10px;
        line-height: 18px;
        vertical-align: middle;
    }

    &:hover {
        text-decoration: underline;
    }
`
