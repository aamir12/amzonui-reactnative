import React from "react";
import { Card, CardItem, Right } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import StarRating from "react-native-star-rating";
const RecommendationItem = (props) => {
  return (
    <CardItem>
      <View>
        <Image source={props.imageUrl} style={{ height: 90, width: 60 }} />
      </View>
      <Right
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: 90,
          paddingHorizontal: 20,
        }}
      >
        <Text>{props.itemName}</Text>
        <Text style={{ color: "grey", fontSize: 11 }}>{props.itemCreator}</Text>
        <Text style={{ color: "#c4402f", fontWeight: "bold", fontSize: 14 }}>
          {props.itemPrice}
        </Text>
        <Text style={{ fontSize: 11, color: "grey" }}>
          You Save <Text style={{ fontSize: 14 }}>{props.saving}</Text>
        </Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={props.rating}
          fullStarColor='orange'
          emptyStarColor='grey'
          starSize={12}
        />
      </Right>
    </CardItem>
  );
};
const styles = StyleSheet.create({});

export default RecommendationItem;
