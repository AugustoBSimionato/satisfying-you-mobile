import { View, Text, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text style={styles.emailText}>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem style={styles.closeButton} labelStyle={styles.label} label="Sair" 
                onPress={() => { props.navigation.popToTop() }}
                icon={() => (
                    <Icon name="logout" size={25} color='white'/>
                )} 
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    emailText:{
        fontSize: 22,
        color: 'white', 
        alignSelf: 'center', 
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginVertical: 5,
        fontFamily: 'AveriaLibre-Regular',
    },
    closeButton:{
        color:'white',
        fontFamily: 'AveriaLibre-Regular',
        marginTop: 170,
    },

    label:{
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white', 
        textAlign: 'left', 
        marginLeft: -20
    }
});

export default CustomDrawer;