import React from 'react';
import { View, Text, Button, StyleSheet, Alert, useColorScheme } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../constants/firebaseConfig';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const handleGoBackToMap = () => {
    router.replace('/(tabs)/'); 
  };

  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Perfil</Text>
      <Text style={[styles.text, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Email:</Text>
      <Text style={[styles.email, { color: colorScheme === 'dark' ? '#ccc' : '#333' }]}>{auth.currentUser?.email}</Text>

      <View style={styles.buttonsContainer}>
        <Button title="Voltar" onPress={handleGoBackToMap} />
        <View style={{ height: 10 }} />
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginTop: 10 },
  email: { fontSize: 16, marginTop: 5 },
  buttonsContainer: { marginTop: 30, width: '80%' },
});
