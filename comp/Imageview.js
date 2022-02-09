import React from "react";
import { View,Image ,StyleSheet,Text,ImageBackground} from "react-native";

const Imageview=()=>{
    return(
        <View style={{flex:1}}>
        <View >
        <View style={{  position: 'absolute', top: 0, left: 200, right: 0, height: 300, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{borderWidth:2,fontWeight:"bold",color:'red'}}>  I am spider-man</Text>
    </View>
         

        <Image source={require('/home/rootbot/ReactProject/hello/Images/side2.jpeg')} />
        </View>
         <View style={styles.container2}>
         <View style={{  position: 'absolute', top: 0, left: 0, right: 200, height: 300, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{borderWidth:2,fontWeight:"bold",color:'red'}}>  I am Robert Downey Jr.</Text>
    </View>
         <Image source={require('/home/rootbot/ReactProject/hello/Images/yu.jpg')}  style = {styles.img2}/>
         </View>
         </View> 

    )

  
}

const styles=StyleSheet.create({
   
   container2:{
       flex:1,
       alignItems:'flex-end',
       
   },
   img2:{
    flex:1,
    width:200,
    borderWidth:3,
    padding:3,
    borderColor:'red',
   }
    
})

export default Imageview;
