import React from 'react'
import { Flex, Image, Heading } from '@chakra-ui/react'

function Banner() {
  return (
    <Flex  justify="center">
      <Flex
        paddingLeft="77px"
        marginTop="50px"
        w="720px"
        h="820px"
        justify="center"
        bg="black.50"
        flexDir="column"
        borderRadius="10px 0 0 10px"
      >
        <Image
          w="301px"
          src="../assets/img_login.png"
          alt="Icone Login"
        />
        <Heading
          marginLeft="76.59px"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="36"
          color="white"
          margin="0 0 12px"
        >
          Adquira mais conhecimento.
        </Heading>
        <Heading
          marginLeft="76.59px"
          fontFamily="Roboto"
          fontWeight="200"
          fontSize="24"
          color="#F8F8F8"
          margin="0 0 12px"
          opacity="70%"
        >
          A sabedoria preserva a vida <br />
          de quem a possui.
        </Heading>
      </Flex>
         </Flex>
  )
}

export default Banner
