import {
  createSelector,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { processText } from '../utils/processText'

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
  textBackup?: string
  text: string
  styles: TextStyles
  fields: Record<string, string>
}

const initialState: InitialState = {
  text: '',
  styles: {
    color: '#000',
    size: 22,
    bold: false
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
      const tags = processText(state.text)
      state.fields = {}
      tags.forEach((tag) => {
        state.fields[tag] = ''
      })
    },
    updateField(state, action: PayloadAction<UpdateFieldPayload>) {
      state.fields[action.payload.field] = action.payload.value
    },
    generateImages(state, _: PayloadAction<void>) {
      state.textBackup = state.text
      Object.keys(state.fields).forEach((field) => {
        state.text = state.text.split(`{{${field}}}`).join(state.fields[field])
      })
    },
    revertText(state, _: PayloadAction<void>) {
      if (state.textBackup !== undefined) {
        state.text = state.textBackup
      }
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
