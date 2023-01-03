import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = (props: any) => {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = props;

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      style={styles.CardWrapper}
    >
      <Image
        style={styles.CardImage}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.CardTextWrapper}>
        <Text style={styles.CardTitle}>{title}</Text>
        <View style={styles.CardStarWrapper}>
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text style={styles.CardStarTextWrapper}>
            <Text style={styles.CardStarText}>{rating} </Text>• {genre}
          </Text>
        </View>

        <View style={styles.CardLcationWrapper}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={styles.CardLocationText}>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  CardWrapper: {
    backgroundColor: "white",
    marginRight: 12,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  },
  CardImage: {
    height: 144,
    width: 256,
    borderRadius: 2,
  },
  CardTextWrapper: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  CardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 28,
    paddingTop: 8,
  },
  CardStarWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  CardStarTextWrapper: {
    fontSize: 12,
    lineHeight: 16,
    color: "#6B7280",
  },
  CardStarText: {
    color: "#22615E",
  },
  CardLcationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  CardLocationText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#64748B",
  },
});
