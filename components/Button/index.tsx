import { FunctionComponent, MouseEventHandler } from 'react'

import { ButtonWrapper } from './style'

interface ButtonProps {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FunctionComponent<ButtonProps> = ({ onClick, title }) => {
  return (
    <ButtonWrapper
      onClick={e => {
        console.log(e)
        onClick(e)
      }}
    >
      {title}
    </ButtonWrapper>
  )
}

export default Button
