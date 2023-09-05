import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{ uri: 'https://i.pinimg.com/564x/ff/90/75/ff9075c7608fb6f0b999c6f5de3d9cb6.jpg'}} style ={styles.Picture} />
     </View>
  ) 
};
const NAME = () =>{
  return(
    <View> 
<Text style ={styles.name}> DANICA MAE GONZAGA</Text>
<Text style={styles.course}> BS Info Tech</Text> 
</View>
  )
}

const SubjectLabel = () =>{
  return(
    <View>
      <Text style={styles.sl}> My Subject </Text>
    </View>
  )
}
const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.sub}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.sub}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.sub}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.sub}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subj}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture />
      <NAME />
      </View>

      
      <View style ={styles.sl}>
      <SubjectLabel/> 
      </View>

      
      <SubjectOfferings/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },
 
  profile: {
    backgroundColor: '#ffd700',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#000000',
    fontSize: '20px',
    marginLeft: '20px' 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

 sl:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
  fontWeight: 'bold'
 },

 subjectOfferings:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: '#ffc0cb',
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 sub:{
  fontSize: '22px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescription:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectUnits:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'green',
 },

seeMore:{
  color:'#ff8c00',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
}); 
