
import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const App = () => {
  
const [frase , setFrase] = useState('')

const gerarFrase = () => {
  let numAleatorio = Math.random();
  numAleatorio = Math.floor(numAleatorio * 5);

  let frases = Array();
  frases[0] = '"Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes. - Albert Einstein"';
  frases[1] = '"Um desafio é uma ótima oportunidade - Autor desconhecido"';
  frases[2] = '"Faça o seu melhor, na condição que você tem, enquanto você não tem condições melhores para fazer melhor ainda! - Mário Sérgio Cortella"';
  frases[3] = '"A realidade é que, se não mudarmos agora, nossa vida não mudará. Se não melhorarmos, nossa vida não melhorará. - Autor desconhecido"';
  frases[4] = '"Ame a vida que você tem enquanto cria a vida dos seus sonhos. Não pense que precisa esperar pela última para começar a fazer a primeira. - Autor desconhecido"';
  frases[5] = '"Em quem você está se tornando, é muito mais importante do que o que você está fazendo, mas é o que você está fazendo que determina em quem você está se tornando. - Autor desconhecido"';
  
  let fraseAleatoria = frases[numAleatorio];
 
  setFrase(fraseAleatoria)
}


  return(
    <View>
      <TouchableOpacity onPress={gerarFrase}>
        <Text>Gerar Frase</Text>
      </TouchableOpacity>
      <Text>{frase}</Text>
    </View>
  )
};

export default App;
