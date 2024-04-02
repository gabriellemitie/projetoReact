import {useState} from 'react';
import {Text, View, Button,StyleSheet, TextInput, Image, TouchableOpacity, Linking} from 'react-native';
import firebase from '../../config/config';
import {Audio} from 'expo-av';


export default function Kids (){
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

    <View style={estiloKids.container}>
      <View style={estiloKids.container2}>
      <Text style = {estiloKids.textoTitulo}>Seção infantil</Text>
      </View>
      <View style={estiloKids.container3}>
      <Text style={estiloKids.sugestao}>Algumas sugestões</Text>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.rihappy.com.br/')}>
        <Image style={estiloKids.sugestao1}
        source={require('../../assets/rihappy.jpg')}
        />
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.hering.com.br/kids?gad_source=1&gclid=CjwKCAiA0syqBhBxEiwAeNx9NyKcDhi0ZVhXg7EkfTRaXtCzDM3nkI23yORIFX25Xl4ukOxe8Ne_URoCDTYQAvD_BwE')}>
        <Image style={estiloKids.sugestao1}
        source={require('../../assets/hering.jpg')}
        />
        </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.natura.com.br/c/tudo-em-infantil?brand_filter=Natur%C3%A9&product_line=%5B%22Natur%C3%A9%22%5D&mediamonks1=mamaeebebe-marcas&mediamonks2=nature&gad_source=1&gclid=CjwKCAiA0syqBhBxEiwAeNx9N9DBKUXvbhKGj9oKsJL28ZD8lUUTS4AcDoRbWgO_thiBPnQubLtWjRoCquIQAvD_BwE&gclsrc=aw.ds')}>
        <Image style={estiloKids.sugestao1}
        source={require('../../assets/natura.png')}
        />
        </TouchableOpacity>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.pbkids.com.br/')}>
        <Image style={estiloKids.sugestao1}
        source={require('../../assets/pbkids.webp')}
        />
        </TouchableOpacity>
      </View>
      <View style={estiloKids.containerColuna}>
      <Text style={estiloKids.sugestao}>Tem alguma ideia em mente? Conte pra gente!</Text>
        <TextInput
        style={estiloKids.textoBrinquedos}
          placeholder='Inserir Presente'
          
          textAlign = 'center'
          onChangeText={(text) => setPresente(text)}
        />
        <TextInput
        style={estiloKids.textoBrinquedos}
          placeholder='Categoria'
          textAlign = 'center'
          onChangeText={(text) => setCategoria(text)}
        />
        <TextInput
        style={estiloKids.textoBrinquedos}
          placeholder='Loja'
          textAlign = 'center'
          onChangeText={(text) => setLoja(text)}
        />
        <TouchableOpacity
        style={estiloKids.salvar}
         onPress={salvar}>
          <Text style={estiloKids.textoSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    
      
    
    </View>
    );
}

const estiloKids = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f77c3e",
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
    backgroundColor: '#f77c3e',
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
    justifyContent: 'flex-end',
    marginTop: 10
  },
  textoBrinquedos:{
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
    backgroundColor: '#f77c3e',
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
  }
  
})



