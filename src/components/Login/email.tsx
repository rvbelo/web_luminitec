import React, { Dispatch, SetStateAction } from 'react'
import { Flex, Input, Button, Image, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react'

interface Props{
  next(): void;
  onChange: Dispatch<SetStateAction<string>>;
}

function Email(props: Props) {

  <Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Ops :(</AlertTitle>
  <AlertDescription>Aconteceu algo de errado!</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>

  const requestInfo ={
    method: 'GET',
    body: JSON.stringify({}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  fetch('https://acv-ms-people-management.azurewebsites.net/Authentication/SearchUser/%7Bemail%7D', requestInfo)
  .then(response =>{
    if(response.ok) {
      return response.json()
    }
    throw new Error("Email inválido...");
  })

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
          paddingBottom="42px"
          src="../assets/icon_black.png"
          alt="Icone IBCIDEAL"
        />
        <Heading
          fontFamily="Inter"
          fontWeight="400"
          fontSize="16"
          color="#8A92A6"
          margin="0 0 12px"
        >
          Entre com sua senha para acessar sua conta.
        </Heading>
        <Input
          name="email"
          type="email"
          w="320px"
          h="50px"
          r="8px"
          p="13px 12px 13px 16px"
          border="solid 1px black"
          focusBorderColor="red"
          bgColor="white"
          color="gray.100"
          placeholder="Email"
          variant="outline"
          _hover={{
            bgColor: 'gray.150'
          }}
        />
        <Button
          type="submit"
          mt="6"
          colorScheme="yellow"
          color="white"
          w="320px"
          h="50px"
          onClick={props.next}
        >
          Próximo
        </Button>
      </Flex>
    </Flex>
  )
}

export default Email
