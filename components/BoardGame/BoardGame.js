import { View, Text, Button, FlatList } from 'react-native';
import { styles } from './BoardGame.style';
import { useEffect, useState } from "react";
import { getRandomColor } from "../ApiCalls";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BoardGame() {

    const [state, setState] = useState('');
    
      useEffect(() => {
        getRandomColor().then(res => {
          setState(res)
        })}, []);

    return (
        <View style={styles.board}>
            <View style={styles.top}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Retry</Text>
                </Pressable>
            </View>

            <View>
        <Text>
          test
        </Text>
          <FlatList
          data={state}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View>
            <Text>{item.color_name}</Text>
            <Text>{item.hex_value}</Text>
          </View>
          }
          keyExtractor={item => item.hex_value}
        />
      </View>

            <Text>2048</Text>
            <View style={styles.flatList}>
                <Text>https://reactnative.dev/docs/flatlist</Text>
            </View>
        </View>
    )
}
