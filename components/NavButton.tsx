import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { fontSize } from "../constants/constants";

export default function NavButton(props) : React.JSX.Element  {
    return (
    <TouchableOpacity 
    style={styles.btn}
    onPress={props.action}
    >
        <Text style={styles.btnText}>
            {props.title}
        </Text>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor:'#21212144',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16,
        borderRadius:28,
        textAlign:"center",
        alignSelf:'center',
        alignContent:'center'
    },

    btnText: {
        flex: 1,
        fontSize: fontSize,
        textAlign:'center',
        textAlignVertical:'center',
        // justifyContent:'center',
        // alignItems:'center',
        // alignSelf:'center',
        // alignContent:'center',
        // backgroundColor:'red',

    },
})