import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Dashboard from '.';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Configure other screen options if needed
      }}
    >
      <Tabs.Screen
        name="index" 
       
        options={{
          header: () => <Header />,
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <><View
              style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? Colors.black : Colors.grey,
              }}
            >
              <SimpleLineIcons name="pie-chart" size={18} color={color} />
            </View></>
          ),
          headerRight: () => (
            <Link href="/login" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View
              style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? Colors.black : Colors.grey,
              }}
            >
             <AntDesign name="swap" size={18} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
