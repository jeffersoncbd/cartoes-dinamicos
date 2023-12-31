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

const Editor: React.FC<Properties> = (properties) => (
  <Container>
    <Formatters />
    <View imageUrl={properties.imageUrl} />

    <PerfectScrollbar>
      <Actions />
    </PerfectScrollbar>
  </Container>
)

export default Editor
