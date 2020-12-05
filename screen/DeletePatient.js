import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

class DeletePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  apiHandler = function () {
    //1. For local server call
    //const uri = 'http://127.0.0.1:5000/patients'

    //2. For cloud Heroku server deployed call
    const uri = 'https://patientdatamobileapp.herokuapp.com/patients';
    fetch(uri, {
      headers: {'Content-Type': 'application/json'},
    })
      .then((resp) => resp.json())
      .then((respJson) => {
        this.setState({data: respJson});
      })
      .catch((error) => console.error(error));
  };

  list = () => {
    return (
      <View>
        {this.state.data.map((eachJsonObj) => {
          return (
            <View key={eachJsonObj._id}>
              <TouchableOpacity
                style={styles.displayBox}
                onPress={() => {
                  alert(eachJsonObj._id);
                }}>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                  }}>
                  <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Text style={[styles.list, styles.name]}>
                      Name: {eachJsonObj.Name}{' '}
                    </Text>
                  </View>
                  <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      <Text style={styles.titles}> ID: </Text>
                      {eachJsonObj._id}
                    </Text>
                    <Text />
                    <Text style={{textAlign: 'center'}}>Delete Here</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };
  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View style={{height: '87%', flexDirection: 'row'}}>
          <ScrollView>{this.list()}</ScrollView>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.apiHandler();
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Click on patient
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1B3',
  },
  list: {
    marginTop: 10,
    padding: 5,
    fontSize: 24,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  titles: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#6E9CFF',
  },
  displayBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 20,
    backgroundColor: '#6E9CFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default DeletePatient;
