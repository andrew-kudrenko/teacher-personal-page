import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useCustomTheme } from '../styles/jss/theme'
import '../styles/scss/globals.scss'

function App({ Component, pageProps }) {
  const theme = useCustomTheme()

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default function AppWithStore(props) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
}
