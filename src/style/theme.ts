import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    yellow:{
      50:'#E9D418',
    },
    black:{
      50: '#131313'
    },
    white:{
      50: '#FFFFFF'
    },
    gray:{
      
      50: '#E5E5E5',
      100:'#A8A8B3',
      150:'#EDF2F7',
    }
  },
  fonts:{
    heading:'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        
        bg:'gray.50',
        color: 'white.50',      
      }
    }
  }
})
