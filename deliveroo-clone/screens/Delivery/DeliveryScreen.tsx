import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react';
import { styles } from './Style';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../../restaurantSlice';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("ThankYou");
        }, 5000);
    }, [])


    return (
        <View style={styles.deliveryWrapper}>
            <SafeAreaView style={styles.deliveryInnerWrapper}>
                <View style={styles.orderHelpInnerWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color={'white'} size={30} />
                    </TouchableOpacity>
                    <Text>Order Help</Text>
                </View>

                <View style={styles.ProgressWrapper}>
                    <View style={styles.ProgressInnerWrapper}>
                        <View>
                            <Text style={styles.arrivalText}>Estimated Arrival</Text>
                            <Text style={styles.timeText}>45-55 Minutes</Text>
                        </View>
                        <Image style={styles.imageWrapper} source={{
                            uri: 'https://links.papareact.com/fls'
                        }} />
                    </View>

                    <Progress.Bar height={30} color='#00CCBB' indeterminate={true} />

                    <Text style={styles.preparingText}>
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: 20.5937,
                    longitude: 78.9629,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                style={styles.mapView}
                mapType='mutedStandard'
            ></MapView>
        </View>
    )
}

export default DeliveryScreen