import React, {useState} from 'react'
import { Flex, Input, Button, Heading, Avatar} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
interface Props{
  onChange(password: any): void;
  profileUri: string;
  userName: string;
  autentication(): void;
}
function Senha(props: Props) {
  const [password, setPassword] = useState('');

const {profileUri , userName, autentication} = props
console.log('prof teste', profileUri)
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
      <Avatar 
        size='2xl' 
        name={userName} 
        src={profileUri} 
        marginBottom="8px"
      />
        <Heading
            fontWeight="500"
            fontFamily="Inter"
            fontSize="26"
            marginBottom="8px"
            color="blue.300"
        >
           Olá! {userName}
      </Heading>
        <Heading
          fontFamily="Inter"
          fontWeight="400"
          fontSize="16"
          color="gray.250"          
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
          bgColor="white.50"
          color="gray.200"
          placeholder="Senha"
          variant="outline"
          _hover={{
            bgColor: 'gray.150'
          }}
          onChange={(e)=>setPassword(e.target.value)}
       />
        <Button
          iconBase={ArrowRightIcon}
          type="submit"
          colorScheme="yellow"
          color="white.50"
          w="320px"
          h="50px"
          onClick={(e)=>{e.preventDefault(); autentication()}}
        >
          Próximo
        </Button>
      </Flex>
    </Flex>
  )
}

export default Senha
