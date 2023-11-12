import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

interface Properties {
  onFinish: () => void
}

const Actions: React.FC<Properties> = (properties) => {
  return (
    <Container>
      <Button
        onClick={() => {
          properties.onFinish()
        }}
      >
        Finalizar
      </Button>
    </Container>
  )
}

export default Actions
