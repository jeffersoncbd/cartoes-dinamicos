import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { styled } from 'styled-components'
import { colors } from '../styleGuide'

const Container = styled.button`
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

interface Properties extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const Button: React.FC<Properties> = (properties) => {
  return <Container>{properties.children}</Container>
}

export default Button
