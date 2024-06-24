"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme/customTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  const themeExtended = theme();
  return <ChakraProvider theme={themeExtended}>{children}</ChakraProvider>;
}
