import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Button } from 'react-native-paper';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleLogin = () => {
    if (!email || !email.includes('@')) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  const goToHome = () => {
    props.navigation.navigate('Drawer');
  };

  const goToNewAccount = () => {
    props.navigation.navigate('NovaConta');
  };

  const goToForgotPassword = () => {
    props.navigation.navigate('RecuperarSenha');
  };

  return (
    <View style={styles.backgroundView}>
      <View style={styles.container}>
        <Text style={styles.logoText}>Satisfying.you</Text>
        <Icon name="mood" size={60} color="#FFF" />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setInvalidEmail(false);
          }}
        />

        <TextInput
          style={styles.input}
          label="Senha"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setInvalidEmail(false);
          }}
          secureTextEntry={true}
        />

        {invalidEmail && <Text style={styles.invalidText}>E-mail e/ou senha inválidos.</Text>}

        <Button style={styles.loginButton} mode="contained" onPress={handleLogin}>
          <Text style={styles.loginButtonLabel} onPress={goToHome}>Entrar</Text>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.newAccountButton} mode="contained" onPress={goToNewAccount}>
            <Text style={styles.buttonLabel}>Criar minha conta</Text>
          </Button>
          <Button style={styles.forgotPasswordButton} mode="contained" onPress={goToForgotPassword}>
            <Text style={styles.buttonLabel}>Esqueci minha senha</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 33,
    fontFamily: 'AveriaLibre-Bold',
    paddingRight: 20,
  },
  formContainer: {
    width: width * 0.8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  loginButton: {
    backgroundColor: '#37BD6D',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  loginButtonLabel: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 15,
  },
  newAccountButton: {
    backgroundColor: '#419ED7',
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  forgotPasswordButton: {
    backgroundColor: '#B0CCDE',
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  buttonLabel: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 18,
  },
  invalidText: {
    color: '#FD7979',
    marginBottom: 10,
  },
});

export default Login;
