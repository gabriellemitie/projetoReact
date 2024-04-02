import {useState} from 'react';

import {Text, View, Button,StyleSheet, TextInput, Image, TouchableOpacity, Linking} from 'react-native';
import firebase from '../../config/config';
import {Audio} from 'expo-av';



export default function Adults (){
  const [presente, setPresente] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loja, setLoja] = useState(""); 
  const som = new Audio.Sound();

  const salvar = () => {
    firebase.database().ref('presentes').push({
      presente: presente,
      categoria: categoria,
      loja: loja
    });
    alert("Item adicionado com sucesso! Verifique em 'Meus Presentes'");
    tocarSom();
  };
  const tocarSom = async () => {
    try {
      await som.loadAsync(require('../../assets/item_adicionado.mp3'));
      await som.setPositionAsync(0);
      await som.playAsync();
    } catch (error) {
      console.error("Erro ao tocar o som:", error);
    }
  };
   return(

    <View style={estiloAdults.container}>
      <View style={estiloAdults.container2}>
      <Text style = {estiloAdults.textoTitulo}>Seção adulta</Text>
      </View>
      <View style={estiloAdults.container3}>
      <Text style={estiloAdults.sugestao}>Algumas sugestões</Text>
      <View style={estiloAdults.grid}>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.centauro.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/centauro.png')}
          />
          </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.tokstok.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/tokstok.jpg')}
          />
          </TouchableOpacity>
              <TouchableOpacity onPress={()=> Linking.openURL('https://loja.vinicolagoes.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/goes.webp')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.vivara.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/Vivara.jpg')}
          />
          </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.fila.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/fila.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={estiloAdults.grid}>
        <TouchableOpacity onPress={()=> Linking.openURL('https://buddhaspa.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/spa.jpg')}
          />
          </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.jbl.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/jbl.png')}
          />
          </TouchableOpacity>
              <TouchableOpacity onPress={()=> Linking.openURL('https://www.montecarlo.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/montecarlo.webp')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.decathlon.com.br/')}>
          <Image style={estiloAdults.sugestao1}
          source={require('../../assets/decathlon.png')}
          />
          </TouchableOpacity>
        
      </View>      
      </View>
      <View style={estiloAdults.containerColuna}>
      <Text style={estiloAdults.sugestao}>Tem alguma ideia em mente? Conte pra gente!</Text>
        <TextInput
        style={estiloAdults.textoAdultos}
          placeholder='Inserir Presente'
          textAlign = 'center'
          onChangeText={(text) => setPresente(text)}
        />
        <TextInput
        style={estiloAdults.textoAdultos}
          placeholder='Categoria'
          textAlign = 'center'
          onChangeText={(text) => setCategoria(text)}
        />
        <TextInput
        style={estiloAdults.textoAdultos}
          placeholder='Loja'
          textAlign = 'center'
          onChangeText={(text) => setLoja(text)}
        />
        <TouchableOpacity
        style={estiloAdults.salvar}
         onPress={salvar}>
          <Text style={estiloAdults.textoSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    
      
    
    </View>
    );
}

const estiloAdults = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#a2cca5",
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2:{
    flex: 1,
    alignContent: 'center',
    borderRadius: 30

  },
  container3:{
    flex:3, 
    backgroundColor: '#a2cca5',
    borderRadius: 12,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  sugestao1:{
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5,
    marginVertical: 5
    
    
    
  },
  textoAdultos:{
    fontSize: 17, 
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#faba66',
    borderWidth: 5,
    width: 250,
    fontFamily: "TiltNeon-Regular",
    color: "white"
  },
  containerColuna:{
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#a2cca5',
    alignItems: 'center'
  
  },
  salvar:{
    backgroundColor: '#faba66',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
    height: 45,
    alignSelf: 'center',
    marginTop: 20
    
  },
  textoSalvar:{
    marginTop: 10,
    fontSize: 18,
    fontFamily: "TiltNeon-Regular",
    color: "white"
  },
  textoTitulo:{
    fontVariant: 'bold',
    fontSize: 20,
    marginTop: 50,
    fontFamily: "TiltNeon-Regular",
    color: "white"
  },
   sugestao: {
    fontFamily: "TiltNeon-Regular",
    color: "white",
    fontSize: 18,
    width: "80%"
  },
  grid:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
    
  }
  
})



