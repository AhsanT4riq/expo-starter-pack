import { useThemeStore } from "../themeStore";

// Mock MMKV to avoid React Native Flow type issues
jest.mock("react-native-mmkv", () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    set: jest.fn(),
    getString: jest.fn(() => null),
  })),
}));

// Mock React Native to avoid Flow type issues
jest.mock("react-native", () => {
  const actualModule = jest.requireActual("react-native");
  return {
    ...actualModule,
  };
});

describe("Theme Store", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("initializes with system theme", () => {
    const state = useThemeStore.getState();
    expect(state.theme).toBe("system");
    expect(state.resolvedTheme).toBe("light");
  });

  it("sets theme to dark", () => {
    const { setTheme } = useThemeStore.getState();
    setTheme("dark");

    const state = useThemeStore.getState();
    expect(state.theme).toBe("dark");
  });

  it("sets theme to light", () => {
    const { setTheme } = useThemeStore.getState();
    setTheme("light");

    const state = useThemeStore.getState();
    expect(state.theme).toBe("light");
  });

  it("toggles theme", () => {
    const { setTheme, toggleTheme } = useThemeStore.getState();
    setTheme("light");

    let state = useThemeStore.getState();
    expect(state.resolvedTheme).toBe("light");

    toggleTheme();
    state = useThemeStore.getState();
    expect(state.resolvedTheme).toBe("dark");
  });

  it("initializes theme with system preference", () => {
    const { initializeTheme } = useThemeStore.getState();
    initializeTheme("light");

    const state = useThemeStore.getState();
    expect(state.resolvedTheme).toBe("light");
  });

  it("has toggleTheme method", () => {
    const { toggleTheme } = useThemeStore.getState();
    expect(typeof toggleTheme).toBe("function");
  });

  it("has updateSystemScheme method", () => {
    const { updateSystemScheme } = useThemeStore.getState();
    expect(typeof updateSystemScheme).toBe("function");
  });
});
