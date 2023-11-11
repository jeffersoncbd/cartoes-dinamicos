import { createGlobalStyle } from 'styled-components'
import { colors } from './styleGuide'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', sans-serif;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background-color: #13122d;
  color: ${colors.lightGreen};
}

`
