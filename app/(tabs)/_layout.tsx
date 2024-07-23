import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const iconSize = 25

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="receipt-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="prices"
        options={{
          title: 'Prices',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="cash-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="globe-outline" color={color} size={iconSize} />
          ),
        }}
      />
    </Tabs>
  );
}
