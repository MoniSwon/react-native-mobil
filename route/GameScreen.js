import { View } from 'react-native';
import BoardGame from '../components/BoardGame/BoardGame';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function GameScreen() {
  return (
    <View>
      <Header title="❌ Tic Tac Toe ⭕"/>
      <BoardGame/>
      <Footer title='(You can do it.)'/>
    </View>
  )
}