import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // inserindo de forma dinâmica o tipo do tema

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}

// PS: O código acima é uma forma de inserir o tema no styled-components, mas não é a melhor forma de se fazer isso. A melhor forma é a seguinte:
