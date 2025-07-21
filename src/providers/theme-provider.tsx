import { ConfigProvider } from "antd";
import React from "react";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#471396",
          borderRadius: 7,
          colorBgContainer: "#f0f0f0",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
