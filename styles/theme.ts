import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'Open Sans, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  }, 
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      500: '#4a4a4a',
      600: '#29292e',
      700: '#202024', 
      800: '#121214'
    }
  },
}


export default customTheme