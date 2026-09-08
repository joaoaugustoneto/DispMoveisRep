import React from 'react';
import {View, Text} from 'react-native';

const aluno = ({nome, curso, media}) => {
    return (
        <View>
            <Text>O nome do aluno é {nome}, o curso é {curso}, e o ele está {media}.</Text>
            {media >7 && <Text> Aprovado </Text>}
        </View>
    );
};

export default function app () {
    return (
        <View>
            <aluno>
                nome = "Karina Modesto"
                curso = "Desenvolvimento mobile"
                media = {9.5}
            </aluno>
            <aluno>
                nome = "Gustavo F. Aura"
                curso = "Desenvolvimento mobile"
                media = {8.0}
            </aluno>
            <aluno>
                nome = "João A"
                curso = "Desenvolvimento mobile"
                media = {4.6}
            </aluno>
        </View>
    );
}