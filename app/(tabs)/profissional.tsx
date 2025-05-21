import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)


export default function Profissional() {
  return (
    <View style={styles.container} >
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
          <Text style = {styles.textoDados}></Text>
          <View style={styles.containerTextoCentral}>
  <Text style={styles.textoCentral}>Oi, meu nome é Márcio. Sou bem treinado, falo Português e InglÊs fluentemente desde meus 3 meses. Adoro ar e livre e cantar, mas não gosto de lugares cheios de pessoas.</Text>
</View>
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
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1
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
  },
  containerTextoCentral: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  textoCentral: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  }
})
