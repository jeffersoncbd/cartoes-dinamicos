import React, { useState } from 'react'
import { styled } from 'styled-components'
import Formatters from './Formatters'
import View from './View'
import { type TextProperties } from './interfaces'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`

interface Properties {
  imageUrl: string
}

const Editor: React.FC<Properties> = (properties) => {
  const [textProperties, setTextProperties] = useState<TextProperties>({
    color: '#caac75',
    size: 16,
    bold: true
  })

  return (
    <Container>
      <Formatters
        textProperties={textProperties}
        onChange={setTextProperties}
      />
      <View imageUrl={properties.imageUrl} textProperties={textProperties} />
      <div style={{ flex: '1' }} />
    </Container>
  )
}

export default Editor
