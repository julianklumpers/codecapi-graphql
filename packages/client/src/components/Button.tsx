import React from 'react'
import styled from 'styled-components/macro'

interface Props {
  text?: React.ReactNode
  onClick(): void
}

const StyledButton = styled.button`
  border: none;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  :hover {
    cursor: pointer;
  }
`

const Button: React.SFC<Props> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.defaultProps = {
  text: '',
}

export default Button
