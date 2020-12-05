import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screen/MainPage';
import AddPatient from './screen/AddPatient';
import ViewPatients from './screen/ViewPatients';
import DeletePatient from './screen/DeletePatient';
import CriticalPatient from './screen/CriticalPatient';
import PatientName from './screen/PatientName';

const Stack = createStackNavigator();

class PatientData extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="AddPatient" component={AddPatient} />
          <Stack.Screen name="ViewPatients" component={ViewPatients} />
          <Stack.Screen name="PatientName" component={PatientName} />
          <Stack.Screen name="DeletePatient" component={DeletePatient} />
          <Stack.Screen name="CriticalPatient" component={CriticalPatient} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default PatientData;
