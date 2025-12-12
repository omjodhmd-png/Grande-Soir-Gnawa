import { useQuery } from "@tanstack/react-query";
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetEvents } from "../services/events/queries";
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");





export default function Eventinfo() {
  const [fontsLoaded] = useFonts({
    "CarterOne": require("../assets/images/fonts/CarterOne-Regular.ttf")

  });

  const { data, isLoading, error } = useGetEvents()

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: data?.coverImage }}
          style={styles.image}>


          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.gradient}
          />
          <Text style={styles.title}>{data?.title}</Text>
        </ImageBackground>

        <View style={styles.datalocation}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="calendar-outline" size={30} color="white" />
            <Text style={styles.date} >{data?.date}</Text>
          </View>
          <View style={styles.locationpa}>
            <Ionicons name="location-outline" size={30} color="white" />
            <Text style={styles.location}>{data?.location}</Text>
          </View>

        </View>
        <View style={{ height: height * 0.19 }}>
          <Text style={styles.description}>{data?.description}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.toutch}>
            <Text style={styles.textbutton}>Voir les artistes</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  )
}
export const styles = StyleSheet.create({
  image: { width: width, height: height * 0.67 },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  title: {
    fontSize: 40, color: "white", paddingTop: height * 0.5,
    fontFamily: "CarterOne", marginLeft: 10
  },
  datalocation: {
    flexDirection: "row", width: width,
    justifyContent: "space-between", paddingLeft: 5, paddingRight: 5
  },
  date: { color: "white", fontFamily: "CarterOne", fontSize: 20 },
  locationpa: { flexDirection: "row" },
  location: { color: "white", fontFamily: "CarterOne", fontSize: 20 },
  description: { color: "white", margin: 10 },
  button: { width: width, height: height * 0.1, alignItems: "center" },
  toutch: {
    width: 150, backgroundColor: "#E54607", height: 40, borderRadius: 20,
    justifyContent: "center", alignItems: "center"
  },
  textbutton: { color: "white", fontWeight: "bold" }
})