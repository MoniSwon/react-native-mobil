import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect, useState } from "react";
import { getRandomColor } from "../ApiCalls";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BoardGame() {

    const [state, setState] = useState('');

    useEffect(() => {
        getRandomColor().then(res => {
            for (let i = 0; i < 9; i++) {
                res[i].id = i;
                res[i].color_name = '';
            }
            setState(res);

        })
    }, []);

    /* useEffect(()=>{
        console.log(state)
    },[state]) */

    const [listIdNotUsed, setListIdNotUsed] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

    const retry = () => {
        getRandomColor().then(res => {
            for (let i = 0; i < 9; i++) {
                res[i].id = i;
                res[i].color_name = '';
            }
            setState(res);

        })
        setListIdNotUsed([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }

    const [board, setBoard] = useState([]);

    const onPressUser = (id) => {
        //first, we modify the color name by the cross and set State by the new state
        const newState = state.map((array) => {
            if (array.id === id) array.color_name = '❌'
            return array
        })
        setState(newState);

        // if(listIdNotUsed[id] == id.toString()) {

        //then, we filter ListIdNotUsed of the id which has the color name changed.
        const newListIdNotUsed = listIdNotUsed.filter((value) => { return value !== id })
        console.log(newListIdNotUsed)
        setListIdNotUsed(newListIdNotUsed)
        console.log(listIdNotUsed);
        //The random could take one number of this array and put a circle.
        //si la longueur n'est pas inférieur à 2
        const random = Math.floor(Math.random() * newListIdNotUsed.length);
        const numberChooseByRandom = newListIdNotUsed[random];
        console.log(numberChooseByRandom);
    }

    const pushValueUser = (id) => {
        setBoard.push([id, '❌'])
        // put the text related to the id on the board.
        setListIdNotUsed(listIdNotUsed.filter(x => (x == id.toString())))
    }

    const pushValueRandom = () => {
        // Get random id from the List
        var id = 0;
        setBoard.push([id, '❌'])
    }


    return (
        <View style={styles.board}>

            <View style={styles.top}>
                <Pressable style={styles.button} onPress={retry}>
                    <Text style={styles.textButton}>Retry</Text>
                </Pressable>
            </View>

            <SafeAreaView>
                <FlatList
                    data={state}
                    numColumns={3}
                    contentContainerStyle={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 20,
                        alignItems: 'center'
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Pressable style={{
                            backgroundColor: 'yellow',
                            width: 100,
                            height: 100,
                            borderRadius: 10,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: item.hex_value
                        }}
                            onPress={() => onPressUser(item.id)}>
                            <Text>{item.color_name}</Text>
                        </Pressable>
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    )
}
