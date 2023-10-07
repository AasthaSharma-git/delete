
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component{


  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      buttonState:'normal',
      scanned:false,
      scannedBookId:'',
      scannedStudentId:''
    }
  }

getCameraPermission=async (id)=>{

const {status} = await Permissions.askAsync(Permissions.CAMERA);
this.setState({
  hasCameraPermissions:status==='granted',
  buttonState:id
})


}

handleBarCode=({type,data})=>{
  var id=this.state.buttonState;
  if(id==='bookId'){
    this.setState({
      scannedBookId:data,
      buttonState:'normal',
      scanned:true
    })
  }
  
  console.log(data)
}



render(){
   var cp=this.state.hasCameraPermissions;
   var bs=this.state.buttonState;
   var scanned=this.state.scanned;

   if(bs!='normal' && cp){
     return(
       <BarCodeScanner
       onBarCodeScanned={
           scanned?undefined:this.handleBarCode
       }
       style={StyleSheet.absoluteFillObject}
       ></BarCodeScanner>
     )
   }


 else if(bs==='normal'){
  return(
  <View style={styles.container}>
   


<TextInput style={styles.input}
 placeholder="Book Id"
 value={this.state.scannedBookId}
></TextInput>
<TouchableOpacity style={styles.btn} onPress={()=>this.getCameraPermission('bookId')}>
      <Text>Scan</Text>
    </TouchableOpacity>
  </View>
    





 )
 }
 
}




}
const styles=StyleSheet.create({
  container:{
     flexDirection:'row',
     alignSelf:'center'
  },
  btn:{
    marginTop:150,
    backgroundColor:'blue',
    alignSelf:'center'
  },
  input:{
    alignSelf:'center',
    marginTop:150,
    backgroundColor:'skyblue'
  }
})