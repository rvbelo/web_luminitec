import React from 'react'
import {  Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Icon} from '@chakra-ui/react'

function Error() {
<Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Ops :(</AlertTitle>
  <AlertDescription>Aconteceu algo de errado!</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>
}
export default Error