import React, { useState } from 'react'
import styled from 'styled-components'

import Editor from './Editor'
import Selector from './Seletor'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>()

  return (
    <Container>
      {imageUrl === undefined ? (
        <Selector handleLoadFile={setImageUrl} />
      ) : (
        <Editor imageURL={imageUrl} />
      )}
    </Container>
  )
}

export default App
