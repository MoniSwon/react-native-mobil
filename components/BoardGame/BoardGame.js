import { View, Text, Button } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect } from "react";
import { getRandomColor } from "../ApiCalls";

export default function BoardGame() {

    async function init() {
        return (await getRandomColor());
    }
    useEffect(()=>{init()}, []);

    return (
        <View style={styles.board}>
            <Text>Pile ou Face ?</Text>
            <View style={styles.button}>
            <Button
                title="Pile"
                /* onPress={() => setPress(true)} */
            />
            <Text>       </Text>
            <Button
                title="Face"
                /* onPress={() => setPress(true)} */
            />
            </View>
            <View style={styles.flatList}>
                <Text>https://reactnative.dev/docs/flatlist</Text>
            </View>
        </View>
    )
}
