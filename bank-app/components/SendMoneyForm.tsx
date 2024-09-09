import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";

const SendMoneyForm: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!firstname || !lastname || !amount || !email) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Handle form submission logic here
    Alert.alert("Success", `Money sent to ${firstname} ${lastname}`);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={firstname}
          onChangeText={setFirstname}
          placeholder="First Name"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={lastname}
          onChangeText={setLastname}
          placeholder="Last Name"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="Amount"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <Button title="Send Money" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    width: "20%",
  },
  title: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10, // Space between input fields
  },
});

export default SendMoneyForm;
