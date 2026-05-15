import { StyleSheet, TextInput, Text, Button, View, SafeAreaView, ScrollView, Image  } from 'react-native';
  
export default function Devs({ navigation }) {

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Devs do Projeto</Text>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dev1.png")}
            style={styles.foto}
          />
          <Text style={styles.nome}>Julia Sayuri Kina</Text>
          <Text style={styles.info}>RM: 564555</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dev2.jpeg")}
            style={styles.foto}
          />
          <Text style={styles.nome}>Emauelly Ventura do Nascimento </Text>
          <Text style={styles.info}>RM: 562339</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dev3.jpg")}
            style={styles.foto}
          />
          <Text style={styles.nome}>Carolina Gonçalves Nascimento </Text>
          <Text style={styles.info}>RM: 564786</Text>
        </View>
        <View style={styles.botao}>
          <Button 
              title="Voltar para Perfil"
              onPress={() => navigation.navigate("perfil")}
          />
        </View>
      </ScrollView>
      
    
  );
};
  const styles = StyleSheet.create({
    _:{
      backgroundColor:"#003754",
      color:"#fff"
    },
    container: {
      padding: 20,
      backgroundColor: '#003754'
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff'
    },
    card: {
      backgroundColor: '#6b8a9c',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    foto: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    nome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    info: {
      fontSize: 16,
      color: '#fff',
    },
    botao: {
      marginTop: 25,
      borderRadius: 8,
      overflow: "hidden",
      margin: 108,
      alignItems: 'center',
    }

  });

