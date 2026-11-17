import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>

      <Button title='Novo Meta' onPress={() => router.navigate('/target')} />
      <Button
        title='Transações'
        onPress={() => router.navigate('/transaction/123')}
      />
      <Button
        title='Em progresso'
        onPress={() => router.navigate('/in-progress/12')}
      />
    </View>
  );
}
