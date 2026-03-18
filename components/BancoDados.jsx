import { Text } from "react-native";

export default({nome,curso,disciplina,descricao})=>{
    return(
        <>
        <Text>Nome:  {nome}</Text>
        <Text>Curso:  {curso}</Text>
        <Text>Disciplina:  {disciplina}</Text>
        <Text>Descrição:  {descricao}</Text>

        </>
    )
}