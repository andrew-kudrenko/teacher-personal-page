import {
  createMuiTheme,
  Theme as MaterialTheme,
} from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import { Theme } from '../../enums/common.enums'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/redux.types'
import { useEffect } from 'react'

function setStoredTheme(variant: Theme) {
  window.localStorage.setItem('theme', JSON.stringify(variant))
}

export const useCustomTheme = (): MaterialTheme => {
  const { variant } = useSelector((state: RootState) => state.theme)

  useEffect(setStoredTheme.bind(null, variant), [])

  return createMuiTheme({
    palette: {
      primary: { main: colors.amber[100] },
      secondary: { main: colors.orange[200] },
      type: variant === Theme.Light ? 'light' : 'dark',
    },
  })
}
