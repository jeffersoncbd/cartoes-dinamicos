import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import Button from '../components/Button'
import { editorActions, editorSelects } from '../reducers/editor'
import { colors, sizes } from '../styleGuide'

const Container = styled.div`
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  input {
    box-sizing: border-box;
    border-radius: ${sizes.borderRadius};
    height: ${sizes.height};
    padding: 0 ${sizes.padding};
    border: none;
    width: 80%;
    margin: 0;
  }

  div.actions {
    background-color: ${colors.background};
    padding: ${sizes.padding} 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
  }
`

const Actions: React.FC = () => {
  const dispatch = useDispatch()

  const fields = useSelector(editorSelects.fields)
  const fieldsName = useSelector(editorSelects.fieldsName)

  if (fieldsName.length > 0) {
    return (
      <Container>
        {fieldsName.map((fieldName) => (
          <input
            key={fieldName}
            name={fieldName}
            placeholder={fieldName}
            value={fields[fieldName]}
            onChange={(e) =>
              dispatch(
                editorActions.updateField({
                  field: fieldName,
                  value: e.target.value
                })
              )
            }
          />
        ))}
        <div className="actions">
          <Button onClick={() => dispatch(editorActions.clearFields())}>
            Voltar a editar
          </Button>
          <Button onClick={() => dispatch(editorActions.generateImages())}>
            Gerar imagens
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Button
        onClick={() => {
          dispatch(editorActions.processTheFields())
        }}
      >
        Processar campos
      </Button>
    </Container>
  )
}

export default Actions
