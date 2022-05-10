import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to my magnificient app"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Wanna play ?"
                onPress={() => navigation.navigate('Game')}
            />
        </View>
    );
}