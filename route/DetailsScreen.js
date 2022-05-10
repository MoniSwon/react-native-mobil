import { StyleSheet, View } from 'react-native';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import { StatusBar } from 'expo-status-bar';

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header title='I am the Header' />
            <Body />
            <Footer title='I am the Footer'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
});