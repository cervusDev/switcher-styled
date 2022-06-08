import { Header } from './components/Header';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { usePersistState } from './hooks/usePersist'

import light from './global/styles/themes/light';
import dark from './global/styles/themes/dark';

import GlobalStyles from './global/styles/global';

export function App() {
  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  )
}