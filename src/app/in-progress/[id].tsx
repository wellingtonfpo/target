import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>In Progress ID: {params.id}</Text>
      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  );
}
