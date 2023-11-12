import React, { type ButtonHTMLAttributes } from 'react'
import { styled } from 'styled-components'
import { colors } from '../styleGuide'

const StyledButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: ${colors.lightGreen.main};
  color: ${colors.background};
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(110%);
  }
`

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  properties
) => {
  return <StyledButton {...properties} />
}

export default Button
