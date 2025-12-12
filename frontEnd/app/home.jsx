import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGetArtists } from "../services/artists/queries";

const { width, height } = Dimensions.get("window");


export default function ArtistScreen() {


    const { data, isLoading, error } = useGetArtists()

    if (isLoading)
      return (
  
        <View >
          <Text>Loading...</Text>
        </View>)
    if (error)
      return (
        <View >
          <Text>Error loding event </Text>
        </View>)




  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" />
        <Text style={styles.headerTitle}>Artist Gnawa</Text>
        <View style={{ width: 30 }} /> 
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#bbb" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Rechercher un Artist....."
          placeholderTextColor="#ccc"
          style={styles.searchInput}
        />
      </View>

      {/* ARTIST LIST */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image_url} style={styles.avatar} />
            <View>
              <Text style={styles.artistName}>{item.name}</Text>
              <Text style={styles.artistDesc}>{item.speciality}</Text>
            </View>
          
        </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "#2a2a2a",
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  searchInput: {
    color: "white",
    marginLeft: 10,
    flex: 1,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#555",
    width: width * 0.9,
    alignSelf: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },

  artistName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  artistDesc: {
    color: "#ddd",
    fontSize: 13,
  },
});
