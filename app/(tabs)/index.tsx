import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image"
import { Ionicons } from "@expo/vector-icons"

// npm install expo-image (usar este código no terminal)

const foto = require("../../assets/images/perfil.png")

export default function Index() {
  return (
    <View style={styles.container} >
      <View style = {styles.containerImg}>
        <Image source = {foto} style={styles.estiloFoto}></Image>
      </View>
      <View style = {styles.containerConteudo}>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Márcio Nunes Sauro</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="star" size={24} color="white" />
          <Text style = {styles.textoDados}>2 anos</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="sunny" size={24} color="white" />
          <Text style = {styles.textoDados}>marcinhodograu@gmail.com</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="moon" size={24} color="white" />
          <Text style = {styles.textoDados}>(42) 93859-5632</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <Text style = {styles.textoDados}>Orlando / Flórida</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 280,
    height: 280,
    borderRadius: 500,
  },
  containerConteudo: {
    flex:1 
  },
  containerNome:{
    alignItems:"center",
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  linha:{
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  }
})