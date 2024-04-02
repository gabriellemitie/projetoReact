
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';



export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/presentear.png')}
      style={estiloHome.containerFirstGift}
      resizeMode= 'contain'
    >
    
      <View style={estiloHome.containerText1}>
        <Text style={estiloHome.textoFirstGift}>Vamos começar?</Text>
        <Text style={estiloHome.textoFirstGift, {alignText: 'center'}, {fontFamily:'PlaypenSans-Regular'}, {color: "white"}} >
          Qual a faixa de idade da pessoa presenteada?
        </Text>
      </View>
      <View style={estiloHome.containerBotaoIdade}>
        <TouchableOpacity style={estiloHome.botoesIdade} onPress={()=> navigation.navigate('Crianças')}>
          <Text style={estiloHome.textBotaoIdade}>Criança 0-12 anos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estiloHome.botoesIdade} onPress={()=> navigation.navigate('Adolescentes')}>
          <Text style={estiloHome.textBotaoIdade}>
            Adolescente 13-17 anos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estiloHome.botoesIdade} onPress={()=> navigation.navigate('Adultos')}>
          <Text style={estiloHome.textBotaoIdade}>Adulto >20 anos</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const estiloHome = StyleSheet.create({
  containerFirstGift:{
    flex: 1,
    backgroundColor: '#7cb490', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoFirstGift:{
    fontSize: 18,
    fontFamily: "TiltNeon-Regular",
    color: "white"
  },
  containerText1:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  containerBotaoIdade:{
    flex:4,
    display: 'flex',
    justifyContent: 'center',
  },
  botoesIdade:{
    backgroundColor: '#7cb490',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    width: 200,
    height: 45,
    borderColor: '#faba66',
    borderWidth: 2
    
  },
  textBotaoIdade:{
    fontSize: 15,
    marginTop: 12,
    fontFamily: "TiltNeon-Regular",
    color: "white"
    

  },

})