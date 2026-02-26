import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Calculadora() {
  
  const [n1, setN1] = useState(''); //useState('') é para deixar um espaço vazio de texto, o qual o usuário vai preencher
  const [n2, setN2] = useState('');
  const [result, setResult] = useState(0); //useState(0) é para iniciarmos a conta com valor 0

  const calcSoma = () =>{
    const soma = parseFloat(n1) + parseFloat(n2);  //const é uma forma de declarar variável, var no javascript não é utilizado
    setResult(soma);
  }

  const calcSubtracao = () => {
    const subtracao = parseFloat(n1) - parseFloat(n2);
    setResult(subtracao);
  }

  const calcMultiplicacao = () => {
    const multiplicacao = parseFloat(n1) * parseFloat(n2);
    setResult(multiplicacao);
  }

  const calcDivisao = () => {
    const divisao = parseFloat(n1) / parseFloat(n2);
    setResult(divisao);
  }

  return (
      <View style={{ padding: 40}}>
        <Text style={{ fontSize: 24}}>Resultado: {result}</Text>

          {/* onde o usuário vai digitar*/}
          <TextInput placeholder='1'
            onChangeText={setN1}
            keyboardType='numeric'
            style={{ borderBottomWidth: 1, marginBottom: 10 }}/>

            <TextInput placeholder='2'
            onChangeText={setN2}
            keyboardType='numeric'
            style={{ borderBottomWidth: 1, marginBottom: 20 }}/>

            <Button title='Somar' onPress={calcSoma}/>
            <Button title='Subtrair' onPress={calcSubtracao}/>
            <Button title='Multiplicar' onPress={calcMultiplicacao}/>
            <Button title='Dividir' onPress={calcDivisao}/>
      </View>
    );
}
