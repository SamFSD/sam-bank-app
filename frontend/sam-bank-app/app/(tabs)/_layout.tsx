import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/component/Tabbar';

const TabLayout = () => {
    return (
       <Tabs tabBar={props => <TabBar {...props} />} >   
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="dashboard" options={{ title: "Explore", headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
       </Tabs>
    );
}

export default TabLayout