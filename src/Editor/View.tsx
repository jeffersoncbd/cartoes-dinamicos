import React, { useState } from 'react'
import styled from 'styled-components'
import { type TextProperties } from './interfaces'

const Container = styled.div<TextProperties>`
  height: 90vh;
  width: 90vh;
  border: 1px solid #caac75;
  display: flex;
  justify-content: center;

  img {
    height: 90vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  textarea {
    font-weight: ${(properties) => (properties.bold ? 700 : 400)};
    background-color: #00000000;
    text-align: center;
    color: ${(properties) => properties.color};
    border: none;
    outline: none;
    width: 100%;
    margin: 15px 24px;
    resize: none;
    font-size: ${(properties) => properties.size}px;
  }
`

const defaultContent = `





FELIZ ANIVERSÁRIO !

Querido Ir∴{{destinatario}}.
Em um dia tão especial como este, quero lhe estender o esquadro e o compasso de meus mais sinceros desejos. Que o G∴A∴D∴U∴ continue a iluminar seu caminho, trazendo sabedoria, força e beleza para todos os seus dias.

São os votos e desejos da Família Alvorada 01

Fraternalmente,
LUÍS HENRIQUE - Ven∴Mestr∴
`

// https://www.npmjs.com/package/react-image-crop
// https://www.npmjs.com/package/html-to-image

interface Properties {
  imageUrl: string
  textProperties: TextProperties
}

const View: React.FC<Properties> = (properties) => {
  const [content, setContent] = useState(defaultContent)

  return (
    <Container {...properties.textProperties}>
      <img src={properties.imageUrl} />
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
      />
    </Container>
  )
}

export default View