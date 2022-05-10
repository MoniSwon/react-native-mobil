import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";


export const styles = StyleSheet.create({
    board: {
        backgroundColor: 'moccasin',
        borderTopWidth:5,
        borderBottomWidth:5,
        borderColor:'white',
        height: '88%',
    },
    top: {
        marginTop:30,
        marginLeft:260,
        alignItems:'center',
    },
    button: {
        fontSize:40,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        borderRadius:10,
        backgroundColor:'chocolate',
    },
    textButton:{
        color:'white',
        letterSpacing: 0.5,
        fontWeight:'bold',
        fontSize:20,
    },
    square: {
        backgroundColor:'yellow',
        width:100,
        height:100,
        borderRadius:10,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
    },
    viewSquare: {
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent: 'center',
        padding:20,
        alignItems:'center',
    }
})