import { StyleSheet, TextInput, Text, Button, View, SafeAreaView, ScrollView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


export default function Home({ navigation }) {
const { setUsuario } = useContext(UserContext);
const [nome,setNome]=useState("")
const [curso,setCurso]=useState("")
const [disciplina,setDisciplina]=useState("")
const [descricao,setDescricao]=useState("")
const [dados,setDados]=useState(false)  


  return (
    
      <SafeAreaView style={styles.container}>
        
        <ScrollView>
          <Text style={styles.titulo}>Bem-vindo ao super genios!</Text>
          <View style={styles.card}>

            <Text style={styles.texto}>Insira seus dados</Text>
            <TextInput
                placeholder='Digite seu nome'
                style={styles.input}
                maxLength={50}
                autoCapitalize='words'
                onChangeText={setNome}
                value={nome}
            />

              {/* curso */}
            <TextInput 
                placeholder='Digite seu curso'
                style={styles.input}
                maxLength={50}
                autoCapitalize='words'
                onChangeText={setCurso}
                value={curso}
            />

              {/* disciplina */}
            <TextInput 
                placeholder='Digite sua disciplina'
                style={styles.input}
                maxLength={50}
                autoCapitalize='words'
                onChangeText={setDisciplina}
                value={disciplina}
            />

              {/* descricao */}
            <TextInput 
                placeholder='Digite sua Descricao'
                style={styles.input}
                maxLength={100}
                autoCapitalize='words'
                onChangeText={setDescricao}
                value={descricao}
            />
          </View> 

          <View style={styles.Button}>
            <Button
              title="Enviar"
              onPress={() => {
                setUsuario({
                  nome,
                  curso,
                  disciplina,
                  descricao,
                });
              
                navigation.navigate("perfil");
              }}
            />            
          </View>

        </ScrollView>  
      </SafeAreaView>
    

  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003754',
    alignItems: 'center',
    gap: 30,

  },

  titulo:{
    fontSize:25,
    color:'#fff',
    textAlign: 'center',
    paddingTop: 70,

  },

  card:{
    backgroundColor: '#6b8a9c',
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft:60,
    paddingRight:60,
    borderRadius: 10,
    marginTop: 10,

  },

  input:{
    backgroundColor:'#fff',
    borderRadius:10,
    margin:10,
    fontSize: 19,

  },

  Button: {
    
    //width: 100,
    //height: 50,
    overflow: 'hidden',
    margin: 12,
    borderRadius: 80,
    alignItems: 'center',
    
    
  },
 
  texto:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  result:{
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  resultado:{
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginTop: 0,
      width: '90%',
      alignSelf: 'center',
      
  },

  resultadoTitulo:{
    color: '#000',
    fontWeigh: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontSize:20
  },

  linha:{
    flexDirection: 'row',
    paddingVertical: 8,
    flexWrap: 'wrap',

  },

  campo:{
    color: '#000',
    fontSize: 14,
    marginRight: 6,
    fontWeight: '600',
  },

  valor: {
    color: '#000',
    fontSize: 17,
    flex: 2,
  },

  divisor: {
    height: 1,
    backgroundColor: '#0000',
 }


});