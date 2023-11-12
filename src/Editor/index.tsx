import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Actions from './Actions'
import Formatters from './Formatters'
import View from './View'

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

  // useEffect(() => {
  //   function getTag(
  //     content: string
  //   ): [string, string] | [undefined, undefined] {
  //     const parts = content.split('}}')
  //     if (parts.length <= 1) {
  //       return [undefined, undefined]
  //     }
  //     const firstParts = parts[0].split('{{')
  //     if (firstParts.length <= 1) {
  //       return [undefined, undefined]
  //     }
  //     parts.shift()
  //     return [firstParts[1], parts.join('}}')]
  //   }
  //   setTags(() => [])
  //   if (text.length >= 7) {
  //     let content: string | undefined = text
  //     while (content !== undefined) {
  //       const [tag, remaining] = getTag(content)
  //       content = remaining
  //       if (tag !== undefined) {
  //         setTags([...tags, tag])
  //       }
  //     }
  //   }
  // }, [text])

  return (
    <Container>
      <Formatters />
      <View imageUrl={properties.imageUrl} />
      <Actions
        onFinish={() => {
          setFinish(true)
        }}
      />
    </Container>
  )
}

export default Editor
