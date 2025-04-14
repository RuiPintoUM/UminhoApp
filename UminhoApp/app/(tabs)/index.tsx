import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';

export default function TabOneScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [enteredBuildings, setEnteredBuildings] = useState([]); // Array para rastrear os edifícios em que o utilizador entrou

  const uminhoLocations = {
    cp2: { latitude: 41.55991529847114, longitude: -8.397766065898065, info: 'Campus de Azurém (CP2)', radius: 50 }, 
    cp1: { latitude: 41.560377238886176, longitude:  -8.39570615423141, info: 'Campus de Gualtar (CP1)', radius: 55 },
    biblioteca: { latitude: 41.56000511683078, longitude: -8.396887998956991, info: 'Biblioteca', radius: 30 }, 
    ginasio: { latitude: 41.56199161501332, longitude: -8.39488629675669, info: 'Ginásio', radius: 50},
    cantina: { latitude: 41.56200327085424, longitude: -8.398358261303356, info: 'Cantina', radius: 50 },
    casa_Rui: { latitude: 41.431429490604, longitude: -8.484463773265833, info: 'Casa Rui e Raquel', radius: 50}
    };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada!');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High, // Maior precisão
        timeInterval: 5000,                // Atualiza a cada 5 segundos (opcional)
        distanceInterval: 10,              // Atualiza a cada 10 metros (opcional)
      });
      setLocation(currentLocation);

      // Iniciar o rastreamento contínuo da localização
      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation);
        }
      );
    })();
  }, []);

  useEffect(() => {
    if (location) {
      checkGeofences();
    }
  }, [location]);

  const checkGeofences = () => {
    const { latitude, longitude } = location.coords;
    const newEnteredBuildings = [...enteredBuildings]; // Cópia para modificar

    for (const building in uminhoLocations) {
      const buildingLocation = uminhoLocations[building];
      const distance = calculateDistance(
        latitude, longitude,
        buildingLocation.latitude, buildingLocation.longitude
      );

      const isCurrentlyInside = distance < buildingLocation.radius;
      const wasPreviouslyInside = enteredBuildings.includes(building);

      if (isCurrentlyInside && !wasPreviouslyInside) {
        // Entrou na geofence
        showAlert(`Entrou em ${buildingLocation.info}`);
        newEnteredBuildings.push(building);
      } else if (!isCurrentlyInside && wasPreviouslyInside) {
        // Saiu da geofence (opcional:  podes adicionar lógica para quando o utilizador sai)
        showAlert(`Saiu de ${buildingLocation.info}`);
        newEnteredBuildings.splice(newEnteredBuildings.indexOf(building), 1);
      }
    }

    setEnteredBuildings(newEnteredBuildings);
  };


  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c * 1000; // Distância em metros
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const showAlert = (message) => {
    Alert.alert('Ponto de Interesse', message);
  };

  let mapRegion = {
    latitude: 41.5579,
    longitude: -8.4025,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  if (location) {
    mapRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={mapRegion}
        showsUserLocation={true}
      >
        {Object.keys(uminhoLocations).map((key) => (
          <React.Fragment key={key}>
            <Marker
              coordinate={uminhoLocations[key]}
              title={key}
              description={uminhoLocations[key].info}
            />
            <Circle
              center={uminhoLocations[key]}
              radius={uminhoLocations[key].radius}
              fillColor="rgba(200, 200, 200, 0.3)"
              strokeColor="rgba(0, 0, 0, 0.3)"
            />
          </React.Fragment>
        ))}
        {location && (
          <Circle
            center={location.coords}
            radius={5} // Pequeno círculo para a localização atual
            fillColor="blue"
            strokeColor="blue"
          />
        )}
      </MapView>
      <Text style={styles.locationText}>
        {errorMsg ? errorMsg : location ? `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}` : "A obter localização..."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  locationText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
});