import React from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Icon,
  List,
  Container,
  Header,
  Left,
  Right,
  ListItem,
  Content,
  Body,
} from "native-base";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Appdrawer />
    </NavigationContainer>
  );
}

const AppDrawerNavigator = createDrawerNavigator();
export const Appdrawer = () => (
  <AppDrawerNavigator.Navigator drawerContent={CustomDrawerNavigator}>
    <AppDrawerNavigator.Screen name='Home' component={HomeScreen} />
  </AppDrawerNavigator.Navigator>
);

const CustomDrawerNavigator = (props) => {
  return (
    <Container>
      <Header style={{ height: 90, backgroundColor: "#3a455c" }}>
        <Left style={{ flex: 1, flexDirection: "row", alignContent: "center" }}>
          <Icon name='person' style={{ color: "#fff" }} />
          <Text
            style={{
              color: "#fff",
              fontStyle: "italic",
              marginLeft: 10,
              fontSize: 22,
            }}
          >
            Hello, Aamir
          </Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          style={{ borderTopColor: "#f0f0f0", borderTopWidth: 0.5 }}
          data={["Home", "Shop by category", "Today's Deal"]}
          keyExtractor={(item, index) => item}
          renderItem={(itemData) => (
            <ListItem noBorder>
              <Text>{itemData.item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopColor: "#f0f0f0", borderTopWidth: 0.5 }}
          data={["Home", "Shop by category", "Today's Deal"]}
          keyExtractor={(item, index) => item}
          renderItem={(itemData) => (
            <ListItem noBorder>
              <Text>{itemData.item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopColor: "#f0f0f0", borderTopWidth: 0.5 }}
          data={["Home", "Shop by category", "Today's Deal"]}
          keyExtractor={(item, index) => item}
          renderItem={(itemData) => (
            <ListItem noBorder>
              <Text>{itemData.item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
