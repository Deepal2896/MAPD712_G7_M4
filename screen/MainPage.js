import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class MainPage extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>
              Patient Data Mobile App
            </Text>
          </View>

          <View style={{flex: 8, backgroundColor: '#FFF1B3'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('AddPatient');
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Add Patient
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('ViewPatient');
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                List All Patients
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('PatientName');
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Patient Search
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('DeletePatient');
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Delete Patient
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('CriticalPatient');
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Critical Patients
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
//Styling for all components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF1B3',
  },
  button: {
    marginTop: 12,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#6E9CFF',
  },
});
export default MainPage;
