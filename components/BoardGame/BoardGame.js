import { View, Text, Button } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect } from "react";
import { getRandomColor } from "../ApiCalls";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BoardGame() {

    async function init() {
        return (await getRandomColor());
    }
    useEffect(() => { init() }, []);

    return (
        <View style={styles.board}>
            <View style={styles.top}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Retry</Text>
                </Pressable>
            </View>

            <Text>2048</Text>
            <View style={styles.flatList}>
                <Text>https://reactnative.dev/docs/flatlist</Text>
            </View>
        </View>
    )
}
