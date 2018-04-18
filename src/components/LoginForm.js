import React , {Component} from 'react';
import { Text } from "react-native";
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    state = { email: '', password: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="something@gmail.com"
                        label="Email"
                        value={ this.state.email }
                        onChangeText={ email => this.setState({ email }) }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={ this.state.password }
                        onChangeText={ password => this.setState({ password }) }
                    />
                </CardSection>
                <CardSection>
                    <Button text="Log in!!"/>
                </CardSection>
            </Card>
        );
    }
};
