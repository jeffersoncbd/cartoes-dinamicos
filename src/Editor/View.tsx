import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  editorActions,
  editorSelects,
  type TextStyles
} from '../reducers/editor'

const Container = styled.div<TextStyles>`
  height: 90vh;
  width: 90vh;
  position: relative;

  img {
    height: 90vh;
    width: 90vh;
    object-fit: cover;
  }

  textarea {
    box-sizing: border-box;
    font-weight: ${(properties) => (properties.bold ? 700 : 400)};
    background-color: #00000000;
    text-align: center;
    color: ${(properties) => properties.color};
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
    padding: 16px;
    font-size: ${(properties) => properties.size}px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

// https://www.npmjs.com/package/react-image-crop
// https://www.npmjs.com/package/html-to-image

interface Properties {
  imageUrl: string
}

const View: React.FC<Properties> = (properties) => {
  const dispatch = useDispatch()

  const text = useSelector(editorSelects.text)
  const styles = useSelector(editorSelects.styles)

  return (
    <Container {...styles} id="card">
      <img src={properties.imageUrl} />
      <textarea
        value={text}
        onChange={(e) => {
          dispatch(editorActions.updateText(e.target.value))
        }}
      />
    </Container>
  )
}

export default View
