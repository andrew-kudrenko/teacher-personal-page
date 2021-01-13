import { Theme } from '../enums/common.enums'

export type ThemeState = {
  variant: Theme
}

export type RootState = {
  theme: ThemeState
}
