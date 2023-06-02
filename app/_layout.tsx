import React from "react";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "index",
          title: "BEDMAN THE APP",
        }}
      />
      <Drawer.Screen
      name="telaC" 
      options={{
        drawerLabel: "home",
        title: "BEDMAN THE APP",
      }}
      />
      <Drawer.Screen
      name="telaA" 
      options={{
        drawerLabel: "",
        title: "BEDMAN THE APP",
      }}
    />
    <Drawer.Screen
      name="telaB" 
      options={{
        drawerLabel: "",
        title: "BEDMAN THE APP",
      }}
    />
    </Drawer>
  );
}