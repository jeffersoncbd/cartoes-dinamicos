import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { ReactComponent as BoldIcon } from '../assets/format_bold.svg'
import { editorActions, editorSelects } from '../reducers/editor'
import { colors } from '../styleGuide'

const Container = styled.div<{ bold: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    border: 1px solid ${colors.lightGreen.main};
    height: 40px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ bold }) => (bold ? colors.lightGreen.main : 'none')};

    &:hover {
      background-color: ${colors.lightGreen.dark};

      & path {
        fill: ${colors.background};
      }
    }
  }

  svg path {
    fill: ${({ bold }) => (bold ? colors.background : colors.lightGreen.main)};
  }

  input {
    width: 80px;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
    text-align: center;
    outline: none;
    border: 1px solid ${colors.lightGreen.main};
    color: ${colors.lightGreen.main};
    font-weight: 700;
    background-color: ${colors.background};
  }
`

const Formatters: React.FC = () => {
  const dispatch = useDispatch()

  const styles = useSelector(editorSelects.styles)

  return (
    <Container bold={styles.bold}>
      <BoldIcon
        onClick={() => {
          const bold = !styles.bold
          dispatch(editorActions.updateTextStyles({ bold }))
        }}
      />
      <input
        type="number"
        value={styles.size}
        onChange={(e) => {
          const size = Number(e.target.value)
          dispatch(editorActions.updateTextStyles({ size }))
        }}
      />
      <input
        type="color"
        value={styles.color}
        onChange={(e) => {
          const color = e.target.value
          dispatch(editorActions.updateTextStyles({ color }))
        }}
      />
    </Container>
  )
}

export default Formatters
