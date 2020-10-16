import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetais from './pages/OrphanageDetails';

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetais} />
      </Navigator>
    </NavigationContainer>
  )
}