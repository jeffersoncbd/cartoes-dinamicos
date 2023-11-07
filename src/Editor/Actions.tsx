import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  button {
    height: 40px;
    padding: 0 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`

interface Properties {
  onFinish: () => void
}

const Actions: React.FC<Properties> = (properties) => {
  return (
    <Container>
      <button
        onClick={() => {
          properties.onFinish()
        }}
      >
        Finalizar
      </button>
    </Container>
  )
}

export default Actions
