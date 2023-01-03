import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { styles } from "./Styles";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { ArrowLeftIcon, ChevronRightIcon, StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../../components/DishRow";
import BasketIcon from "../../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../../restaurantSlice";

const Restaurant = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    },
  }: any = useRoute();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    }))
  }, [dispatch])


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Fragment>

      <BasketIcon />

      <ScrollView>
        <View style={styles.ImageWrapper}>
          <Image style={styles.Image} source={{ uri: imgUrl }} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.ArrowBackIcon}>
            <ArrowLeftIcon height={20} width={20} color={'#00BBCC'} />
          </TouchableOpacity>
        </View>

        <View style={styles.TitleWrapper}>
          <View style={styles.TitleInnerWrapper}>
            <Text style={styles.TitleText}>{title}</Text>
            <View style={styles.LocateWrapper}>

              <View style={styles.LocateInnerWrapper}>
                <StarIcon color={'green'} size={22} opacity={0.5} />
                <Text style={styles.GenreText}>
                  <Text style={{ color: '#22C55E' }}>{rating}</Text> • {genre}
                </Text>
              </View>

              <View style={styles.LocateInnerWrapper}>
                <MapPinIcon color={'gray'} size={22} opacity={0.5} />
                <Text style={{ color: '#6B7280' }}>
                  Nearby • {address}
                </Text>
              </View>

            </View>

            <Text style={styles.descriptionText}>{short_description}</Text>
          </View>

          <TouchableOpacity style={styles.allergyWrapper}>
            <QuestionMarkCircleIcon opacity={0.6} size={22} color={'gray'} />
            <Text style={styles.AllergyText}>
              Have a Food allergy?
            </Text>
            <ChevronRightIcon color={'#00CCBB'} />
          </TouchableOpacity>
        </View>

        <View style={styles.dishWrapper}>
          <Text style={styles.MenuColor}>Menu</Text>

          {/* dishes */}
          {dishes.map((itm: any, ind: number) => (
            <DishRow
              key={ind}
              id={itm.id}
              name={itm.name}
              description={itm.description}
              price={itm.price}
              image={itm.image}
            />
          ))}
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Restaurant;
