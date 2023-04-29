import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


import { myTheme } from './';


// eslint-disable-next-line react/prop-types
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ myTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
      
      { children }
    </ThemeProvider>
  )
}