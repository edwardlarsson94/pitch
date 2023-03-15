import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PitchForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [problem, setProblem] = useState(initialValues.problem);
  const [solution, setSolution] = useState(initialValues.solution);

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
      <TextInput
        style={styles.input}
        placeholder="Problema"
        value={problem}
        onChangeText={setProblem}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Solution"
        value={solution}
        onChangeText={setSolution}
        multiline
      />
      <Button
        title="Guardar"
        onPress={() => onSubmit(title, description, problem, solution)}
      />
    </View>
  );
};

PitchForm.defaultProps = {
  initialValues: {
    title: '',
    description: '',
    problem: '',
    solution: '',
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
