import { Text } from "react-native";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default({nome,curso,CEP,descricao})=>{
const { setUsuario } = useContext(UserContext);

    return(
        <>
        <Text>Nome:  {nome}</Text>
        <Text>Curso:  {curso}</Text>
        <Text>CEP:  {CEP}</Text>
        
        <Text>Descrição:  {descricao}</Text>

        </>
    )
}