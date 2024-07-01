import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { top, bottom } from 'react-native-safe-area-context'

export default function CustomDrawerContent(props) {
      const router = useRouter();
      return (
            <View style={{ flex: 1, backgroundColor: "#dde3fe", paddingTop: 20 + top }} >

                  <DrawerContentScrollView {...props}
                        scrollEnabled={false}
                        contentContainerStyle={{
                              backgroundColor: "#dde3fe"
                              , paddingTop: top, paddingBottom: bottom
                        }}>
                        <DrawerItemList {...props} />
                  </DrawerContentScrollView>
                  <View style={{ borderTopColor: "#000000", borderTopWidth: 1, padding: 20, paddingBottom: 20 }}>
                        <DrawerItem label={'Logout'} onPress={() => router.replace('/')} />
                  </View>
            </View>
      );
}