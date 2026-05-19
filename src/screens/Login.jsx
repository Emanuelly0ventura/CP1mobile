import { StyleSheet, TextInput, Text, Button, View, ScrollView, Image, Linking, Alert,   } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState, useEffect, useRef  } from "react";
import { UserContext } from "../context/UserContext";

import * as Sharing from 'expo-sharing'
import { CameraView,useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library"

export default function Home({ navigation }) {
const { setUsuario } = useContext(UserContext);
const [nome,setNome]=useState("")
const [curso,setCurso]=useState("")
const [CEP,setCep]=useState("")
const [endereco, setEndereco] = useState(null);
const [erroCep, setErroCep] = useState("");
const [dados,setDados]=useState(false)  


const[permissaoCam,requestPermissaoCam]=useCameraPermissions()
const [permissaoMedia, requestPermissaoMedia] =
  MediaLibrary.usePermissions({
    granularPermissions: ['photo']
  });
const cameraRef = useRef(null)
const[foto,setFoto]=useState(null)
const[isFrontCamera,setIsFrontCamera]=useState(false)
const[flashLigado,setFlashLigado]=useState(false)
const[scaneado,setScaneado]=useState(false)
const toggleCameraType = () =>{
  setIsFrontCamera((prev)=>!prev)//Alterna entre true e false
}
//Função para alternar o flash
const alternarFlash = ()=>{
  setFlashLigado((prev)=>!prev)
}
const compartilharFoto = async ()=>{
  if(foto?.uri && await Sharing.isAvailableAsync()){
    await Sharing.shareAsync(foto.uri)
  }else{
    Alert.alert("Erro","Compartilhamento não disponível")
  }
}
const tirarFoto = async()=>{
  if(cameraRef.current){
    const dadoFoto = await cameraRef.current.takePictureAsync();
    setFoto(dadoFoto)
  }
}

const salvarFoto = async ()=>{
  if(foto?.uri){
    try{
      await MediaLibrary.createAssetAsync(foto.uri)
      Alert.alert("Sucesso","Foto salva na galeria")
      setFoto(null)
    }catch(error){
      Alert.alert("Error","Não foi possível salvar a foto.")
    }
  }
}
useEffect(() => {
  async function pedirPermissao() {
    if (!permissaoMedia?.granted) {
      await requestPermissaoMedia();
    }
  }

  pedirPermissao();
}, []);

useEffect(() => {
  buscarCep(CEP);
}, [CEP]);

if(!permissaoCam)return <View/>
//Se a permissão da câmera foi negado
if(!permissaoCam.granted){
  return(
    <View>
      <Text>Permissão da câmera não foi concedida</Text>
      <Button 
        title='Permitir'
        onPress={requestPermissaoCam}
      />
    </View>
  )
}

async function buscarCep(cepDigitado) {
  const cepLimpo = cepDigitado.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    setEndereco(null);
    setErroCep("");
    return;
  }

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      setEndereco(null);
      setErroCep("CEP não encontrado");
      return;
    }

    setEndereco(dados);
    setErroCep("");

  } catch (error) {

    setEndereco(null);
    setErroCep("Erro ao buscar o CEP");
  }
}


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



              {/* CEP */}
            <TextInput 
              placeholder="Digite seu CEP"
              style={styles.input}
              maxLength={8}
              keyboardType="numeric"
              onChangeText={(texto) => {
                setCep(texto);
                buscarCep(texto);
              }}
              value={CEP}
            />
            {erroCep ? (
              <Text style={{ color: "red", textAlign: "center" }}>{erroCep}</Text>
            ) : null}

            {endereco ? (
              <View style={styles.resultado}>
                <Text style={styles.resultadoTitulo}>Endereço encontrado</Text>
                <Text>Rua: {endereco.logradouro}</Text>
                <Text>Bairro: {endereco.bairro}</Text>
                <Text>Cidade: {endereco.localidade}</Text>
                <Text>Estado: {endereco.uf}</Text>
              </View>
            ) : null}
          </View> 

          <View style={styles.container2}>
            {
              !foto?(
                <>
                <CameraView
                  ref={cameraRef}
                  style={styles.camera}
                  facing={isFrontCamera?"front":"back"}
                  flash={flashLigado?"on":"off"}
                  onBarcodeScanned={({type,data})=>{
                    if(!scaneado){
                      setScaneado(true)
                      Alert.alert("Código detectado",`Tipo:${type}\nValor:${data}`,[
                        {
                          text:"Cancelar"
                        },
                        {
                          text:"Pesquisar Produto",
                          onPress:()=>{
                            const url = `https://pt.product-search.net/?q=${data}`
                            Linking.openURL(url)
                          }
                        }
                      ])
                    }
                  }}
                />
                <Button title='TIRAR UMA FOTO' onPress={tirarFoto}/>
                <Button title="Alternar Câmera" onPress={toggleCameraType}/>
                <Button title={flashLigado?"Desligar Flash":"Ligar Flash"} onPress={alternarFlash}/>
                {scaneado && (
                  <Button 
                  title='Escanear novamente'
                  onPress={()=>setScaneado(false)}
                />
                )}
                </>
              ):(
                <>
                  <Image 
                    source={{uri:foto.uri}}
                    style={{width:200,height:200}}
                  />
                  <Button title='Salvar Foto' onPress={salvarFoto}/>
                  <Button title='Tirar outra foto' onPress={()=>setFoto(null)}/>
                  <Button title="Compartilhar Foto" onPress={compartilharFoto}/>
                </>
              )
            }
     
    </View>

            {/* Botão de envio */}
          <View style={styles.Button}>
            <Button
              title="Enviar"
              onPress={() => {
                setUsuario({
                  nome,
                  curso,
                  CEP,
                  endereco,
                });
                if (!nome || !curso || !CEP) {
                  alert("Por favor, preencha todos os campos.");
                  return;
                }else {
                  navigation.navigate("perfil");
                }
              }}
            />          
          </View>

          {/* Preciso checar oq é esse erro:
             ERROR  [Error: Rendered more hooks than during the previous render.]
             ERROR  [Error: Rendered more hooks than during the previous render.]
             ERROR  [Error: Uncaught (in promise, id: 5): "Error: Call to function 'ExpoMediaLibrary.getPermissionsAsync' has been rejected.
            → Caused by: You have requested the AUDIO permission, but it is not declared in AndroidManifest. Update expo-media-library config plugin to include the permission before requesting it."]
             ERROR  [Error: Uncaught (in promise, id: 6): "Error: Call to function 'ExpoMediaLibrary.getPermissionsAsync' has been rejected.
            → Caused by: You have requested the AUDIO permission, but it is not declared in AndroidManifest. Update expo-media-library config plugin to include the permission before requesting it."]
             ERROR  [Error: Rendered more hooks than during the previous render.]
             ERROR  [Error: Uncaught (in promise, id: 7): "Error: Call to function 'ExpoMediaLibrary.getPermissionsAsync' has been rejected.
            → Caused by: You have requested the AUDIO permission, but it is not declared in AndroidManifest. Update expo-media-library config plugin to include the permission before requesting it."]
             ERROR  [Error: Rendered more hooks than during the previous render.]
             ERROR  [Error: Uncaught (in promise, id: 8): "Error: Call to function 'ExpoMediaLibrary.getPermissionsAsync' has been rejected.
            → Caused by: You have requested the AUDIO permission, but it is not declared in AndroidManifest. Update expo-media-library config plugin to include the permission before requesting it."]
             ERROR  [Error: Rendered more hooks than during the previous render.]
             ERROR  [Error: Uncaught (in promise, id: 9): "Error: Call to function 'ExpoMediaLibrary.getPermissionsAsync' has been rejected.
            → Caused by: You have requested the AUDIO permission, but it is not declared in AndroidManifest. Update expo-media-library config plugin to include the permission before requesting it."]
          
            concertar os erros e depois concertar o layout do app, principalmente a parte da câmera, que tá meio bugada.
          
          */}


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
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  camera:{
  width: 320,
  height: 420,
  borderRadius: 20,
  overflow: 'hidden',
  marginTop: 20,
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
    fontWeight: 'bold',
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