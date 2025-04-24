import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import uminho_locations from '../../assets/uminho_locations.json';
import tricornio from '../../assets/images/tricornio_emoji .png';



export default function TabOneScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [enteredBuildings, setEnteredBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(null); // Novo estado para o edifício selecionado

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada!');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 5000,
        distanceInterval: 10,
      });
      setLocation(currentLocation);

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
    const newEnteredBuildings = [...enteredBuildings];

    for (const building of uminho_locations) { // Usar o array do JSON
      const distance = calculateDistance(
        latitude, longitude,
        building.latitude, building.longitude
      );

      const isCurrentlyInside = distance < building.radius;
      const wasPreviouslyInside = enteredBuildings.includes(building.id);

      if (isCurrentlyInside && !wasPreviouslyInside) {
        // Entrou na geofence
        showAlert(`Entrou em ${building.name}`, building.description); // Mostrar descrição
        newEnteredBuildings.push(building.id);
      } else if (!isCurrentlyInside && wasPreviouslyInside) {
        // Saiu da geofence (opcional)
        // showAlert(`Saiu de ${building.name}`);
        newEnteredBuildings.splice(newEnteredBuildings.indexOf(building.id), 1);
      }
    }

    setEnteredBuildings(newEnteredBuildings);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c * 1000;
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const showAlert = (title, message) => { // Alterar showAlert para aceitar título e mensagem
    Alert.alert(title, message);
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
        onPress={(event) => {
          // Quando clica no mapa, deseleciona o edifício
          setSelectedBuilding(null);
        }}
      >
        {uminho_locations.map((building) => (
          <React.Fragment key={building.id}>
            <Marker
              coordinate={building}
              title={building.name}
              description={building.description}
              onPress={() => setSelectedBuilding(building)} // Selecionar edifício ao clicar no marcador
            />
            <Circle
              center={building}
              radius={building.radius}
              fillColor="rgba(200, 200, 200, 0.3)"
              strokeColor="rgba(0, 0, 0, 0.3)"
            />
          </React.Fragment>
        ))}
        {location && (
          <Marker
            coordinate={location.coords}
            anchor={{ x: 0.5, y: 0.5 }} // centra o ícone
            image={tricornio}
          />
        )}
      </MapView>

      {selectedBuilding && (
        <View style={styles.infoBox}>
          <Text style={styles.infoName}>{selectedBuilding.name}</Text>
          <Text style={styles.infoDescription}>{selectedBuilding.description}</Text>
        </View>
      )}

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
  infoBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Sombra (Android)
    shadowColor: '#000', // Sombra (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoDescription: {
    fontSize: 14,
  },
});
