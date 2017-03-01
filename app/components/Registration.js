import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import axios from 'axios';
import IconStyle1 from 'react-native-vector-icons/SimpleLineIcons';
import IconStyle2 from 'react-native-vector-icons/MaterialIcons';
import IconStyle3 from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center'
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  formContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
  },
  inputLabel: {
    color: '#393836',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 15,
  },
  inputField: {
    fontSize: 17,
    height: 50,
    marginLeft: 10,
    marginBottom: 30,
    width: 290
  }
});

const userIcon = (<IconStyle1 name="user" size={18} color="black" />);
const emailIcon = (<IconStyle2 name="email" size={20} color="black" />)
const passwordIcon = (<IconStyle1 name="key" size={20} color="black" />);
const addressIcon = (<IconStyle3 name="address" size={20} color="black" />);

// BackAndroid.addEventListener("hardwareBackPress", () => {
//   if (navigator.getCurrentRoutes().length > 1) {
//     this.navigate('login')
//     return true // do not exit app
//   } else {
//     return false // exit app
//   }
// });

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      address: '',
    };

    this.navigate = this.navigate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigate(routeName) {
    this.props.navigator.push({ name: routeName })
  }

  handleSubmit() {
    console.error(this.state);
    // callApi(this.state);
  }

  render() {
    return <Image
      source={require('../images/bg.jpg')}
      style={styles.pageContainer}
      title="Created by Kjpargeter - Freepik.com"
    >
      <View>
        <Text style={styles.appNameText}>
          APP NAME
        </Text>
        <Text style={styles.welcomeText}>
          Report. Review. Revamp.
        </Text>

        <View style={styles.formContainer}>

            <View style={{ flexDirection: 'row' }}>{userIcon}<Text style={styles.inputLabel}>Username</Text></View>
            <TextInput
              name="username"
              style={styles.inputField}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />

            <View style={{ flexDirection: 'row' }}>{emailIcon}<Text style={styles.inputLabel}>Email</Text></View>
            <TextInput
              name="email"
              style={styles.inputField}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />

            <View style={{ flexDirection: 'row' }}>{passwordIcon}<Text style={styles.inputLabel}>Password</Text></View>
            <TextInput
              name="password"
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              style={styles.inputField}
              value={this.state.password}
            />

            <View style={{ flexDirection: 'row' }}>{addressIcon}<Text style={styles.inputLabel}>Address</Text></View>
            <TextInput
              name="address"
              style={styles.inputField}
              onChangeText={(address) => this.setState({address})}
              value={this.state.address}
            />

            <View style={{ height: 10 }}></View>

            <Button
              color="#517cc6"
              onPress={this.handleSubmit}
              style={styles.submitButton}
              title="Create Account"
            />
        </View>
      </View>
    </Image>
  }
}

function callApi(userInfo) {
  axios
    .post('https://q3project-server.herokuapp.com/api/users', userInfo)
    .then((res) => {

    })
    .catch((err) => {
      console.error(err.message);
    });
}
