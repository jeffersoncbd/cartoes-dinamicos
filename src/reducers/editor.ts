import {
  createSelector,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type RootState } from '../store'

const textExample = `




Querido Ir∴{{destinatario}}.
Em um dia tão especial como este, quero lhe estender o esquadro e o compasso de meus mais sinceros desejos. Que o G∴A∴D∴U∴ continue a iluminar seu caminho, trazendo sabedoria, força e beleza para todos os seus dias.

São os votos e desejos da Família Alvorada 01

Fraternalmente,
LUÍS HENRIQUE - Ven∴Mestr∴
`

interface UpdateFieldPayload {
  field: string
  value: string
}

export interface TextStyles {
  color: string
  size: number
  bold: boolean
}

interface InitialState {
  text: string
  styles: TextStyles
  fields: Record<string, string>
}

const initialState: InitialState = {
  text: textExample,
  styles: {
    color: '#caac75',
    size: 22,
    bold: true
  },
  fields: {}
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateText(state, action: PayloadAction<string>) {
      state.text = action.payload
    },
    updateTextStyles(state, action: PayloadAction<Partial<TextStyles>>) {
      state.styles = { ...state.styles, ...action.payload }
    },
    clearFields(state, _: PayloadAction<void>) {
      state.fields = {}
    },
    processTheFields(state, _: PayloadAction<void>) {
      function getTag(
        content: string
      ): [string, string] | [undefined, undefined] {
        const parts = content.split('}}')
        if (parts.length <= 1) {
          return [undefined, undefined]
        }
        const firstParts = parts[0].split('{{')
        if (firstParts.length <= 1) {
          return [undefined, undefined]
        }
        parts.shift()
        return [firstParts[1], parts.join('}}')]
      }

      const tags: string[] = []
      let content: string | undefined = state.text
      while (content !== undefined) {
        const [tag, remaining] = getTag(content)
        content = remaining
        if (tag !== undefined && !tags.includes(tag)) {
          tags.push(tag)
        }
      }
      state.fields = {}
      tags.forEach((tag) => {
        state.fields[tag] = ''
      })
    },
    updateField(state, action: PayloadAction<UpdateFieldPayload>) {
      state.fields[action.payload.field] = action.payload.value
    }
  }
})

export const editorReducer = editorSlice.reducer
export const editorActions = editorSlice.actions
export const editorSelects = {
  text: (state: RootState) => state.editor.text,
  styles: (state: RootState) => state.editor.styles,
  fields: (state: RootState) => state.editor.fields,
  fieldsName: createSelector(
    (state: RootState) => state.editor.fields,
    (fields) => Object.keys(fields)
  )
}
