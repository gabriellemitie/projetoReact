import {useState} from 'react';
import {Text, View, Button,StyleSheet, TextInput, Image, TouchableOpacity, Linking} from 'react-native';
import firebase from '../../config/config';
import {Audio} from 'expo-av';


export default function Teenagers (){
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

    <View style={estiloTeenagers.container}>
      <View style={estiloTeenagers.container2}>
      <Text style = {estiloTeenagers.textoTitulo}>Seção adolescente</Text>
      
      </View>
      <View style={estiloTeenagers.container3}>
      <Text style={estiloTeenagers.sugestao}>Algumas sugestões</Text>
      
      <View style={estiloTeenagers.grid}>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.artwalk.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/artwalk.png')}
        />
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.geekpoint.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/geekpoint.jpg')}
        />
        </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.gsuplementos.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/growth.png')}
        />
        </TouchableOpacity>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.haikaipresentes.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/haikai.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.boticario.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/boticario.jpg')}
        />
        </TouchableOpacity>
      </View>
       <View style={estiloTeenagers.grid}>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.centauro.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/centauro.png')}
        />
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.vivara.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/Vivara.jpg')}
        />
        </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.lojasrenner.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/renner.jpg')}
        />
        </TouchableOpacity>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.thebodyshop.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/thebodyshop.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.nike.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/nike.jpg')}
        />
        </TouchableOpacity>
      </View>
       <View style={estiloTeenagers.grid}>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.adidas.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/adidas.jpeg')}
        />
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.cacaushow.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/cacaushow.png')}
        />
        </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.lojakings.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/kings.jpg')}
        />
        </TouchableOpacity>
         <TouchableOpacity onPress={()=> Linking.openURL('https://br.puma.com/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/puma.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.vans.com.br/')}>
        <Image style={estiloTeenagers.sugestao1}
        source={require('../../assets/vans.webp')}
        />
        </TouchableOpacity>
      </View>
      
       
      </View>
      <View style={estiloTeenagers.containerColuna}>
      <Text style={estiloTeenagers.sugestao}>Tem alguma ideia em mente? Conte pra gente!</Text>
        <TextInput
        style={estiloTeenagers.textoTeenagers}
          placeholder='Inserir Presente'
          textAlign = 'center'
          onChangeText={(text) => setPresente(text)}
        />
        <TextInput
        style={estiloTeenagers.textoTeenagers}
          placeholder='Categoria'
          textAlign = 'center'
          onChangeText={(text) => setCategoria(text)}
        />
        <TextInput
        style={estiloTeenagers.textoTeenagers}
          placeholder='Loja'
          textAlign = 'center'
          onChangeText={(text) => setLoja(text)}
        />
        <TouchableOpacity
        style={estiloTeenagers.salvar}
         onPress={salvar}>
          <Text style={estiloTeenagers.textoSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    
      
    
    </View>
    );
}

const estiloTeenagers = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fce185",
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
    backgroundColor: '#fce185',
    borderRadius: 12,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
    
  },
  sugestao1:{
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: 'flex-end',
    marginTop: 10
  },
  textoTeenagers:{
    fontSize: 17, 
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#a2cca5',
    borderWidth: 5,
    width: 250,
    fontFamily: "TiltNeon-Regular",
    color: "white"
  },
  containerColuna:{
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#fce185s',
    alignItems: 'center'
  
  },
  salvar:{
    backgroundColor: '#a2cca5',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
    height: 45,
    alignSelf: 'center',
    marginTop: 20,
    
    
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
    width: "80%",
    alignSelf: 'center'
   
  },
  grid:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  }
  
})



