import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const icon =  {
      index: (props: any) =>  <Feather name='home' size={24} {...props} />,
      dashboard: (props: any) =>  <Feather name='campass' size={24} {...props} />,
      profile: (props: any) =>  <Feather name='user' size={24} {...props} />
    }
    
    return (

    <View style={ styles.TabBar }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItems}
          >
            {icon[route.name]({
                color : isFocused ? '#673ab7' : '#222',
            })}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 500,
    },
    shadowOpacity: 0.1,
  },
  tabbarItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

});
