import React, { type ChangeEventHandler } from 'react'
import styled from 'styled-components'
import { ReactComponent as SquareAndCompassesIcon } from './assets/square-and-compasses.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-top: -80px;
  }

  h1 {
    margin-top: 16px;
  }

  input {
    margin-top: 24px;
    visibility: hidden;
    position: relative;
    height: 110px;
    width: 350px;
    cursor: pointer;
    display: flex;

    &::before {
      border: 1px solid #caac75;
      border-radius: 8px;
      width: 99%;
      content: 'selecione uma imagem de fundo';
      display: inline-block;
      visibility: visible;
      position: absolute;

      display: flex;
      justify-content: center;
      padding: 40px 0;
      font-size: 16px;
    }
  }
`

interface SelectorProperties {
  handleLoadFile: (url: string) => void
}

const Selector: React.FC<SelectorProperties> = (properties) => {
  const handleLoadFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files !== null) {
      properties.handleLoadFile(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <Container>
      <SquareAndCompassesIcon />
      <h1>Criador de cartões</h1>
      <input type="file" placeholder="teste" onChange={handleLoadFile} />
    </Container>
  )
}

export default Selector
