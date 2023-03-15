import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PitchForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button
        title="Guardar"
        onPress={() => onSubmit(title, description)}
      />
    </View>
  );
};

PitchForm.defaultProps = {
  initialValues: {
    title: '',
    description: '',
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default PitchForm;
