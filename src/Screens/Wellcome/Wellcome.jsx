import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './wellcome';
export const Wellcome = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
         colors={["#0061BD", "#0071dbff"]}
         style={styles.headerGradient}
        >
            <View>

                <Text>Teste 2</Text>
            </View>
        </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}