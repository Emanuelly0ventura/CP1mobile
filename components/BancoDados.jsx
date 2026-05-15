import { Text } from "react-native";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default({nome,curso,disciplina,descricao})=>{
const { setUsuario } = useContext(UserContext);

    return(
        <>
        <Text>Nome:  {nome}</Text>
        <Text>Curso:  {curso}</Text>
        <Text>Disciplina:  {disciplina}</Text>
        <Text>Descrição:  {descricao}</Text>

        </>
    )
}