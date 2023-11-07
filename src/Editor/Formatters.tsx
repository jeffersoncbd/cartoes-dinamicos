import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as BoldIcon } from '../assets/format_bold.svg'
import { type TextProperties } from './interfaces'

const Container = styled.div<{ bold: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    border: 1px solid #ddd;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${(properties) => (properties.bold ? '#ddd' : 'none')};

    &:hover {
      background-color: ${(properties) => (properties.bold ? '#ddd' : '#aaa')};

      & path {
        fill: black;
      }
    }

    & path {
      fill: ${(properties) => (properties.bold ? 'black' : '#ddd')};
    }
  }

  input {
    width: 80px;
    box-sizing: border-box;
    padding: 4px;
    border: none;
    border-radius: 8px;
    height: 40px;
    text-align: center;
    outline: none;
    background-color: #ddd;
  }
`

interface Properties {
  textProperties: TextProperties
  onChange: (newValues: TextProperties) => void
}

const Formatters: React.FC<Properties> = (properties) => {
  return (
    <Container bold={properties.textProperties.bold}>
      <BoldIcon
        onClick={() => {
          properties.onChange({
            ...properties.textProperties,
            bold: !properties.textProperties.bold
          })
        }}
      />
      <input
        type="number"
        value={properties.textProperties.size}
        onChange={(e) => {
          properties.onChange({
            ...properties.textProperties,
            size: Number(e.target.value)
          })
        }}
      />
      <input
        type="color"
        value={properties.textProperties.color}
        onChange={(e) => {
          properties.onChange({
            ...properties.textProperties,
            color: e.target.value
          })
        }}
      />
    </Container>
  )
}

export default Formatters
