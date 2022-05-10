import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect, useState } from "react";
import { getRandomColor } from "../ApiCalls";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BoardGame() {

    const [state, setState] = useState('');

    useEffect(() => {
        getRandomColor().then(res => {
            setState(res)
        })
    }, []);

    return (
        <View style={styles.board}>

            <View style={styles.top}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Retry</Text>
                </Pressable>
            </View>

                <SafeAreaView>
                    <FlatList
                        data={state}
                        contentContainerStyle={{flexWrap:'wrap',
                        flexDirection:'row',
                        justifyContent: 'center',
                        padding:20,
                        alignItems:'center'}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                        <View style={styles.square}>
                                <Text>{item.color_name}</Text>
                                <Text>{item.hex_value}</Text>
                            </View>
                        }
                        keyExtractor={item => item.hex_value}
                    />
                </SafeAreaView>

        </View>
    )
}
