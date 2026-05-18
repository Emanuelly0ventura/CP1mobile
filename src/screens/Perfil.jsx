import { useContext } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { UserContext } from "../context/UserContext";

export default function Perfil({ navigation }) {
  const { usuario } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.resultadoTitulo}>Olá {usuario?.nome} !</Text>

        <View style={styles.linha}>
          <Text style={styles.campo}>Nome:</Text>
          <Text style={styles.valor}>{usuario?.nome}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>Curso:</Text>
          <Text style={styles.valor}>{usuario?.curso}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>CEP:</Text>
          <Text style={styles.valor}>{usuario?.CEP}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>Rua:</Text>
          <Text style={styles.valor}>{usuario?.endereco?.logradouro}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>Bairro:</Text>
          <Text style={styles.valor}>{usuario?.endereco?.bairro}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>Cidade:</Text>
          <Text style={styles.valor}>{usuario?.endereco?.localidade}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.campo}>Estado:</Text>
          <Text style={styles.valor}>{usuario?.endereco?.uf}</Text>
        </View>
      </View>

      <View style={styles.botao}>
        <Button
          title="Ir para Devs"
          onPress={() => navigation.navigate("devs")}
          color="#1e9bf0"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003754",
    alignItems: "center",
    paddingTop: 70,
  },

  titulo: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#6b8a9c",
    width: "85%",
    borderRadius: 10,
    padding: 22,
    marginTop: 10,
  },

  resultadoTitulo: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
    fontSize: 22,
  },

  linha: {
    flexDirection: "row",
    paddingVertical: 10,
    flexWrap: "wrap",
  },

  campo: {
    color: "#fff",
    fontSize: 17,
    marginRight: 6,
    fontWeight: "600",
  },

  valor: {
    color: "#fff",
    fontSize: 17,
    flex: 1,
  },

  divisor: {
    height: 1,
    backgroundColor: "#ffffff55",
  },

  botao: {
    marginTop: 25,
    borderRadius: 6,
    overflow: "hidden",
  },
});
