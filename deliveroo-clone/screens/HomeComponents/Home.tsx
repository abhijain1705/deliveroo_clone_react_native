import { Text, View, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import Feature from "../../components/Feature";
import FlashMessage, {showMessage} from "react-native-flash-message";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const flash = useRef<any>(null);


  useEffect(() => {
    flash.current.showMessage({
      message: 'hello world',
      duration: 2000,
    })
  }, [])
  


  return (
    <SafeAreaView style={styles.Home}>

      <View>
        {/* header */}
        <View style={styles.Header}>
          <Image style={styles.HeaderImage} source={{
            uri: 'https://links.papareact.com/wru'
          }} />

          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText1}>Deliver Now!</Text>
            <Text style={styles.HeaderText2}>Current Location
              <ChevronDownIcon size={20} color={'#00CCBB'} />
            </Text>
          </View>

          <UserIcon size={35} color={'#00CCBB'} />
        </View>

        {/* search */}
        <View style={styles.Search}>
          <View style={styles.SearchContainer}>
            <MagnifyingGlassIcon size={20} color={'#00CCBB'} />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color={'#00CCBB'} />
        </View>
      </View>

      {/* body */}
      <ScrollView style={styles.Body}>
        {/* categories */}
        <Categories />
        {/* featured row */}
        <Feature title="Feature" description="Paid placements from our partners" _id="featured" />
        {/* Tasty discounts */}
        <Feature title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts!" _id="discounts" />
        {/* offers for you */}
        <Feature title="Offers near you!" description="Why not support your local restaurent tonight!" _id="offers" />
      </ScrollView>
      <FlashMessage ref={flash} />
    </SafeAreaView>
  );
};

export default Home;
