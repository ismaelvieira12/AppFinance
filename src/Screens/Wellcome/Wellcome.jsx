import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './wellcome';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Wellcome = () => {
return (
    <View style={styles.container}>
            <LinearGradient
             colors={["#0061BD", "#0071dbff"]}
             style={styles.headerGradient}
            >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <AntDesign name="menu" size={24} color="white" />
                    <Image
                        style={{ width: 50, height: 50,  marginTop: 20, borderRadius: 10}}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt05by-WcwqQ5UHeK0eNhNYxGnrX2CJsHSOA&s'}}
                    />
                </View>
                <Text style={styles.txtWellcome}>Bem vindo,</Text>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 5}}>Gerencie suas finanças de forma fácil</Text>
            </LinearGradient>
        <StatusBar style="auto" />
    </View>
);
}