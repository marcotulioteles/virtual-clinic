import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: "380px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    teal: {
      400: "#00B0A1",
      600: "#00877D"  
    },
    blue: {
      600: "#0077B9"
    },
    blueGradient: {
      600: "#039BB0"
    },
    gray: {
      50: "#F5F6F8"
    }
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      html: {
        width:"100vw",
        height: "100vh"
      },
      body: {
        width:"100vw",
        height:"100vh",
        background: "white",
        color: "gray.700"
      },
      a: {
        textDecoration: "none",
        cursor: "pointer"
      }
    }
  }
})