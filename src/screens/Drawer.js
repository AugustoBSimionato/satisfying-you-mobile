
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from "../components/CustomDrawer";
import Home from "./Home";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{ 
                drawerActiveTintColor: '#2B1F5C', 
                drawerLabelStyle: { color: 'white' }, 
                drawerStyle: { backgroundColor: '#2B1F5C' }, 
                headerStyle: { backgroundColor: '#2B1F5C' }, 
                headerShadowVisible: false, 
                headerTintColor: 'white', 
                headerTitle: ''
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <DrawerNavigator.Screen name="Pesquisas" component={Home} options={{drawerIcon: () => (
                <Icon name="description" size={25} color='white'/>), 
                drawerLabelStyle: styles.drawerLabel,
            }}/>
        </DrawerNavigator.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerLabel:{
        fontSize: 18,
        color: 'white', 
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'left',
        right:20,
    },
});

export default Drawer;
