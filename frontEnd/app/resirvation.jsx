import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import usecreatbooking from "../services/booking/queries.js"

export default function ReservationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(null);

  const createBooking = usecreatbooking();

  const handleReservation = () => {
    if (!name || !email || !type) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    createBooking.mutate(
      { name, email, type },
      {
        onSuccess: (data) => {
          Alert.alert(
            "Succès ",
            `Réservation créée avec succès\n\nCode: ${data.booking.code}`
          );
          setName("");
          setEmail("");
          setType(null);
          setSelectedArtist(null);
        },
        onError: (err) => {
          Alert.alert("Erreur", err.message || "Erreur serveur");
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer une Réservation</Text>

      {/* NAME */}
      <TextInput
        placeholder="Nom complet"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* EMAIL */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* TYPE */}
      <Text style={styles.label}>Type de billet :</Text>

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeBtn, type === "VIP" && styles.selected]}
          onPress={() => setType("VIP")}
        >
          <Text style={styles.typeText}>VIP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeBtn, type === "STANDARD" && styles.selected]}
          onPress={() => setType("STANDARD")}
        >
          <Text style={styles.typeText}>Standard</Text>
        </TouchableOpacity>
      </View>

      {/* SUBMIT */}
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleReservation}
        disabled={createBooking.isPending}
      >
        <Text style={styles.submitText}>
          {createBooking.isPending ? "Envoi..." : "Confirmer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 26,
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1A1A1A",
    padding: 14,
    borderRadius: 10,
    color: "white",
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    color: "#ccc",
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "space-between",
  },
  typeBtn: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  selected: {
    backgroundColor: "#E54607",
  },
  typeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  submitBtn: {
    backgroundColor: "#E54607",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
