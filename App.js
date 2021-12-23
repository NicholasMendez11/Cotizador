import React,{useState, useEffect} from 'react'
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button, Alert} from'react-native';
import Form from './src/utils/Components/Form.js';
import colors from './src/utils/colors';
import Footer from './src/utils/Components/Footer.js';
import Result from './src/utils/Components/Result.js';


export default function app(){

//Estados
  const [capital, setCapital]= useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, settotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
//Effect
useEffect(() => {
  
    Calcular();
  
}, [capital,interest,months]);

    const Calcular =()=>{
      reset();
      if (!capital) {
        setErrorMessage("Inserte una cantidad a cotizar")
        
      }else if(!interest){
        setErrorMessage("Seleccione una taza de interes")
      }else if(!months){
        setErrorMessage('¿A cuantos meses necesitas que se dividan tus cuotas?')
      }else{
       
        const i = interest /100;
        const fee = capital/((1- Math.pow(i+1, -months))/i);
        settotal({
          monthlyFee: fee.toFixed(2).replace('.',','),
          totalToPaid: (fee *months).toFixed(2).replace('.',',')
        })
    
      }
    }

    const reset = () =>{
      settotal(null);
      setErrorMessage('');
    }

  return(
    < >
      <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
      <Text style={styles.textoPrincipal}>Cotizador de Prestamos</Text>
    <Form
    setCapital={setCapital}
    setInterest={setInterest}
    setMonths={setMonths}
    
    />
    </SafeAreaView>

    <Result
    capital={capital}
    interest={interest}
    months={months}
    total={total}
    errorMessage={errorMessage}
    ></Result>


    <Footer
    Calcular={Calcular}
    />
    </>
  
    
  )

}

const styles = StyleSheet.create({

  

  safeArea:{

    
    height: 290,
    alignItems:"center",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,

  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position: 'absolute',
    zIndex:-1,

  },
  
  textoPrincipal:{
    color: colors.TEXT_COLOR,
    fontSize: 25,

  },
  dialogBox:{
    width: '75%',
    padding: 16,
    
   
  },
  dialogText:{
    alignContent: 'center',
    justifyContent:'center',
    borderBottomWidth:6,
    borderLeftWidth:6,
    borderRightWidth:6,
    borderTopWidth:6,
      
  },
  dialogBox:{
    height: '100%',
    textAlign:'center',
    width: "100%",
  }


  
    


})