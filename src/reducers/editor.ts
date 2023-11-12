import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'

const textExample = `




Querido Ir∴{{destinatario}}.
Em um dia tão especial como este, quero lhe estender o esquadro e o compasso de meus mais sinceros desejos. Que o G∴A∴D∴U∴ continue a iluminar seu caminho, trazendo sabedoria, força e beleza para todos os seus dias.

São os votos e desejos da Família Alvorada 01

Fraternalmente,
LUÍS HENRIQUE - Ven∴Mestr∴
`

export interface TextStyles {
  color: string
  size: number
  bold: boolean
}

interface InitialState {
  text: string
  styles: TextStyles
}

const initialState: InitialState = {
  text: textExample,
  styles: {
    color: '#caac75',
    size: 22,
    bold: true
  }
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateText(state, actions: PayloadAction<string>) {
      state.text = actions.payload
    },
    updateTextStyles(state, actions: PayloadAction<Partial<TextStyles>>) {
      state.styles = { ...state.styles, ...actions.payload }
    }
  }
})

export const editorReducer = editorSlice.reducer
export const editorActions = editorSlice.actions
export const editorSelects = {
  text: (state: RootState) => state.editor.text,
  styles: (state: RootState) => state.editor.styles
}
