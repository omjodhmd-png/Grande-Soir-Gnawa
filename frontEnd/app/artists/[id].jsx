import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useGetArtist } from "../../services/artists/queries";
import { LinearGradient } from "expo-linear-gradient";

export default function ArtistDetails() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useGetArtist(id);
  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Error loading artist</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Details de L'artiste</Text>
        <View style={{ width: 30 }} />
      </View>

      <ImageBackground source={{ uri: data.image_url }} style={styles.artistImage} >
      <LinearGradient
            colors={['transparent', 'black']}
            style={styles.gradient}
          />
      </ImageBackground>
     
        {/* NAME */}
        <View style={{ padding: 15 }}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.speciality}>{data.speciality}</Text>
        </View>
        
        {/* BIO */}
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.bioTitle}>Biographie</Text>
          <Text style={styles.bio}>{data.bio}</Text>
        </View>

     
      {/* DAY */}
      <View style={styles.footer}>
        <View style={styles.dayBox}>
          <Ionicons name="calendar" size={22} color="white" />
          <Text style={styles.dayText}>Jour de passage : {data.performance_time} PM</Text>
        </View>

        <TouchableOpacity style={styles.reserveBtn} onPress={()=>router.push("../resirvation")}>
          <Text style={styles.reserveTxt}>Reserve</Text>

        </TouchableOpacity>
      </View>

    </ScrollView >
  );
}
  




const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  container: { flex: 1, backgroundColor: "black" },

  header: {
    paddingTop: 40,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: { color: "white", fontSize: 20, fontWeight: "bold" },

  artistImage: { width: "100%", height: 400 },

  name: { color: "white", fontSize: 26, fontWeight: "bold" },

  speciality: { color: "#ff9900", fontSize: 16, marginTop: 4 },

  bioTitle: { color: "white", fontSize: 18, marginTop: 10 },
  bio: { color: "#ccc", marginTop: 5, lineHeight: 20 },

  footer: { padding: 20, },
  dayBox: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  dayText: { color: "white", marginLeft: 10, fontSize: 16 },

  reserveBtn: {
    backgroundColor: "#E54607",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  reserveTxt: { color: "white", fontWeight: "bold", fontSize: 16 },
});
