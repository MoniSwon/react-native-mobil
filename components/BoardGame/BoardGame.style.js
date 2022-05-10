import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";


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
    flatList: {
        padding:0,

    }
})