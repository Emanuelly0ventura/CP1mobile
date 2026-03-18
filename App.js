import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Image, Text, Button, View } from 'react-native';
import BancoDados from './components/BancoDados';

export default function App() {
const [nome,setNome]=useState("")
const [curso,setCurso]=useState("")
const [disciplina,setDisciplina]=useState("")
const [descricao,setDescricao]=useState("")
const [dados,setDados]=useState(false)


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Bem-vindo ao super genios!</Text>
        <Text style={styles.titulo}>Insira seus dados</Text>
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
    <Button style={styles.Button}
    title='Enviar'
    onPress={()=>setDados(!dados)}
    />

{dados&&<BancoDados nome={nome} curso={curso} disciplina={disciplina} descricao={descricao}/>}
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
    gap:20,
    fontSize:20,
    color:'#fff',
    alignC: 'center',
    
  },
  card:{
    backgroundColor: '#6b8a9c',
    padding: 50,
    borderRadius: 10,
    marginTop: 190,

  },
  input:{
    backgroundColor:'#f0e3e5',
    borderRadius:10,
    margin:10,
    fontSize: 19,

  },
  Button: {
    padding: 20,
    
  }
});
