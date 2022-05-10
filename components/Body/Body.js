import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import BatteryInfo from '../BatteryInfo/BatteryInfo';
import { styles } from './Body.style';

export default function Body() {
    const [press, setPress] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Hello there, General Kenoob !</Text>
            <Button
                title="Do you want to see your Battery ?"
                onPress={() => setPress(true)}
            />
            {
                press ? <BatteryInfo /> : null
            }
            <Button
                title="Or hide it ?"
                onPress={() => setPress(false)}
            />
        </View>
    );
}
