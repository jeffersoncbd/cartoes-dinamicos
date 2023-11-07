import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Actions from './Actions'
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
    size: 22,
    bold: true
  })
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    async function downloadCard(): Promise<void> {
      const card = document.getElementById('card')
      if (card !== null) {
        const dataUrl = await htmlToImage.toPng(card)
        download(dataUrl, 'card.png')
      }
    }
    if (finish) {
      void downloadCard()
    }
  }, [finish])

  return (
    <Container>
      <Formatters
        textProperties={textProperties}
        onChange={setTextProperties}
      />
      <View imageUrl={properties.imageUrl} textProperties={textProperties} />
      <Actions
        onFinish={() => {
          setFinish(true)
        }}
      />
    </Container>
  )
}

export default Editor
