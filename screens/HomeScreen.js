import {
  Container,
  Header,
  Icon,
  Input,
  Left,
  Right,
  Item,
  Content,
  Card,
  CardItem,
} from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";

import { FontAwesome as FAIcon, MaterialIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { color } from "react-native-reanimated";
import RecommendationItem from "../components/RecommendationItem";

const HomeScreen = (props) => {
  return (
    <Container>
      <Header style={styles.mainHeader}>
        <Left style={styles.left}>
          <Icon
            name='md-menu'
            onPress={() => props.navigation.openDrawer()}
            style={styles.menuIcon}
          />
          <FAIcon name='amazon' style={styles.amazonIcon} />
        </Left>
        <Right>
          <Icon name='md-cart' style={styles.cartIcon} />
        </Right>
      </Header>

      <View style={styles.subHeader}>
        <TouchableOpacity>
          <View style={styles.subHeaderLeft}>
            <Text style={styles.filterText}>Shop by</Text>
            <Text style={styles.filterBy}>Category</Text>
          </View>
        </TouchableOpacity>

        <Item style={styles.searchInputItem}>
          <Icon name='search' style={styles.searchIcon} />
          <Input placeholder='Search' />
        </Item>
      </View>

      <Content style={styles.content}>
        <View style={styles.bradecome}>
          <Text>Hello, Aamir Khan</Text>
          <View style={styles.bradecomeRight}>
            <Text>Your Account</Text>
            <MaterialIcons name='keyboard-arrow-right' size={14} />
          </View>
        </View>

        <Swiper
          style={styles.slider}
          dotColor='#fff'
          activeDotColor='#3a455c'
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={4}
        >
          <View style={styles.slide}>
            <Image
              style={styles.sliderImg}
              source={require("../assets/swiper_2.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/swiper_3.jpg")}
              style={styles.sliderImg}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/swiper_2.jpg")}
              style={styles.sliderImg}
            />
          </View>
        </Swiper>

        <Card style={{ marginLeft: 5, marginRight: 5 }}>
          <CardItem
            header
            style={{ borderBottomWidth: 1, borderBottomColor: "#dee0e2" }}
          >
            <Text>Your Recommendation</Text>
          </CardItem>
          <RecommendationItem
            itemName='You can heal your life'
            itemCreator='Louis Hay'
            itemPrice='$10'
            saving='$2.5'
            imageUrl={require("../assets/recommended_1.jpg")}
            rating={4}
          />

          <RecommendationItem
            itemName='Uncharted 4'
            itemCreator='Sony'
            itemPrice='$19.99'
            saving='$17'
            imageUrl={require("../assets/recommended_2.jpg")}
            rating={4.5}
          />

          <RecommendationItem
            itemName='Ea UFC 3'
            itemCreator='EA Sports'
            itemPrice='$44'
            saving='$6'
            imageUrl={require("../assets/recommended_3.jpg")}
            rating={5}
          />

          <RecommendationItem
            itemName='You can heal your life'
            itemCreator='Louis Hay'
            itemPrice='$10'
            saving='$2.5'
            imageUrl={require("../assets/recommended_1.jpg")}
            rating={4}
          />

          <RecommendationItem
            itemName='Uncharted 4'
            itemCreator='Sony'
            itemPrice='$19.99'
            saving='$17'
            imageUrl={require("../assets/recommended_2.jpg")}
            rating={4.5}
          />

          <RecommendationItem
            itemName='Ea UFC 3'
            itemCreator='EA Sports'
            itemPrice='$44'
            saving='$6'
            imageUrl={require("../assets/recommended_3.jpg")}
            rating={5}
          />
        </Card>
      </Content>
      <StatusBar backgroundColor='#3a455c' {...props} />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainHeader: {
    height: 70,
    backgroundColor: "#3a455c",
    borderBottomWidth: 1,
    borderBottomColor: "#757575",
  },
  left: {
    flexDirection: "row",
  },
  menuIcon: {
    color: "#fff",
    marginRight: 15,
  },
  amazonIcon: {
    color: "#fff",
    fontSize: 32,
  },
  cartIcon: {
    color: "#fff",
  },
  subHeader: {
    backgroundColor: "#3a455c",
    position: "absolute",
    left: 0,
    right: 0,
    top: 70,
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  subHeaderLeft: {
    height: 50,
    backgroundColor: "#fff",
    marginRight: 5,
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  filterText: {
    fontSize: 12,
  },
  filterBy: {
    fontWeight: "bold",
  },
  searchInputItem: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 5,
  },
  searchIcon: {
    fontSize: 20,
    paddingTop: 5,
  },
  content: {
    backgroundColor: "#d5d5d6",
    marginTop: 70,
  },
  bradecome: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
  },
  bradecomeRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  slider: {
    height: 90,
  },
  slide: {
    flex: 1,
  },
  sliderImg: {
    flex: 1,
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});
