import React, {useState } from 'react'
import { Flex} from '@chakra-ui/react'
import api from '../services/api';
import Email from '../components/Login/email'
import Banner from '../components/Login/banner'
import Senha from '../components/Login/senha';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

 const history = useNavigate ();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [userName, setUserName] = useState('');
 const [profileUri, setProfileUri] = useState('');
 const [page, setPage] = useState(0);
 const pages= [
   {Element: Email, onChange: setEmail},
   {Element: Senha, onChange: setPassword},
 ]

 function nextPage(){
    api.get(`SearchUser/${email}`).then( response => {
      setUserName(response.data.userName);
      setProfileUri(response.data.profileUri);
      if(page < pages.length - 1){
        setPage(page+1) 
    }})
}

function Autentication(){
  axios.post(`https://acv-ms-people-management.azurewebsites.net/Authentication/Authenticate/`,
  {  
  "email": email,
  "password": '123@Qwe',
  }).then( response => {
  history('/dashboard')
  })
}

 const {Element, onChange} = pages[page]
 
  return (
    <Flex  justify="center">
      <Banner/>
      <Element userName={userName} profileUri={profileUri} next={nextPage} onChange={onChange} autentication={Autentication}/>
    </Flex>
  )
}

export default Login
