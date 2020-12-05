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

class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: '',
      PhoneNumber: '',
      BloodPressure: '',
      HeartBeatRate: '',
      RespiratoryRate: '',
      BloodOxygenLevel: '',
    };
  }

  handleText = (text, type) => {
    switch (type) {
      case 'Name':
        this.setState({Name: text});
        break;
      case 'Age':
        this.setState({Age: text});
        break;
      case 'PhoneNumber':
        this.setState({PhoneNumber: text});
        break;
      case 'BloodPressure':
        this.setState({BloodPressure: text});
        break;
      case 'HeartBeatRate':
        this.setState({HeartBeatRate: text});
        break;
      case 'RespiratoryRate':
        this.setState({RespiratoryRate: text});
        break;
      case 'BloodOxygenLevel':
        this.setState({BloodOxygenLevel: text});
        break;
      default:
        break;
    }
  };

  apiHandler = function () {
    var _Name = this.state.Name;
    var _Age = this.state.Age;
    var _PhoneNumber = this.state.PhoneNumber;
    var _BloodPressure = this.state.BloodPressure;
    var _HeartBeatRate = this.state.HeartBeatRate;
    var _RespiratoryRate = this.state.RespiratoryRate;
    var _BloodOxygenLevel = this.state.BloodOxygenLevel;

    //1. for local server call
    //const uri = 'http://127.0.0.1:5000/patients'

    //2. For cloud heroku deployed server call
    const uri = 'https://patientdatamobileapp.herokuapp.com/patients';

    fetch(uri, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: _Name,
        Age: _Age,
        PhoneNumber: _PhoneNumber,
        BloodPressure: _BloodPressure,
        HeartBeatRate: _HeartBeatRate,
        RespiratoryRate: _RespiratoryRate,
        BloodOxygenLevel: _BloodOxygenLevel,
      }),
    })
      .then((resp) => {
        resp.json();
        if (resp.status == 201) {
          alert('!Patient added!');
          this.props.navigation.navigate('MainPage');
        }
      })
      .then((respJson) => {
        this.setState({data: respJson});
      })
      .catch((error) => {
        console.error(error);
        alert('!Error, Try Again!');
      });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF1B3'}}>
        <View style={{flex: 6}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
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
                  Patient Full Name:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder="Name"
                    onChangeText={(text) => this.handleText(text, 'Name')}
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.NameInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Patient Age:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder=" Age"
                    onChangeText={(text) => this.handleText(text, 'Age')}
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.AgeInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Phone number:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder=" PhoneNumber"
                    onChangeText={(text) =>
                      this.handleText(text, 'PhoneNumber')
                    }
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.PhoneNumberInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  padding: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Blood Pressure:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder="Enter between 0-140"
                    onChangeText={(text) =>
                      this.handleText(text, 'BloodPressure')
                    }
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.BloodPressureInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Heart Beat Rate:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder="Enter between 30-450"
                    onChangeText={(text) =>
                      this.handleText(text, 'HeartBeatRate')
                    }
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.HeartBeatRateInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Respiratory Rate:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder="Enter Between 0-25"
                    onChangeText={(text) =>
                      this.handleText(text, 'RespiratoryRate')
                    }
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.RespiratoryRateInput = input;
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 160,
                  height: 53,
                  justifyContent: 'center',
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Blood Oxygen Level:
                </Text>
              </View>
              <View
                style={{
                  width: 210,
                  height: 45,
                  backgroundColor: 'white',
                  marginLeft: 20,
                }}>
                <View style={{height: '95%', flexDirection: 'row'}}>
                  <TextInput
                    style={{width: 200, height: 40}}
                    autoCorrect={false}
                    placeholder="Enter between 0 - 150"
                    onChangeText={(text) =>
                      this.handleText(text, 'BloodOxygenLevel')
                    }
                    style={{flex: 1, fontSize: 20, justifyContent: 'center'}}
                    ref={(input) => {
                      this.BloodOxygenInput = input;
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF1B3',
          }}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              if (this.state.Name.trim() == '') {
                alert('Enter Name');
              } else if (this.state.Age.trim() == '') {
                alert('Enter Age');
              } else if (this.state.PhoneNumber.trim() == '') {
                alert('Enter phone number');
              } else if (this.state.BloodPressure.trim() == '') {
                alert('Enter Blood pressure');
              } else if (this.state.HeartBeatRate.trim() == '') {
                alert('Enter Heart beat rate');
              } else if (this.state.RespiratoryRate.trim() == '') {
                alert('Enter Respiratory rate');
              } else if (this.state.BloodOxygenLevel.trim() == '') {
                alert('Enter Blood oxygen level');
              } else {
                var letters = /^[A-Za-z]+$/;
                var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

                if (!this.state.Name.match(letters)) {
                  this.NameInput.clear();
                  this.setState({Name: ''});
                  alert('Name should alphabets');
                } else if (
                  isNaN(this.state.Age) ||
                  this.state.Age < 2 ||
                  this.state.Age > 100
                ) {
                  this.AgeInput.clear();
                  this.setState({Age: ''});
                  alert('Age should be in between 2-100');
                } else if (!this.state.PhoneNumber.match(phoneno)) {
                  this.PhoneNumberInput.clear();
                  this.setState({PhoneNumber: ''});
                  alert('Phone number should be in digits');
                } else if (
                  isNaN(this.state.BloodPressure) ||
                  this.state.BloodPressure > 140 ||
                  this.state.BloodPressure < 0
                ) {
                  this.BloodPressureInput.clear();
                  this.setState({BloodPressure: ''});
                  alert('Blood pressure should be in digit');
                } else if (
                  isNaN(this.state.HeartBeatRate) ||
                  this.state.HeartBeatRate > 450 ||
                  this.state.HeartBeatRate < 30
                ) {
                  this.HeartRateInput.clear();
                  this.setState({HeartBeatRate: ''});
                  alert('Heartbeat Rate should be in digits');
                } else if (
                  isNaN(this.state.RespiratoryRate) ||
                  this.state.RespiratoryRate > 25 ||
                  this.state.RespiratoryRate < 0
                ) {
                  this.RespiratoryRateInput.clear();
                  this.setState({RespiratoryRate: ''});
                  alert('Respiratory Rate should be in digits');
                } else if (
                  isNaN(this.state.BloodOxygenLevel) ||
                  this.state.BloodOxygenLevel > 150 ||
                  this.state.BloodOxygenLevel < 0
                ) {
                  this.BloodOxygenInput.clear();
                  this.setState({BloodOxygenLevel: ''});
                  alert('Blood oxygen should be in digits');
                } else {
                  this.apiHandler();
                  this.NameInput.clear();
                  this.setState({Name: ''});
                  this.AgeInput.clear();
                  this.setState({Age: ''});
                  this.PhoneNumberInput.clear();
                  this.setState({PhoneNumber: ''});
                  this.BloodPressureInput.clear();
                  this.setState({BloodPressure: ''});
                  this.HeartRateInput.clear();
                  this.setState({HeartBeatRate: ''});
                  this.RespiratoryRateInput.clear();
                  this.setState({RespiratoryRate: ''});
                  this.BloodOxygenInput.clear();
                  this.setState({BloodOxygenLevel: ''});
                }
              }
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Submit Data</Text>
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
    padding: 10,
    backgroundColor: '#FFF1B3',
    fontSize: 24,
  },
  titles: {
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  datePickerStyle: {
    width: 205,
    marginTop: 3,
  },
});
export default AddPatient;
