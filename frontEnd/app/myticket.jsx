import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTicketStore } from "../store/useTicketStore";
import { Route } from "expo-router/build/Route";
import { router } from "expo-router";

export default function MyTicketsScreen() {
  const tickets = useTicketStore((state) => state.tickets);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mes Réservations</Text>
      </View>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.number}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <View style={styles.ticketType}>
                <Ionicons name="ticket" size={18} color="#E54607" />
                <Text style={styles.ticketTitle}>
                  {item.type === "VIP" ? "Billet VIP" : "Pass Standard"}
                </Text>
              </View>

             

              <View style={styles.row}>

                <Text style={styles.value}>{item.date}</Text>
              </View>

              <Text style={styles.codeLabel}>N° de réservation</Text>
              <Text style={styles.code}>#{item.number}</Text>
            </View>

            <View style={styles.cardRight}>
              {item.qr && (
                <Image
                  source={{ uri: item.qr }}
                  style={styles.qr}
                />
              )}

              <TouchableOpacity style={styles.shareBtn}>
                <Ionicons name="share-social" size={18} color="#E54607" />
                <Text style={styles.shareText}>Partager</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 12,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
  },

  cardLeft: {
    flex: 3,
    padding: 16,
  },

  ticketType: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  ticketTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },

 

  label: {
    color: "#888",
    fontSize: 12,
  },

  value: {
    color: "#fff",
    fontSize: 14,
  },
  

  codeLabel: {
    marginTop: 10,
    color: "#888",
    fontSize: 12,
  },

  code: {
    color: "#fff",
    fontWeight: "bold",
  },

  cardRight: {
    flex: 2,
    backgroundColor: "#2A1A12",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },

  qr: {
    width: 90,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 4,
  },

  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  shareText: {
    color: "#E54607",
    marginLeft: 6,
    fontWeight: "600",
  },
});
