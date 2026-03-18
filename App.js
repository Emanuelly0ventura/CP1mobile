import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Image, Button, View } from 'react-native';
import BancoDados from './components/BancoDados';

export default function App() {
const [nome,setNome]=useState("")
const [curso,setCurso]=useState("")
const [disciplina,setDisciplina]=useState("")
const [descricao,setDescricao]=useState("")
const [dados,setDados]=useState(false)


  return (
    <View>
    
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
    <Button
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
    backgroundColor: '#fff',
    alignItems: 'center',
    

  },
  input:{
    backgroundColor:'#fff'
  }
});
