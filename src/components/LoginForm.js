import React , {Component} from 'react';
import { Text } from "react-native";
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
    state = { email: '', password: ''};

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error:'' });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                    });
            });
    }

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
                    <Button text="Log in!!" onPress={this.onButtonPress.bind(this)}/>
                </CardSection>
            </Card>
        );
    }
};
