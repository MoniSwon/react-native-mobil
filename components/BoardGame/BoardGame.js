import { View, Text, Button } from 'react-native';
import { styles } from './BoardGame.style';

export default function BoardGame() {
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
