import React from 'react';

const LoginLayout = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div className="formGroup">
                    <label htmlFor="name">Name</label>

                    <input
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
                    <label htmlFor="email" >Email</label>
                    <input
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

                <button
                    type="submit"
                    className="btn btn-success btn-block"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default LoginLayout;