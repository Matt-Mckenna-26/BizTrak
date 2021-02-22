import React, {useEffect, useState} from 'react'
import LoginForm from "../components/LoginForm"
import RegForm from "../components/RegForm"
import { Box, Button, Container } from "@material-ui/core"
import Logo from '../Images/BizTrak.png'
import axios from 'axios'


const LandingPage = () => {
    const [registering, setRegistering] = useState({
        registering: true,
        style : {
            register: 'primary',
            login: 'default'
        } 
    })
    return(
        <Container>
            <img src={Logo}  style={{height:'15rem'}}/> 
            {registering.registering === true?
                <RegForm setRegistering={setRegistering}/>:
                <LoginForm/>}
                <Box className='pb-5'>
                    <Button color={registering.style.login} variant='contained' onClick={(e) => setRegistering({registering:false, style:{register: 'default', login:'primary'}})}>Sign Back In</Button>
                    <Button color={registering.style.register} variant='contained' onClick={(e) => setRegistering({registering:true, style:{register: 'primary', login:'default'}})}>Create an Account</Button>
                </Box>
        </Container>
    )
}

export default LandingPage;