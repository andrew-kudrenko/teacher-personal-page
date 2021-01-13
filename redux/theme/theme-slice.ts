import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../../enums/common.enums'
import { ThemeState } from '../../types/redux.types'

// const storedTheme: Theme =
//   JSON.parse(window.localStorage.getItem('theme') ?? 'null') ?? Theme.Light

const initialState: ThemeState = { variant: Theme.Light }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.variant = state.variant === Theme.Light ? Theme.Dark : Theme.Light
    },
    setTheme: (state, action) => {
      state.variant = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer
