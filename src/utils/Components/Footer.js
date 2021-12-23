import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../colors.js'

export default function Footer(props) {
    const {Calcular}=props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.Buttom} onPress={Calcular}>
            <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: 'absolute',
        bottom: 0,
        width: "100%",
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        alignItems:"center",
        justifyContent:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    text:{
        fontWeight:'bold',
        fontSize: 18,
        color: '#fff',
        textAlign:'center'
    },
    Buttom:{
        backgroundColor: colors.PRIMARY_COLORDARK,
        color: '#fff',
        padding: 16,
        width: '75%',
        borderRadius:20,
    }

})



//rnfc me crea un templeta con un styleSheet