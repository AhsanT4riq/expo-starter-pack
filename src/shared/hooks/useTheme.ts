import { useEffect } from 'react';

import { useColorScheme } from 'nativewind';

import { useThemeStore } from '@store';

export type ThemeMode = 'light' | 'dark' | 'system';

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { savedTheme, saveTheme } = useThemeStore();

  // Restore saved theme preference on mount
  useEffect(() => {
    if (savedTheme) {
      setColorScheme(savedTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set theme and persist to storage
  const setTheme = (mode: ThemeMode) => {
    setColorScheme(mode);
    saveTheme(mode);
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return {
    theme: colorScheme ?? 'light', // Current theme: 'light' | 'dark'
    setTheme, // Set theme preference
    toggleTheme, // Toggle between light and dark
  };
}
