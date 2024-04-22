import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const ModificarPesquisa = props => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroData, setErroData] = useState('');

  const handlePesquisa = () => {
    if (txtNome === '') {
      setErroNome('Preencha o nome da pesquisa');
    }
    if (txtData === '') {
      setErroData('Preencha a data');
    }
  };

  const goToHome = () => {
    props.navigation.navigate('Home');
  };

  const goToPopUp = () => {
    props.navigation.navigate('PopUp');
  };

  return (
    <ScrollView contentContainerStyle={estilos.scrollView}>
      <View style={estilos.backgroundView}>
        <View style={estilos.formContainer}>
          <Text style={estilos.texto}>Nome</Text>
          <TextInput
            style={estilos.textInput}
            value={txtNome}
            onChangeText={setNome}
          />
          <Text style={estilos.invalidText}>{erroNome}</Text>

          <View style={estilos.inputDataContainer}>
            <Text style={estilos.texto}>Data</Text>
            <View style={estilos.dateInputContainer}>
              <TextInput
                style={estilos.dateTextInput}
                value={txtData}
                onChangeText={setData}
                placeholder="DD/MM/AAAA"
              />
              <Icon
                name="calendar"
                size={45}
                color="#939393"
                style={estilos.icon}
              />
            </View>
            <Text style={estilos.invalidText}>{erroData}</Text>
          </View>

          <Text style={estilos.texto}>Imagem</Text>
          <TouchableOpacity style={estilos.imagemInput}>
            <Icon2 name="party-popper" size={50} color="#C60EB3" />
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.novaPesquisaBtn}
            onPress={handlePesquisa}
            onPressOut={goToHome}>
            <Text style={estilos.novaPesquisaBtnText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.cBotaoDeletar}>
          <TouchableOpacity style={estilos.botaoDeletar} onPress={goToPopUp}>
            <Icon2 name="trash-can-outline" size={50} color="white" />
            <Text style={estilos.texto}>Apagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '70%',
    paddingVertical: 20,
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 5,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  icon: {
    position: 'absolute',
    right: 5,
  },
  imagemInput: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '20%',
    marginBottom: 20,
  },
  imagemTxt: {
    fontSize: 16,
    color: '#939393',
    fontFamily: 'AveriaLibre-Regular',
  },
  novaPesquisaBtn: {
    backgroundColor: '#49B976',
    alignItems: 'center',
    marginTop: 5,
    padding: 5,
    color: 'white',
    borderWidth: 1,
    borderColor: '#37BD6D',
    borderStyle: 'solid',
    elevation: 4,
  },
  invalidText: {
    color: '#FD7979',
    marginBottom: 5,
  },
  novaPesquisaBtnText: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 21,
  },
  cBotaoDeletar: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
  },
  botaoDeletar: {
    alignItems: 'center',
  },
  textoApagar: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ModificarPesquisa;
