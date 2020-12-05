/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class PatientName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: '',
    };
  }

  apiHandler = function () {
    var input = this.state.text;

    //1. For local server call
    //const uri = 'http://127.0.0.1:5000/patients/search'

    //2. For cloud Heroku server deployed call
    const uri = 'https://patientdatamobileapp.herokuapp.com/patients';

    fetch(uri, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: input,
      }),
    })
      .then((resp) => resp.json())
      .then((respJson) => {
        this.setState({data: respJson});
        if (respJson.length == 0) {
          alert('No data for specific name');
        }
      })
      .catch((error) => console.error(error));
  };

  list = () => {
    return (
      <View>
        {this.state.data.map((eachJsonObj) => {
          return (
            <View key={eachJsonObj._id}>
              <View style={styles.displayBox}>
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
                    <Text />
                  </View>
                  <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> ID: </Text>
                      {eachJsonObj._id}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Age: </Text>
                      {eachJsonObj.Age}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Phone Number: </Text>
                      {eachJsonObj.PhoneNumber}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Blood Pressure: </Text>
                      {eachJsonObj.BloodPressure}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Heart Beat Rate: </Text>
                      {eachJsonObj.HeartBeatRate}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Respiratory Rate: </Text>
                      {eachJsonObj.RespiratoryRate}
                    </Text>
                    <Text style={styles.baseStyling}>
                      <Text style={styles.titles}> Blood Oxygen Level: </Text>
                      {eachJsonObj.BloodOxygenLevel}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF1B3'}}>
        {}
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 160,
                height: 53,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Patient Name:
              </Text>
            </View>
            <View
              style={{
                width: 210,
                height: 45,
                backgroundColor: 'white',
                marginLeft: 20,
              }}>
              <View style={{height: '100%', flexDirection: 'row'}}>
                <TextInput
                  style={{width: 200, height: 40}}
                  multiline={false}
                  placeholder="Name"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.Name}
                  style={{flex: 1, fontSize: 24, justifyContent: 'center'}}
                  ref={(input) => {
                    this.NameInput = input;
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        {}
        <View style={{flex: 5}}>
          <ScrollView>{this.list()}</ScrollView>
        </View>

        {}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              var letters = /^[A-Za-z]+$/;
              if (this.state.text.trim() == '') {
                alert('Enter Name');
              } else {
                if (!this.state.text.match(letters)) {
                  this.NameInput.clear();
                  this.setState({text: ''});
                  alert('Name should be alphabet');
                } else {
                  this.apiHandler();
                  this.NameInput.clear();
                  this.setState({text: ''});
                }
              }
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Search Patient
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF1B3',
  },
  button: {
    marginTop: 50,
    marginBottom: 30,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#6E9CFF',
  },
  input: {
    width: 200,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    margin: 8,
    padding: 8,
  },
  button2: {
    marginTop: 50,
    marginBottom: 50,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#6E9CFF',
  },
  list: {
    marginTop: 10,
    padding: 5,
    fontSize: 24,
  },
  titles: {
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
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
  baseStyling: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default PatientName;
