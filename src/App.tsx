import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/styles/global'
import { defaultTheme } from './assets/styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
