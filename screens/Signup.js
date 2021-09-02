import React from 'react';
import { StyleSheet ,Text, View, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateBio, updateUsername, signup } from '../actions/user.js'

class Signup extends React.Component {

    signup =() => {
        this.props.signup()
        this.props.navigation.navigate('Home')
    }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.border}
        	value={this.props.user.email}
        	onChangeText={input => this.props.updateEmail(input)}
        	placeholder='Email'
        />
        <TextInput
            style={styles.border}
        	value={this.props.user.password}
        	onChangeText={input => this.props.updatePassword(input)}
        	placeholder='Password'
            secureTextEntry={true}
        />
        <TextInput
            style={styles.border}
        	value={this.props.user.updateUsername}
        	onChangeText={input => this.props.updateUsername(input)}
        	placeholder='Username'
        />
        <TextInput
            style={styles.border}
        	value={this.props.user.bio}
        	onChangeText={input => this.props.updateBio(input)}
        	placeholder='Bio'
        />

        <TouchableOpacity style={styles.button} onPress={() => this.signup()}>
            <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, updateBio, updateUsername,signup }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: 20,
      alignItems:'center',
      borderColor:'pink',
      borderWidth: 1,
      borderRadius: 5,
      width: 200,
      backgroundColor: 'grey'
    },
    border: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor:'#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
    }
  });