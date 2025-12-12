import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReservationsScreen() {
 

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mes Réservations</Text>
        <View style={{ width: 26 }} />
      </View>

      {reservations.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: item.color }]}>
          
          {/* TOP INFO */}
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.quantity}>Quantité</Text>
              <Text style={styles.quantityValue}>{item.quantity}</Text>
            </View>

            <View>
              <Text style={styles.dateLabel}>Date</Text>
              <Text style={styles.dateValue}>{item.date}</Text>
            </View>
          </View>

          {/* RESERVATION CODE */}
          <Text style={styles.reservationCode}>{item.code}</Text>

          {/* QR + SHARE */}
          <View style={styles.qrRow}>
            <View style={styles.qrContainer}>
              <Image source={{ uri: item.qr }} style={styles.qr} />
            </View>

            <TouchableOpacity style={styles.shareBtn}>
              <Ionicons name="share-social" size={22} color="white" />
              <Text style={styles.shareTxt}>Partager</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  header: {
    paddingTop: 45,
    paddingHorizontal: 18,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  card: {
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },

  type: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  quantity: {
    color: "#b3b3b3",
    marginTop: 8,
  },

  quantityValue: {
    color: "white",
    fontSize: 16,
  },

  dateLabel: {
    color: "#b3b3b3",
  },

  dateValue: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },

  reservationCode: {
    color: "#b3b3b3",
    marginTop: 15,
    marginBottom: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  qrRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  qrContainer: {
    backgroundColor: "#12322E",
    padding: 10,
    borderRadius: 10,
  },

  qr: {
    width: 85,
    height: 85,
  },

  shareBtn: {
    backgroundColor: "#E54607",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  shareTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

