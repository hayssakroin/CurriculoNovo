import { Button, Pressable, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { TextInput } from "react-native";

const foto = require("../../assets/images/perfil.png");

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.containerImg}>
        <Pressable onPress={pickImage}>
          <Image source={image == null ? foto : image} style={styles.estiloFoto} />
        </Pressable>
        <Button title="Trocar imagem" onPress={pickImage} color={"#FFB6C1"} />
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.containerNome}>
          <TextInput
            style={styles.nome}
            placeholder="Hayssa Kroin"
            placeholderTextColor="white"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <TextInput
          style={styles.linha}
          editable={false}
          placeholder="_______________________________________"
          placeholderTextColor="white"
        />

        <View style={styles.containerDados}>
          <Ionicons name="star" size={24} color="white" />
          <TextInput
            style={styles.textoDados}
            placeholder="17 anos"
            placeholderTextColor="white"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="sunny" size={24} color="white" />
          <TextInput
            style={styles.textoDados}
            placeholder="hayssa@gmail.com"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="moon" size={24} color="white" />
          <TextInput
            style={styles.textoDados}
            placeholder="(42) 93859-5632"
            placeholderTextColor="white"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <TextInput
            style={styles.textoDados}
            placeholder="Orlando / Flórida"
            placeholderTextColor="white"
            value={cidade}
            onChangeText={setCidade}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
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
    flex: 1,
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
    marginBottom: 20,
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
    flex: 1,
  },
});