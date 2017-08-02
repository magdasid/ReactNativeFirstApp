//import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create a component with JSX
const App = () => {
  return (
    <View style= { {flex:1} }>
      <Header headerText= {'Albums'}/>
      <AlbumList/>
    </View>
  );
};

//render it
AppRegistry.registerComponent('App', () => App);