import { Text, View } from 'react-native';
import { styles } from './Footer.style';

export default function Footer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}
