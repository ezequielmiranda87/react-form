import React from 'react';
import './login-layout.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const LoginLayout = props => {
    return (
        <Paper >
            <form onSubmit={props.handleSubmit} className="form-login">
                <div className="formGroup">
                    <TextField
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={props.name}
                        onBlur={props.validateName}
                        onChange={props.handleNameChange}
                    />
                    <div className='invalidFeedback'>
                        {props.nameError}
                        </div>
                </div>

                <div className="formGroup">
                    <TextField
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enver email"
                        value={props.email}
                        onBlur={props.validateEmail}
                        onChange={props.handleEmailChange}
                    />
                    <div className='invalidFeedback'>
                        {props.emailError}
                    </div>
                </div>

                <Button variant="contained" color="primary"
                    type="submit"
                >
                    Submit
                </Button>

            </form>
        </Paper>
    )
}
export default LoginLayout;