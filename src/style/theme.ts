import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    yellow:{
      50:'#E9D418',
    },
    black:{
      50: '#131313'
    },
    blue:{
    300: '#232D42'
    },
    white:{
      50: '#FFFFFF'
    },
    gray:{
      50: '#E5E5E5',
      100:'#F8F8F8',
      150:'#EDF2F7',
      200:'#A8A8B3',
      250:'#8A92A6',
      300:'#737380',
      350:'#29292E',      
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
