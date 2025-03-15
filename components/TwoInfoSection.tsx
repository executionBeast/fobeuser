import {View, Text, StyleSheet} from 'react-native'
import { dimension, fontSize, user } from "../constants/constants"

export default function TwoInfoSection({props}) {
    return (
        <View style={styles.infoTextWrapper}>
            <View style={{backgroundColor:'', width:'50%', paddingLeft:20, height:'auto'}}>
                <Text style={{fontSize:fontSize*0.8, color:'#663179', fontWeight:900}}>{props.key1}</Text>
                <Text style={{fontSize:fontSize*0.6, color:'#21212188',}}>{props.value1}</Text>
            </View>

            <View style={{backgroundColor:'',width:'50%', paddingLeft:20, height:'auto'}}>
                <Text style={{fontSize:fontSize*0.8, color:'#663179', fontWeight:900,  backgroundColor:''}}>{props.key2}</Text>
                <Text style={{fontSize:fontSize*0.6, color:'#21212188', backgroundColor:'', textAlign:'left'}}>{props.value2}</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    infoTextWrapper : {
        // flex: 1/7,
        // backgroundColor:'#62626232',
        flexDirection:'row',
        // paddingHorizontal:18,
        justifyContent:'center',
        marginVertical:12,
    }
})