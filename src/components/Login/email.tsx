import React from 'react'
import { Flex, Input, Button, Image, Heading } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

interface Props{
  onChange(email: string): void;
  next(): void;
  // onError?(arg: any): void;
  // onSuccess(arg: any): void;
}

function Email(props: Props) {

  const {onChange, next} = props
   
  return (
    <Flex  justify="center">
      <Flex
        marginTop="50px"
        as="form"
        w="720px"
        h="820px"
        align="center"
        justify="center"
        bg="gray.100"
        flexDir="column"
        borderRadius="0px 10px 10px 0px"
      >
        <Image
          w="130px"
          src="../assets/icon_black.png"
          alt="Icone IBCIDEAL"
          marginBottom="42px"
        />
        <Heading
          fontFamily="Inter"
          fontWeight="400"
          fontSize="16"
          color="gray.250"
          marginBottom="8px"
        >
          Entre com sua senha para acessar sua conta.
        </Heading>
        <Input
          name="email"
          type="email"
          w="320px"
          h="50px"
          r="8px"
          marginBottom="12px"
          border="solid 1px black"
          focusBorderColor="red"
          bgColor="white.50"
          color="gray.200"
          placeholder="Email"
          variant="outline"
          _hover={{
            bgColor: 'gray.150'
          }}
          onChange={(e)=>onChange(e.target.value)} 
        />
        <Button
          iconBase={ArrowRightIcon}
          type="submit"
          colorScheme="yellow"
          color="white.50"
          w="320px"
          h="50px"
          onClick={(e)=>{e.preventDefault(); next()}}
        >
          Próximo
        </Button>
      </Flex>
    </Flex>
  )
}

export default Email
