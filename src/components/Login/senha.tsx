import React, { Dispatch, SetStateAction } from 'react'
import { Flex, Input, Button, Image, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Icon} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


interface Props{
  next(): void;
  onChange: Dispatch<SetStateAction<string>>;
}

<Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Ops :(</AlertTitle>
  <AlertDescription>Aconteceu algo de errado!</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>

function Senha(props: Props) {


  <Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Ops :(</AlertTitle>
  <AlertDescription>Aconteceu algo de errado!</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>

  // const requestInfo ={
  //   method: 'POST',
  //   body: JSON.stringify({}),
  //   headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // }
  // fetch('https://acv-ms-people-management.azurewebsites.net/Authentication/Authenticate', requestInfo)
  // .then(response =>{
  //   if(response.ok) {
  //     return response.json()
  //   }
  //   throw new Error("Senha inválida...");
  // })

  return (
    <Flex  justify="center">
      <Flex
        marginTop="50px"
        as="form"
        w="720px"
        h="820px"
        align="center"
        justify="center"
        bg="#F8F8F8"
        flexDir="column"
        borderRadius="0px 10px 10px 0px"
      >
        <Image
          w="130px"
          marginBottom="8px"
          src="../assets/avatar.png"
          alt="Icone IBCIDEAL"
        />
        <Heading
          fontFamily="Inter"
          fontWeight="500"
          fontSize="26"
          marginBottom="8px"
          color="#232D42"
        >
              Olá! Wherlesson Rocha
        </Heading>

        <Heading
          fontFamily="Inter"
          fontWeight="400"
          fontSize="16"
          color="#8A92A6"          
          marginBottom="11px"
        >
          Entre com sua senha para acessar sua conta.
        </Heading>
        <Input
          marginBottom="12px"
          name="password"
          type="password"
          w="320px"
          h="50px"
          r="8px"
          border="solid 1px black"
          focusBorderColor="red"
          bgColor="white"
          color="gray.100"
          placeholder="Senha"
          variant="outline"
          _hover={{
            bgColor: 'gray.150'
          }}
        />
        <Button
          type="submit"
          colorScheme="yellow"
          color="white"
          w="320px"
          h="50px"
          onClick={()=>{props.next()}}
        >
          Próximo
        </Button>
      </Flex>
    </Flex>
  )
}

export default Senha
