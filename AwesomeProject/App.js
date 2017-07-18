import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

/* class export allows importing and using this component by other */
export default class App extends React.Component {
  state = {
    name: "Magda"
  }
  text() {
      return <Text>Hello {this.state.name}</Text>
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          {this.text()}
        </View>
        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]}/>
          <View style={[styles.tabBarButton, styles.button2]}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /* it will take all available screen space */
    backgroundColor: '#fff'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#033192'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
    width: 64 /* buttons have width 64, header has flex:1 so that means header will take all space available beetwen buttons */
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBar: {
    flexDirection: 'row',
    height: 50
  },
  tabBarButton: {
    flex: 1
  },
  button1: {
    backgroundColor: '#eea9b8'
  },
  button2: {
    backgroundColor: '#cd8c95'
  }
});
