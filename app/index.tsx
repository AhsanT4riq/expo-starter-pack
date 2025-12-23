import React from 'react';

import { Pressable, ScrollView, View } from 'react-native';

import { FadeIn, SlideInLeft, SlideInRight } from 'react-native-reanimated';

import { useTheme } from '@hooks';
import { Text, AnimatedText } from '@ui';

export default function Index() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="bg-background"
      contentContainerClassName="gap-4 pt-safe p-4 justify-center"
    >
      <View>
        <Text variant="h1" className="text-center text-content">
          Expo Starter Pack
        </Text>
        {/* creator tag */}
        <View className="mt-2 self-center rounded-full bg-accent px-3 py-1">
          <Text variant="body-sm" className="text-white">
            Created by Ahsan Tariq
          </Text>
        </View>
        <Pressable onPress={toggleTheme} className="mt-4 self-center">
          <Text variant="body" className="text-primary">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Text>
        </Pressable>
      </View>
      <AnimatedText variant="h2" entering={FadeIn.duration(500)}>
        App Features:
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(500)}>
        ✨ <Text className="font-manrope-semibold"> React Native 0.81</Text> +{' '}
        <Text className="font-manrope-semibold"> Expo 54</Text> +{' '}
        <Text className="font-manrope-semibold"> React 19</Text>
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(700)}>
        🎨 <Text className="font-manrope-semibold"> NativeWind 4</Text> - Tailwind CSS for React
        Native
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(900)}>
        🌓 <Text className="font-manrope-semibold"> Dark Mode Support</Text> - Built-in theme system
        with CSS variables
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(1100)}>
        📝 <Text className="font-manrope-semibold"> Typography System</Text> - Custom fonts with
        semantic variants
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(1300)}>
        🗂️ <Text className="font-manrope-semibold"> Expo Router 6</Text> - File-based routing (like
        Next.js)
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(1500)}>
        ⚡ <Text className="font-manrope-semibold"> Zustand</Text> - Lightweight state management
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(1700)}>
        💾 <Text className="font-manrope-semibold"> MMKV</Text> - Fast encrypted local storage
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(1900)}>
        🧪 <Text className="font-manrope-semibold"> Jest + Testing Library</Text> - Complete testing
        setup
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(2100)}>
        📐 <Text className="font-manrope-semibold"> TypeScript</Text> - Full type safety
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(2300)}>
        🔍 <Text className="font-manrope-semibold"> ESLint + Prettier</Text> - Code quality and
        formatting
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInLeft.duration(2500)}>
        🎯 <Text className="font-manrope-semibold"> Path Aliases</Text> - Clean imports (@ui,
        @hooks, @store, etc.)
      </AnimatedText>
      <AnimatedText variant="body-sm" entering={SlideInRight.duration(2700)}>
        📱 <Text className="font-manrope-semibold"> Multi-platform</Text> - iOS, Android, and Web
        ready
      </AnimatedText>
    </ScrollView>
  );
}
