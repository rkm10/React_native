import { useLocalSearchParams } from "expo-router";
import { View, Text } from 'react-native';

export default function UserRoute() {
      const id = useLocalSearchParams().id;
      return (
            <View>
                  <Text>hello{id}</Text>
            </View>
      )
}
