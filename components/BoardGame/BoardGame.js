import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect, useState } from "react";
import { getRandomColor } from "../ApiCalls";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BoardGame() {

    const [state, setState] = useState('');

    useEffect(() => {
        getRandomColor().then(res => {
            setState(res);
            for (let i = 0; i < 9; i++) {
                res[i].id = i;
            }
        })
    }, []);

    const [listIdNotUsed, setListIdNotUsed] = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

    const retry = () => {
        getRandomColor().then(res => {
            setState(res)
            for (let i = 0; i < 9; i++) {
                res[i].id = i;
            }
        })
        //setListIdNotUsed(['0', '1', '2', '3', '4', '5', '6', '7', '8']);
    }

    const [board, setBoard] = useState([]);

    const onPressUser = (id) => {
        console.log(id)
    }

    const pushValueUser = (id) => {
        setBoard.push([id, '❌'])
        setListIdNotUsed(listIdNotUsed.filter(x => (x == id)))
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
                        onPress={() => {console.log(item.id)}}>
                            <Text>{item.color_name}</Text>
                        </Pressable>
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    )
}
