import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet,Image, Text, View, ScrollView, SafeAreaView  } from 'react-native';

export default function App() {
  
  return (
     
      
      <View style={styles.container}>
       
       

       <Text style={styles.tittle}>STUDENT PORTAL</Text>

       <Image style={styles.picture}
           source={require('./PROFILE-PICTURE.jpg')} />
       
       
    
      
      
      <StatusBar style="auto" />

      
   
       
    

      <ScrollView>
      < Text style={styles.text2}>                               SELLO MAJOANG</Text>
      < Text style={styles.text2}>                                   901013562</Text>
      < Text style={styles.text2}>                                      BSSM</Text>
     
      < Text style={styles.text2}>                      sellomajoang76@gmail.com             </Text>
      
      
      < Text style={styles.format}>  YEAR 2 SEMESTER 2 COURSES   AND GRADES</Text>
     
      
      < Text style={styles.text4}> Database Application                                                   B</Text>
      < Text style={styles.text4}> Probability and statistics                                          +C</Text>
      < Text style={styles.text4}> Mobile programming                                                    B</Text>
      < Text style={styles.text4}> C++ programming 2                                                     A</Text>
      < Text style={styles.text4}> Java 1                                                                              C</Text>
      < Text style={styles.text4}> Software Modelling                                                    +A                </Text>
      
      
      < Text style={styles.format}>  YEAR 2 SEMESTER 1 COURSES   AND GRADES</Text>
      
      < Text style={styles.text4}> Calculus II                                                                    +A</Text>
      < Text style={styles.text4}> Multimedia technology                                             +A</Text>
      < Text style={styles.text4}> Data communication & netwoking                         +A</Text>
      < Text style={styles.text4}> C++ programming I                                                      A</Text>
      < Text style={styles.text4}> principles of web design                                           +A</Text>
      < Text style={styles.text4}> fundamentals of internet technology                       B</Text>
      
      
      < Text style={styles.format}>  YEAR 1 SEMESTER 2 COURSES   AND GRADES</Text>
     
     
     < Text style={styles.text4}> Calculus I                                                                      +B</Text>
     < Text style={styles.text4}> Data communication                                                 +C                                                     </Text>
     < Text style={styles.text4}> Principles of Software enengineering                      B</Text>
     < Text style={styles.text4}> Digital Imaging                                                              A</Text>
     < Text style={styles.text4}> Introductiong to computer skills                              C</Text>
     < Text style={styles.text4}> Software Modelling and analysis                            +A</Text>
     </ScrollView>
     </View>
     
     
     
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#03A9F4',
  },
  full: 
  {
  width: '100%',
  height: '100%'
  },
  tittle:
  {
 alignItems: 'center',
 justifyContent: 'center',
 fontSize: 30,
 color: 'white',
 fontStyle: 'normal',
 marginLeft: 20
 


     
    
  },
  text2:{
    backgroundColor: '#90CAF9',
    alignItems:'center',
    justifyContent: 'center',
     borderWidth:3,
    fontSize:  20,
    fontWeight: 'bold'  

  },
  text4:{
    backgroundColor: 'turquoise',
    justifyContent: 'flex-start',
    borderWidth:3,
    fontSize:  19,
    color: 'white'


  },
  format: {

    fontSize: 17,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white'

  },

picture:
{
  width: 200,
  height: 200,
  borderRadius: 150,
  alignItems: 'center',
  marginLeft: 12,
  marginTop: 5,
  borderWidth:3,
  backgroundColor: 'white'
},



  
  
});
