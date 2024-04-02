import * as React from 'react';
import { TextInput, Text, View, FlatList , StyleSheet, ImageBackground} from 'react-native';
import firebase from '../../config/config'

class MeusPresentes extends React.Component {
  constructor(props){
    super(props);
    this.presente = ""
    this.categoria = " "
    this.loja = ""
    this.state = {
      presentes: []
    }
  }

  componentDidMount(){
    firebase.database().ref("presentes").on('value', snapshot =>  {
      let data = snapshot.val();
      let dados = Object.values(data);
      this.setState({presentes: dados})
    })
  }
  
  
  render(){
    return(
      <ImageBackground style={estiloSacola.containerHeader} source={require('../../assets/presentes.png')} resizeMode= 'contain'>
      <Text style={estiloSacola.titulo}>
        Presentes cadastrados
        </Text>
      {this.state.presentes.length > 0 ? 
      <FlatList
        data = {this.state.presentes}
        renderItem= {( {item} ) => 
        <View style={estiloSacola.container}>
        <View style={estiloSacola.items}>
          <Text style={estiloSacola.cadastrados}>Presente: {item.presente}</Text>
          <Text style={estiloSacola.cadastrados}>Categoria: {item.categoria}</Text>
          <Text style={estiloSacola.cadastrados}>Loja: {item.loja}</Text>
          </View>
        </View>} /> : null }
      </ImageBackground>
    )
  }
}

const estiloSacola = StyleSheet.create({
  container:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faba66'
  },
  titulo:{
    marginTop: 35,
    fontSize: 20,
    fontStyle: 'bold',
    fontFamily: "TiltNeon-Regular",
    color: "white",
    alignItems: 'center'
  },
  items:{
    fontSize: 18,
    fontFamily: "TiltNeon-Regular",
    color: "white",
    flex: 2,
    backgroundColor: "#fce185",
    borderRadius: 20,
    width: '100%',
    height:'100%',
    padding: 10,
    margin: 10
  },
  containerHeader:{
    flex: 1, 
    backgroundColor: '#faba66',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  cadastrados:{
    fontSize: 18,
    fontFamily: "TiltNeon-Regular",
    color: 'white'

  }



})


export default MeusPresentes;