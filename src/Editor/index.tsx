import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { styled } from 'styled-components'
import Actions from './Actions'
import Formatters from './Formatters'
import View from './View'

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;

  .scrollbar-container {
    flex: 1;
  }
`

interface Properties {
  imageUrl: string
}

const Editor: React.FC<Properties> = (properties) => {
  // useEffect(() => {
  //   async function downloadCard(): Promise<void> {
  //     const card = document.getElementById('card')
  //     if (card !== null) {
  //       const dataUrl = await htmlToImage.toPng(card)
  //       download(dataUrl, 'card.png')
  //     }
  //   }
  //   if (finish) {
  //     void downloadCard()
  //   }
  // }, [finish])

  return (
    <Container>
      <Formatters />
      <View imageUrl={properties.imageUrl} />

      <PerfectScrollbar>
        <Actions />
      </PerfectScrollbar>
    </Container>
  )
}

export default Editor
