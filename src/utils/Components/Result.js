import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const{ capital, interest, months, total, errorMessage} = props;
    return (
        <View style={styles.content}>
            {total && (
            <View style={styles.BoxResults}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult title='cantidad solicitada' value={`$${capital}`} />
                <DataResult title='Tasa de interes' value={`${interest}%`} />
                <DataResult title='Tiempo' value={`${months} meses`} />
                <DataResult title='pagos mensuales' value={`$${total.monthlyFee}`} />
                <DataResult title='Total a pagar' value={`$${total.totalToPaid}`}/>
            </View>
                
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}


function DataResult(props){
    const {title, value}=props
    return(
        <View style={styles.value}>
                        <Text>{title}</Text>
                        <Text>{value}</Text>
                    
                    </View>
    )
}

const styles = StyleSheet.create({

    content:{
        marginTop:0,
        marginHorizontal:40,


    },

    error:{
        textAlign:'center',
        color:'#20f26f',
        fontWeight:'bold',
        fontSize:20,

    },
    BoxResults:{
        padding: 30,
    },
    title:{
       fontSize:30,
       color:'#000',
       textAlign:'center',
       fontWeight:'bold',
       marginBottom:30, 
    },
    value:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    }
})
