import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap(){
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.9494405,
          longitude: -43.1870619,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            coordinate={{
              latitude: -22.9494405,
              longitude: -43.1870619,
          }}>
            <Callout tooltip={true} onPress={() => alert('Oi')}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Lar das Meninas</Text>
              </View>
            </Callout>
          </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>0 Orfanatos Encontrados.</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => alert('Criar Orfanato.')}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 160,
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});