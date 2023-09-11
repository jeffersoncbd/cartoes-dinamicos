import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SquareAndCompassesIcon } from './assets/square-and-compasses.svg'

const Container = styled.div`
  height: 90vh;
  width: 90vh;
  border: 1px solid #caac75;
  display: flex;
  justify-content: center;

  svg {
    margin-top: -75vh;
    margin-left: -75vh;
    position: absolute;
  }

  img {
    height: 90vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  textarea {
    background-color: #00000000;
    text-align: center;
    color: #caac75;
    border: none;
    outline: none;
    width: 100%;
    margin: 15px 24px;
    resize: none;
    font-size: 16px;
  }
`

interface EditorProperties {
  imageURL: string
}

const defaultContent = `





FELIZ ANIVERSÁRIO !

Querido Ir∴{{destinatario}}.
Em um dia tão especial como este, quero lhe estender o esquadro e o compasso de meus mais sinceros desejos. Que o G∴A∴D∴U∴ continue a iluminar seu caminho, trazendo sabedoria, força e beleza para todos os seus dias.

São os votos e desejos da Família Alvorada 01

Fraternalmente,
LUÍS HENRIQUE - Ven∴Mestr∴
`

const Editor: React.FC<EditorProperties> = (properties) => {
  const [content, setContent] = useState(defaultContent)

  return (
    <Container>
      <SquareAndCompassesIcon />
      <img src={properties.imageURL} />
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
      />
    </Container>
  )
}

export default Editor
