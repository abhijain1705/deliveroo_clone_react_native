import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { kfc, pizza_hut, dominoz_pizza, mac_donalds, wow_momoz, chayoos, sushi, burger_king, burger_farm } from "../assets/FeatureImages";
import {
  sushi_Category,
  burger,
  pizza,
  pasta,
  maggie,
  choumin,
  chhole_bathure,
  panipuri,
} from '../assets/CategoryImages';
import { useRef } from "react";

const Feature = (props: any) => {
  const { title, description, _id } = props;

  let dishesAr = [
    {
      id: 1,
      name: 'sushi',
      price: 22,
      description: 'sushi is a famous japanesse dish',
      image: sushi_Category
    },
    {
      id: 2,
      name: 'burger',
      price: 12,
      description: 'burger is a famous american dish',
      image: burger
    },
    {
      id: 3,
      name: 'pizza',
      price: 22,
      description: 'pizza is a famous american dish',
      image: pizza
    },
    {
      id: 4,
      name: 'pasta',
      price: 22,
      description: 'pasta is a famous etalian dish',
      image: pasta
    },
    {
      id: 5,
      name: 'maggie',
      price: 22,
      description: 'maggie is a famous 2 min dish',
      image: maggie
    },
    {
      id: 6,
      name: 'choumin',
      price: 22,
      description: 'choumin is a famous chineese dish',
      image: choumin
    },
    {
      id: 7,
      name: 'chhole bathure',
      price: 22,
      description: 'chhole bathure is a famous Indian dish',
      image: chhole_bathure
    },
    {
      id: 8,
      name: 'panipuri',
      price: 22,
      description: 'panipuri is a famous Indian dish',
      image: panipuri
    }
  ];

  let screenWidth = Dimensions.get('window').width;

  let screenRef: any = useRef(null);
  let num = 1;

  return (
    <View style={{ paddingBottom: _id == 'offers' ? 150 : 0 }}>
      <View style={styles.FeatureWrapper}>
        <Text style={styles.FeatureText}>{title}</Text>
        <ArrowRightIcon onPress={() => {screenRef.current?.scrollTo({ x: screenWidth * num }); num++}} color={"#00CCBB"} />
      </View>

      <Text style={styles.FeatureDescription}>{description}</Text>

      <ScrollView
        horizontal
        ref={screenRef}
        style={styles.FeatureScrollWrapper}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}

      >
        <RestaurantCard
          id={_id === 'featured' ? 100 : _id === 'discounts' ? 101 : 102}
          imgUrl={
            _id === "featured"
              ? kfc
              : _id === "discounts"
                ? pizza_hut
                : dominoz_pizza
          }
          title={
            _id === "featured"
              ? "KFC"
              : _id === "discounts"
                ? "Pizza Hut"
                : "Dominoz Pizza"
          }
          rating={4.2}
          genre={"America"}
          address={"123 Main St."}
          short_description={
            _id === "featured"
              ? "KFC hot chickens"
              : _id === "discounts"
                ? "Pizza Hut pizzas"
                : "Dominoz Pizza"
          }
          dishes={dishesAr}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={_id === 'featured' ? 103 : _id === 'discounts' ? 104 : 105}
          imgUrl={
            _id === "featured"
              ? mac_donalds
              : _id === "discounts"
                ? wow_momoz
                : chayoos
          }
          title={
            _id === "featured"
              ? "Mac Donalds"
              : _id === "discounts"
                ? "Wow Momoz"
                : "Chaayos"
          }
          rating={3.9}
          genre={"America"}
          address={"03 Main St."}
          short_description={
            _id === "featured"
              ? "Mac Donalds Restuarants"
              : _id === "discounts"
                ? "Wow Momoz momos"
                : "Dominoz Pizza pizza"
          }
          dishes={dishesAr}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={_id === 'featured' ? 106 : _id === 'discounts' ? 107 : 108}
          imgUrl={
            _id === "featured"
              ? sushi
              : _id === "discounts"
                ? burger_king
                : burger_farm
          }
          title={
            _id === "featured"
              ? "Yo Sushi!"
              : _id === "discounts"
                ? "Burger King"
                : "Burger Farm"
          }
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St."}
          short_description={"This is a Test Description"}
          dishes={dishesAr}
          long={20}
          lat={0}
        />
        {/*  */}
        <RestaurantCard
          id={_id === 'featured' ? 100 : _id === 'discounts' ? 101 : 102}
          imgUrl={
            _id === "featured"
              ? kfc
              : _id === "discounts"
                ? pizza_hut
                : dominoz_pizza
          }
          title={
            _id === "featured"
              ? "KFC"
              : _id === "discounts"
                ? "Pizza Hut"
                : "Dominoz Pizza"
          }
          rating={4.2}
          genre={"America"}
          address={"123 Main St."}
          short_description={
            _id === "featured"
              ? "KFC hot chickens"
              : _id === "discounts"
                ? "Pizza Hut pizzas"
                : "Dominoz Pizza"
          }
          dishes={dishesAr}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={_id === 'featured' ? 103 : _id === 'discounts' ? 104 : 105}
          imgUrl={
            _id === "featured"
              ? mac_donalds
              : _id === "discounts"
                ? wow_momoz
                : chayoos
          }
          title={
            _id === "featured"
              ? "Mac Donalds"
              : _id === "discounts"
                ? "Wow Momoz"
                : "Chaayos"
          }
          rating={3.9}
          genre={"America"}
          address={"03 Main St."}
          short_description={
            _id === "featured"
              ? "Mac Donalds Restuarants"
              : _id === "discounts"
                ? "Wow Momoz momos"
                : "Dominoz Pizza pizza"
          }
          dishes={dishesAr}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={_id === 'featured' ? 106 : _id === 'discounts' ? 107 : 108}
          imgUrl={
            _id === "featured"
              ? sushi
              : _id === "discounts"
                ? burger_king
                : burger_farm
          }
          title={
            _id === "featured"
              ? "Yo Sushi!"
              : _id === "discounts"
                ? "Burger King"
                : "Burger Farm"
          }
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St."}
          short_description={"This is a Test Description"}
          dishes={dishesAr}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  FeatureWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  FeatureText: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 28,
  },
  FeatureDescription: {
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 16,
    color: "#6B7280",
  },
  FeatureScrollWrapper: {
    paddingTop: 16,
  },
});
