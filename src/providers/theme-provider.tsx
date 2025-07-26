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
        components: {
          Button: {
            controlHeight: 35,
            boxShadow: "none",
            colorPrimaryBgHover: "#5c2d9b",
            colorPrimaryHover: "#5c2d9b",
            controlOutline: "none",
            colorBorder: "#5c2d9b",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
