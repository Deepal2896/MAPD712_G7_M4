import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class ViewPatient extends React.Component {
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
                      <Text style={styles.titles}> PhoneNumber: </Text>
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
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View style={{height: '87%', flexDirection: 'row'}}>
          <ScrollView>{this.list()}</ScrollView>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.apiHandler();
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              View All Patients
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
  baseStyling: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default ViewPatient;
