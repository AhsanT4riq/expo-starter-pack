import React from "react";

import { render, screen } from "@testing-library/react-native";

import Index from "../index";

// Mock useTheme hook and React Native modules
jest.mock("@hooks", () => ({
  useTheme: () => ({
    resolvedTheme: "light",
    toggleTheme: jest.fn(),
  }),
}));

// Mock React Native to avoid Flow type issues
jest.mock("react-native", () => {
  const actualModule = jest.requireActual("react-native");
  return {
    ...actualModule,
  };
});

describe("Index Screen", () => {
  it("renders welcome heading", () => {
    render(<Index />);

    const heading = screen.getByText("Expo Starter Pack");
    expect(heading).toBeTruthy();
  });

  it("renders theme toggle button", () => {
    render(<Index />);

    const toggleButton = screen.getByText(/Switch to/i);
    expect(toggleButton).toBeTruthy();
  });
});
