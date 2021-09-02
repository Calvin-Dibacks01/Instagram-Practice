import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class Upload extends React.Component {

  render() {
  return (
    <View style={styles.container}>
        <Text>Upload {this.props.counter}</Text>
      <StatusBar style="auto" />
    </View>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Upload)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
