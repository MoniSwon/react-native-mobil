import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";
import { useEffect } from "react/cjs/react.production.min";
import { getRandomColor } from "../ApiCalls";

/* async function init() {
    await getRandomColor();
}
useEffect(init(), []); */

export const styles = StyleSheet.create({
    board: {
        backgroundColor: 'red',
        borderWidth:3,
        height: '91%',
        alignItems:'center',
        justifyContent:'center',
    },
    button: {
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
    },
    FlatList: {
        padding:0,

    }
})