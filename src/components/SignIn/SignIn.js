import React, { Component } from 'react';
import './SignIn.css'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedInEmail: ' ',
            signedInPassword: ' ',

        }

    }


    onPasswordChange = (event) => {
        this.setState({
            signedInPassword: event.target.value,
        })
    }

    onEmailChange = (event) => {
        this.setState({
            signedInEmail: event.target.value,
        })
    }

    //function to send the post request to server 
    onSubmit = () => {
        const { signedInEmail, signedInPassword } = this.state;


        fetch('http://localhost:5000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signedInEmail,
                password: signedInPassword,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onRouteChange('home');
                    this.props.onErrorSignin(false);
                } else if (data === 'user login details is invalid') {
                    this.props.onRouteChange('register');
                    this.props.onErrorSignin(true);
                    this.props.onErrorMessage(data);
                } else if (data === 'Server Error please try again Later thanks') {
                    this.props.onRouteChange('signin');
                    this.props.onErrorSignin(true);
                    this.props.onErrorMessage(data);
                } else if (data === 'Unable to get user Please register again') {
                    this.props.onRouteChange('register');
                    this.props.onErrorSignin(true);
                    this.props.onErrorMessage(data)
                }
            })
    }

    //Render method for component classes 
    render() {
        const { onRouteChange } = this.props;
        return (
            <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-5 center">
                <main className="pa4 black-80">
                    {
                        this.props.signinError ?
                            <p
                                className="b ph3 pv2 input-reset ba b--black white bg-red grow pointer f6 dib "
                            >
                                {this.props.errorMessage}
                            </p> : <div>
                            </div>
                    }
                    <div className="measure ">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f2 fw6 ph0 mh0">
                                Sign In
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    for="email-address"
                                >
                                    Email
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    for="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="center">
                            <input

                                onClick={
                                    //finding a bug in react is so much fun
                                    //was calling the function directly instead of returning it in a higher order function 
                                    this.onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
                                type="submit"
                                value="Sign in"
                            />

                        </div>
                        <div className="lh-copy mt3 center pointer  dim ">
                            <p
                                onClick={() => onRouteChange('register')}
                                className="f5 link b black db "
                            >
                                Register
                            </p>
                        </div>
                    </div>
                </main>
            </article>

        )
    }

}

export default SignIn;