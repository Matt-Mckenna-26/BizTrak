import React, {useState} from 'react';
import {Button, Container, FormGroup, Input, InputLabel, FormControl} from '@material-ui/core';
import axios from 'axios';
import {navigate} from '@reach/router';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        let User = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8000/api/login', User,
        {withCredentials: true}
        )
            .then(res => {console.log('succesfully loggedin')
                    navigate('/dashboard')})            
            .catch(err => console.log({err}))
    }
    
    return(
        <Container>
            <h1>Login to your BizTrak Account</h1>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Email: </InputLabel>
                        <Input type ='text' onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password: </InputLabel>
                        <Input type ='password' onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <Button color='primary' className='m-3' variant ='contained' onClick={handleLogin}>Login</Button>
                </FormGroup>
        </Container>
    )
}

export default LoginForm;