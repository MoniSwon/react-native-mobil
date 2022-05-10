import { Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { styles } from './Header.style';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
            
        </View>
    );
}
