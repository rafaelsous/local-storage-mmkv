import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { MMKV, useMMKVObject } from 'react-native-mmkv';

import { styles } from './styles';

const storage = new MMKV({ id: 'localstoragemmkv' })

type User = {
  name: string;
  email: string;
}

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useMMKVObject<User>('user');

  function handleSave() {
    setUser({ name, email });
  }

  function fetchUser() {
    const data = storage.getString('user');
    setUser(data ? JSON.parse(data) : {});
  }

  useEffect(() => {
    const listener = storage.addOnValueChangedListener((changeKey) => {
      const newValue = storage.getString(changeKey);

      console.log('Novo valor', newValue);
    });

    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome..."
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail..."
        onChangeText={setEmail}
        value={email}
      />

      <Button
        title="Salvar"
        onPress={handleSave}  
      />

      <Text style={styles.text}>
        {user?.name} - {user?.email}
      </Text>
    </View>
  );
}