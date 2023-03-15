import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function PitchView({ pitch }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Problem</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Solution</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Market Validation</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Market Size</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Product</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Business Model</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>
      
      <Text style={styles.title}>Market Adoption</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Competition</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>

      <Text style={styles.title}>Competitive Advantages</Text>
      <Text style={styles.subTitle}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",    
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "bold",
    color: "#0F4C5C",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0F4C5C",
    width: "100%",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#1E2A47",
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
});
