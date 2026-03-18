import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Image, Text, Button, View, TouchableOpacity } from 'react-native';
import BancoDados from './components/BancoDados';
import { CurrentRenderContext } from '@react-navigation/native';

export default function App() {
const [nome,setNome]=useState("")
const [curso,setCurso]=useState("")
const [disciplina,setDisciplina]=useState("")
const [descricao,setDescricao]=useState("")
const [dados,setDados]=useState(false)


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao super genios!</Text>
      <View style={styles.card}>
        
        <Text style={styles.texto}>Insira seus dados</Text>
        <TextInput
        
            placeholder='Digite seu nome'
            style={styles.input}
            maxLength={50}
            autoCapitalize='words'
            onChangeText={setNome}
        />
          {/* curso */}
        <TextInput 
            placeholder='Digite seu curso'
            style={styles.input}
            maxLength={50}
            autoCapitalize='words'
            onChangeText={setCurso}
        />
          {/* disciplina */}
        <TextInput 
            placeholder='Digite seu disciplona'
            style={styles.input}
            maxLength={50}
            autoCapitalize='words'
            onChangeText={setDisciplina}
        />
          {/* descricao */}
        <TextInput 
            placeholder='Digite seu Descricao'
            style={styles.input}
            maxLength={100}
            autoCapitalize='words'
            onChangeText={setDescricao}
        />
      </View> 
      
    <View style={styles.Button}>
      <Button style={styles.Button}
      title='Enviar'
      onPress={()=>setDados(!dados)}
      color="#fff"
      />
    </View>


{ dados&&<BancoDados 
nome={nome} curso={curso} disciplina={disciplina} descricao={descricao}/>}
    </View>
    
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
    backgroundColor:'#f0e3e5',
    borderRadius:10,
    margin:10,
    fontSize: 19,

  },
  Button: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 12,
    borderRadius: 10,
    overflow: 'hidden',
    
  },
  
  texto:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  result:{
    backgroundColor: '#fff'
  }

});
