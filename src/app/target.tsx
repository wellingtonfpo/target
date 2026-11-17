import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Target() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Objetivos</Text>

      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  );
}
