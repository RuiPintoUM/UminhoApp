import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import uminho_locations from '../../assets/uminho_locations.json';

export default function BuildingDetails() {
  const params = useLocalSearchParams();
  const buildingId = Array.isArray(params.id) ? params.id[0] : params.id;

  const building = uminho_locations.find((b) => String(b.id) === String(buildingId));

  if (!building) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Edifício não encontrado 😢</Text>
      </View>
    );
  }

  const openPlanta = () => {
    if (building.planta) {
      Linking.openURL(building.planta);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{building.name}</Text>
        <Text style={styles.description}>{building.description}</Text>
        {building.planta && (
          <Pressable style={styles.button} onPress={openPlanta}>
            <Text style={styles.buttonText}>Ver planta</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notFound: {
    fontSize: 20,
    color: 'red',
  },
});
