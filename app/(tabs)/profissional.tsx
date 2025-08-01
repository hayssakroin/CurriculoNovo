import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)


export default function Profissional() {
  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        <Text style={styles.nome}>Hayssa Kroin</Text>
      </View>
      <Text style={styles.linha}>
        _______________________________________
      </Text>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}> Formação</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="school" size={24} color="white" />
        <Text style={styles.textoDados}>tecnica</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="paw" size={24} color="white" />
        <Text style={styles.textoDados}>dormi</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="snow" size={24} color="white" />
        <Text style={styles.textoDados}>comer</Text>
      </View>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}> Experiência</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="heart" size={24} color="white" />
        <Text style={styles.textoDados}>dormi</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="sunny" size={24} color="white" />
        <Text numberOfLines={50}style={styles.textoDados}>dormi</Text>
      </View>
      <View style={styles.containerDados}>
        <Ionicons name="heart" size={24} color="white" />
        <Text style={styles.textoDados}>chata</Text>
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
  containerNome: {
    alignItems: "center",
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  linha: {
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerTitulo: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  containerDados: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 5,
    color: "white",
    fontSize: 20,
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
    textAlign: "center",
  }
})
