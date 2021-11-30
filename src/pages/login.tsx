import React, {useState} from 'react'
import { Flex} from '@chakra-ui/react'
import Email from '../components/Login/email'
import Banner from '../components/Login/banner'
import Senha from '../components/Login/senha';

function Login() {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [page, setPage] = useState(0);
 const pages= [
   {Element: Email, onChange: setEmail},
   {Element: Senha, onChange: setPassword},
 ]

 const {Element, onChange} = pages[page]
 
function handlerNextPage(){
  if(page < pages.length - 1){
    setPage(page+1) }
  else  console.log('Acabou as páginas!')
}


  return (
    <Flex  justify="center">
      <Banner/>
      <Element next={handlerNextPage}  onChange={onChange}/>
    </Flex>
  )
}

export default Login
