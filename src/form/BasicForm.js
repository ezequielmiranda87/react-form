import React, { Component } from 'react';

export default class BasicForm extends Component{
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

    handleSubmit = event =>{
        event.preventDefault(); // Prevent browser page reload
        const { name, email } = this.state;

        alert(`Your state values \n
                name: ${name} \n
                email: ${email}`);
    }

    validateName= () =>{
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
        //const isValidName = this.state.name.length > 3;
        //const isValidEmail =  this.state.email.length > 3;

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input 
                        name = "name"
                        className = "form-control"
                        id = "name"
                        placeholder = "Enter name"
                        value =  {this.state.name}
                        onBlur= {this.validateName}
                        onChange = {this.handleNameChange}
                    />
              <div className='invalidFeedback'>{this.state.nameError}</div>

                </div>

                <div className="formGroup">
                    <label htmlFor= "email" >Email</label>
                    <input 
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enver email"
                        value= {this.state.email}
                        onBlur= {this.validateEmail}
                        onChange = {this.handleEmailChange}
                    />
                <div className='invalidFeedback'>{this.state.emailError}</div>

                </div>
                <button type="submit" className="btn btn-success btn-block">
                    Submit
                </button>
            </form>
        )
    }
}