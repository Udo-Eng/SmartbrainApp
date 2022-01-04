import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',

        }
    }


    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    onSubmit = () => {
        // const { loadUser, onRouteChange } = this.props;
        const { name, email, password } = this.state;

        fetch('https://powerful-dusk-84124.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(response => response.json())
            .then(data => {

                if (data.id) {
                    this.props.loadUser(data);
                    this.props.onRouteChange('home');
                } else if (data === 'user not sucessfully registered') {
                    this.props.onRouteChange('register');
                    this.props.onErrorSignin(true);
                    this.props.onErrorMessage(data);
                }

            })
    }


    render() {

        return (
            <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-5 center" >
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
                            id="register"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f2 fw6 ph0 mh0">
                                Register Now
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="email-address"
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
                                onClick={this.onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
                                value="Register"
                                type="submit"
                            />
                        </div>
                    </div>

                </main>


            </article>

        )
    }

}

export default Register;