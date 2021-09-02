import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, subtract } from '../actions'



class Home extends React.Component {
  render() {
  return (
    <View style={styles.container}>
              <Text>Home {this.props.counter}</Text>
      <Text>How many apps are we building?! {this.props.counter}</Text>
      <Button title='Add' onPress={() => this.props.add()} />
      <Button title='Subtract' onPress={() => this.props.subtract()} />
      <StatusBar style="auto" />
    </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ add, subtract }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)













const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});