import React, {Component, useState} from 'react';  
import {Button, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacityBase, View,ListRenderItem,FlatList} from 'react-native';  


const Fatlist=()=> {
  
  const[name,setname]=useState([
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"} ,{name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,{name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,{name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,{name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Darshan', email:"dsp@ff.com"}  ,
  ]);
   const press= (item) => {  
    alert(item.email);  
   }
  return(

     <View style={styles.container}> 
      <FlatList  data={name}  renderItem={({item})=>(
       
       <View><Text style={styles.item}   onPress={press.bind(this, item)} >     {item.name}</Text></View>

      )}
       />
     </View>
  )
}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
    backgroundColor: '#ed4ef2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },  
})  
export default Fatlist;