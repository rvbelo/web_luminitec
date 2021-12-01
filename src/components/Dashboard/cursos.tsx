import { Flex, Image, Heading } from '@chakra-ui/react'
import React from 'react'


function cursos() {

  return (
    <Flex  justify="center">
      <Flex
        paddingLeft="77px"
        marginTop="50px"
        w="720px"
        h="820px"
        align="center"
        justify="center"
        bg="gray.50"
        flexDir="column"
        borderRadius="10px 0 0 10px"
      >
        <Image
          w="150px"
          src="../assets/no_cursos.png"
          alt="Nenhum Curso Localizado"
          paddingBottom="16px"
        />
        <Heading
          marginLeft="76.59px"
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="18"
          color="gray.350"
          margin="0 0 12px"
          paddingBottom="8px"
        >
Nenhum curso por aqui...        </Heading>
        <Heading
          marginLeft="76.59px"
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="14"
          color=" gray.300"
          margin="0 0 12px"
          opacity="70%"
          textAlign="center"
        >
Faça o sua matrícula e inicie hoje mesmo um <br/> de nossos cursos.
        </Heading>
      </Flex>
         </Flex>
  )
}

export default cursos