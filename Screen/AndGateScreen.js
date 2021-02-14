import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import AudioComp from '../Helper/Audo'
import Ap from '../assets/Ap.png'
import LogicGate from '../assets/logicGate.png'
import trap from '../assets/TRAP.png'
import andGate from '../assets/andGate.png'
import orGate from '../assets/orGate.png'
import xorGate from '../assets/xorGate.png'
import norGate from '../assets/norGate.png'
const AndGateScreen = ({ navigation }) => {
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        // <View style={{}}>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.image}>
                {/* <Text style={styles.textHeading}>TRAP</Text> */}
                <View style={{ alignItems: "center", marginTop: 40 }}>
                    <Image
                        style={{ height: 250, width: 280, alignItems: "center" }}
                        source={trap}
                    />
                </View>
     </ImageBackground>
            <StatusBar style="dark" backgroundColor="#129cf3" />
        </View>
        // </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        // justifyContent: 'center',
    },
    textHeading: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70,
        textAlign: 'center',
    },
    GameOptions: {
        marginTop: 20,
        // alignItems: 'center',
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#eae7a2",
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
});
export default AndGateScreen