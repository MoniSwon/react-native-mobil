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

    const onPressUser = (id) => {
        //first, we modify the color name by the cross and set State by the new state
        const newState = state.map((array) => {
            if (array.id === id) array.color_name = '❌'
            return array
        })
        setState(newState);

        //then, we filter ListIdNotUsed of the id which has the color name changed.
        const newListIdNotUsed = listIdNotUsed.filter((value) => { return value !== id })
        //The random could take one number of this array 
        //si la longueur n'est pas inférieur à 2 // Or if array empty, put "match nul"
        const random = Math.floor(Math.random() * newListIdNotUsed.length);
        const numberChooseByRandom = newListIdNotUsed[random];
        // put a circle where there is this random number
        const newStateAgain = state.map((array) => {
            if (array.id === numberChooseByRandom) array.color_name = '⭕'
            return array
        })
        setState(newStateAgain);
        //and delete the random number of the list of id not used
        const newListIdNotUsedAgain = newListIdNotUsed.filter((value) => { return value !== numberChooseByRandom })
        setListIdNotUsed(newListIdNotUsedAgain)

        // Between each action, we need to check if there is a "win"
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
