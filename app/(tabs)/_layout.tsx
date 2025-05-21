import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
     screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "pink",
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: true,
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "pink",
        tabBarStyle: {
            backgroundColor: "white",
        },
     }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          //headerTitle: "Curriculum Vitae",
          title: "Perfil",
          tabBarIcon: ({focused, color}) => (
          <Ionicons 
            name={focused ? "star-sharp" : "star-outline"} 
            color={color}
            size={24}
            />
          )
          //headerLeft: () => <></>
        }}
      />
      <Tabs.Screen 
        name="profissional" 
        options={{
          //headerTitle: "Sobre",
          title: "Profissional",
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              color={color}
              size={24}
              />
            )
        }}
      />
    </Tabs>
  );
}
