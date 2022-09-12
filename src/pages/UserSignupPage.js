import React from "react";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
import { withTranslation } from 'react-i18next';

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    }

    onChange = event => {
        const errors = { ...this.state.errors };
        const { t } = this.props;
        errors[event.target.name] = undefined;
        if(event.target.name === 'password' || event.target.name === 'passwordRepeat') {
            if(event.target.name === "password" && event.target.value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t("Password mismatch");
            }else if (event.target.name === "passwordRepeat" && event.target.value !== this.state.password) {
                errors.passwordRepeat = t("Password mismatch");
            }else {
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({
            [event.target.name]: event.target.value,
            errors
        });
    }

    onClickSignup = async (event) => {
        event.preventDefault();

        const body = {
            username: this.state.username,
            displayName: this.state.displayName,
            password: this.state.password
        }
        this.setState({
            pendingApiCall: true
        });

        try {
            const response = await signup(body);
        } catch (err) {
            if(err.response.data.validationErrors){
                this.setState({
                    errors: err.response.data.validationErrors
                });
            }
        }
        this.setState({
            pendingApiCall: false
        });
    }

    render() {
        const { username, displayName, password, passwordRepeat } = this.state.errors;
        const { t } = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Sign Up')}</h1>
                    <Input name="username" label={t("Username")} error={username} onChange={this.onChange} />
                    <Input name="displayName" label={t("Display Name")} error={displayName} onChange={this.onChange} />
                    <Input name="password" label={t("Password")} error={password} onChange={this.onChange} type="password" />
                    <Input name="passwordRepeat" label={t("Password Repeat")} error={passwordRepeat} onChange={this.onChange} type="password" />
                    <div className="text-center">
                        <button disabled={this.state.pendingApiCall || passwordRepeat} className="btn btn-primary mt-3" onClick={this.onClickSignup}>
                            {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} {t('Sign Up')}
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

export default withTranslation()(UserSignupPage);