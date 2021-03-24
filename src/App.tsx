import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Header from './components/header';

import { GlobalStyle } from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter>
          <Routes toggleTheme={toggleTheme} /> */}
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
};

export default App;
