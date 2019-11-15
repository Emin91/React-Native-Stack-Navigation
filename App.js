import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class AppMain extends Component {
  static navigationOptions = {
    title: 'Page 1',
    headerStyle: {
      backgroundColor: '#00b8d9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontWeight: '100',
    },
  };
	render() {
		return (
      <View style={styles.container}>
          <View>
            <TouchableOpacity 
                  style={styles.button}
                  onPress={()=> this.props.navigation.navigate('Details')}
                  >  
                  <Text style={styles.buttonText}>Go to page 2</Text>
            </TouchableOpacity>
          </View>
      </View>   
	  );
  } 
} 

class AppDetails extends Component {
  static navigationOptions = {
    title: 'Page 2',
    headerStyle: {
      backgroundColor: '#00b8d9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontWeight: '100',
    },
  };
	render() {
		return (
      <View style={styles.container}>
          <View>
            <TouchableOpacity 
                  style={styles.button}
                  onPress={()=> this.props.navigation.navigate('Home')}
                  >  
                  <Text style={styles.buttonText}>Go to page 1</Text>
            </TouchableOpacity>
          </View>
      </View>   
	  );
  } 
} 


const myMenu = createStackNavigator(
  {
    Home: AppMain,
    Details: AppDetails,
},
{
    initialRouteName: 'Home',
}
);
 const AppContainer = createAppContainer(myMenu)

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262929',
},
    button: {
        width: 350,
        borderRadius: 15,
        marginTop: "10%",
        backgroundColor: '#00b8d9',
        padding: 20,
    },

    buttonText: {
        fontWeight: '100',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
});