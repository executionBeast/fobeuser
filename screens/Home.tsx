import {View, Text, StyleSheet, ScrollView, Image, ToastAndroid, SafeAreaView} from "react-native"
import NavButton from "../components/NavButton"
import TwoInfoSection from "../components/TwoInfoSection"
import { dimension, fontSize} from "../constants/constants"
import axios from "axios"
import { useState, useEffect } from "react"
import { userBackendUrl } from "../constants/Backend"
import useToast from "../hooks/useToast"
import Loader from "../components/Loader"
export default function Home() {
    const [users, setUsers] = useState([{}])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [user, setUser] = useState({})
    const [success, setSuccess] = useState(false)
    const {showToastText} = useToast()

        useEffect(()=>{
            if(!success){
                console.log("RUNNNED --> ", currentIndex)
                axios.get(`${userBackendUrl}?size=80`)
                .then(res=> res.data).then(data=>{
                    console.log("Fteching User Data Wait....!")
                    setUsers(data)
                    setSuccess(true)
                    // setIsload(true)
                }).catch(err=>{
                    console.log("Axios Error : ", err.message)
                    setSuccess(false)
                    // setIsload(false)
                })
            }
        },[success])
        
        useEffect(()=>{
            
            if(success && users.length > 0){
                setUser(users[currentIndex])
                console.log("User Set Smoothly! ")
            }
            
        },[currentIndex, users, success])
            
        const nextUser = () => {
            setCurrentIndex(index => {
               if(index < users.length - 1){
                return index + 1
               }
               else{
                showToastText("You already reached the end !")
                return index
               }
            })
            // setCurrentIndex(prev=> prev + 1)
            console.log("Fetch Next User")
        }

        const prevUser = () => {
            setCurrentIndex(index =>{
                if(index > 0 ){
                    return index - 1
                }
                else {
                    showToastText("Currently displaying first user! ")
                    return index
                }
            })
            // setCurrentIndex(prev => prev-1)
            console.log("Fetch Prev User")
        }

    return (
        <SafeAreaView style={styles.container}>
            {success ? (

            <View style={styles.content}>
                
           <View style={styles.avatarView}>  
               <View style={{flex:1, alignItems:'center', backgroundColor:''}}>
                   <Image source={{uri:user?.avatar}} alt="avatar" style={styles.avatar}/>
               </View>
               <View style={{flex:1/7, marginTop:6, backgroundColor:''}}>
                   <Text style={{fontSize:fontSize, textAlign:'center', color:'#663179', fontWeight:900}}>{`${user?.first_name} ${user?.last_name}`}</Text>
               </View>

           </View>

           <View id="info-view" style={{width:'100%', borderTopWidth:1, borderColor:'#21212133'}}></View>

           <View style={styles.infoView}>
               {/* <View style={styles.infoTextWrapper}>
                   <View style={{backgroundColor:'', width:'50%', paddingLeft:48}}>
                       <Text style={{fontSize:fontSize, color:'#663179', fontWeight:900}}> ID</Text>
                       <Text style={{fontSize:fontSize*0.7, color:'#21212188'}}> {user.id}</Text>
                   </View>

                   <View style={{backgroundColor:'',width:'50%', paddingLeft:48}}>
                       <Text style={{fontSize:fontSize, color:'#663179', fontWeight:900}}> ID</Text>
                       <Text style={{fontSize:fontSize*0.7, color:'#21212188'}}> {user.id}</Text>
                   </View>

               </View> */}
               <TwoInfoSection props={{key1:'Id',value1:user?.id, key2:'Uid', value2:user?.uid }}/>
               <TwoInfoSection props={{key1:'Username',value1:`${user?.username}`, key2:'Email', value2:user?.email }}/>
               <TwoInfoSection props={{key1:'Gender',value1:`${user?.gender}`, key2:'Dob', value2:user?.date_of_birth }}/>
               <TwoInfoSection props={{key1:'Password',value1:`${user?.password}`, key2:'Employment', value2:user?.employment?.title }}/>

           
           </View>  
       
            </View>

            ):(
                <Loader/>
            )}
 
            <View style={styles.nav}>
                <NavButton title='prev' action={prevUser}/>
                <Text style={{
                    fontSize:fontSize,
                    backgroundColor:'#21212111', 
                    flex:1/3, 
                    textAlign:'center', 
                    textAlignVertical:'center', 
                    borderRadius:100, 
                    color:'#663179'
                    }}>{currentIndex+1}</Text>

                <NavButton title='next' action={nextUser}/>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#21212122'
    },
    content: {  
        flex:1,
        // backgroundColor: '#00880044'
    },
    nav: {
        flex:1/16,
        flexDirection:'row',
        padding:22,
        // backgroundColor:'#99000055'
    },
    avatarView : {
        flex:1/2,
        // backgroundColor:'pink'
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:8,
    },
    avatar: {
        flex:1,
        width:fontSize*8,
        // height:fontSize*8,
        // borderRadius:fontSize*100,
        // borderWidth:1,
        // borderColor:'#21212133',
        // backgroundColor:'red'
    },
    infoView : {
        flex:1,
        // backgroundColor:'orange',
        paddingHorizontal:8,
        paddingVertical:10,
        paddingTop:dimension.width*0.05,

    },
    infoTextWrapper : {
        flex: 1/10,
        // backgroundColor:'#62626232',
        flexDirection:'row',
        // paddingHorizontal:18,
        justifyContent:'center',
        marginVertical:12,
    }

})
