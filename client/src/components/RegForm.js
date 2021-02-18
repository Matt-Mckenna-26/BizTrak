import React, {useState} from 'react';
import axios from 'axios';
import {Button, Container, FormGroup, Input, InputLabel, FormControl, Grid, Box} from '@material-ui/core';
import {spacing, sizing} from '@material-ui/system'



const RegForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const handleReg = (e) => {
        e.preventDefault();
        const newUser = {username: username, email:email, password:password, confirmPassword:confirmPassword};
        axios.post("/api/register", newUser, 
            {
            withCredentials: true
            }
        )
        .then (res => {
            console.log('user was succesfully registered')
        })
        .catch( err => {
            console.log(err);
            // setErrors(err.response.data.errors);
        })
    }
    return (
            <Container>
                <h1>Register for your BizTrak Account</h1>
                <FormGroup m={5}>
                        <FormControl>
                            <InputLabel>Username: </InputLabel>
                            <Input type ='text' onChange={(e) => setUsername(e.target.value)} />
                        </FormControl>
                    <FormControl>
                        <InputLabel>Email: </InputLabel>
                        <Input type ='text' onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password: </InputLabel>
                        <Input type ='password' onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Confirm Password: </InputLabel>
                        <Input type ='password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </FormControl>
                    <Button color='primary' className='m-3' variant ='contained' onClick={handleReg}>Register</Button>
                </FormGroup>
            </Container>
    )
}

export default RegForm 