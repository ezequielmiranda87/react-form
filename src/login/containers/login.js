import React, { Component } from 'react';
import LoginLayout from '../components/login-layout';
import axios from 'axios';

class LoginContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email:"",
            nameError: "",
            emailError: "",
        }
    }

    handleNameChange = event => {
        this.setState({name: event.target.value})
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value})
    }

    handleSubmitForm = event =>{
        event.preventDefault(); // Prevent browser page reload
        const { name, email } = this.state;

        alert(`Your state values \n
                name: ${name} \n
                email: ${email}`);
    }

    validateName= () => {
        const {name} = this.state;
        this.setState({
            nameError: name.length > 3 ?  null : 'Name must be longer than 3 characters' 
        })
    }

    validateEmail = () => {
        const { email }  = this.state
        this.setState({
            emailError: email.length > 3 ? null : 'Email must be longer than 3 characters'
        })
    }

    render(){
        return(
            <LoginLayout
                handleSubmit = {this.handleSubmitForm}
                handleNameChange = {this.handleNameChange}
                handleEmailChange = {this.handleEmailChange}
                validateName = {this.validateName}
                validateEmail = {this.validateEmail}
                emailError = {this.state.emailError}
                nameError = {this.state.nameError}
            >
            </LoginLayout>
        )
    }
}
export default LoginContainer;