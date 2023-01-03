import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import React, { useState } from 'react';
import { CheckCircleIcon, MapPinIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../basketSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomSheet from "@irfanwani/react-native-bottom-sheet"
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const ThankYou = () => {
    const now = new Date();

    const basketTotal = useSelector(selectBasketTotal);

    const [showProgress, setshowProgress] = useState(false);

    const navigation = useNavigation();

    function handleShowProgress() {
        setshowProgress(true);
        setTimeout(() => {
            setshowProgress(false);
            navigation.navigate('orderPlaced');
        }, 2000);
    }

    const [visible, setVisible] = useState(true);
    const showsheet = () => {
        setVisible(true);
    };


    return (
        <SafeAreaView>
            <View style={styles.ThankWrapper}>
                <View style={styles.ThankInnerWrapper}>
                    <CheckCircleIcon style={styles.IconCheck} size={50} color="white" />
                    <Text style={styles.HiText}>Hi, User</Text>
                    <Text style={styles.BasketText}>
                        Your Basket smells delicious, make payment so we can deliver it fast
                        to you
                    </Text>
                </View>
            </View>

            <View style={styles.DetailWrapper}>
                <Text style={styles.OrderText}>Order Details:</Text>
                <Text style={styles.DateText}>
                    Date of Purchase {now.toDateString()} Amount to paid ${basketTotal}
                </Text>
                <Text style={styles.ThankyouText}>
                    We hope you enjoyed the experience of using our app. Thank you for
                    support. your big contribution is big deal to our company
                </Text>
                <View style={styles.invoiceWrap}>
                    <Text style={styles.invoiceText}>Happy invoicing !</Text>
                    <TouchableOpacity onPress={() => showsheet(true)} style={{ backgroundColor: 'black', borderRadius: 30, padding: 18 }}>
                        <Text style={{ color: 'white' }}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.founderNameText}>Abhi Jain</Text>
                <Text style={styles.posText}>co-founder Deliverio</Text>

                <View style={styles.followWrapper}>
                    <Text>Follow us on</Text>
                    <View style={styles.IconWrapper}>
                        <Icon name="facebook" size={20} style={styles.facebook} />
                        <Icon name="instagram" size={20} style={styles.facebook} />
                        <Icon name="twitter" size={20} style={styles.facebook} />
                    </View>
                </View>
            </View>

            <BottomSheet
                visible={visible}
                style={styles.bottomSheetWrapper}
                onClose={() => {
                    setVisible(false);
                }}
            >
                <ScrollView style={styles.bottomChildWrapper}>
                    <View style={styles.addressWrapper}>
                        <Text style={styles.addresText}>Address</Text>
                        <Text style={styles.addresText}>Change</Text>
                    </View>

                    <View style={styles.locationWrapper}>
                        <MapPinIcon color={'#00CCBB'} size={30} />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Home</Text>
                            <Text style={{ color: '#4B5563', maxWidth: 150 }} >34, Combo Road, Nagarkot</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.locationWrapper, borderColor: '#E5E7EB' }}>
                        <Image source={
                            require('../../assets/card.png')
                        } />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Mastercard</Text>
                            <Text style={{ color: '#4B5563', maxWidth: 150 }} >****4532</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.locationWrapper, borderColor: '#E5E7EB' }}>
                        <View style={styles.priceChildsWrapp}>
                            <Text style={{ fontWeight: 'bold' }}>Free</Text>
                            <Text style={{ color: '#4B5563', maxWidth: 150 }}>Delivery</Text>
                        </View>
                        <View style={styles.priceChildsWrapp}>
                            <Text style={{ fontWeight: 'bold' }}>${basketTotal}</Text>
                            <Text style={{ color: '#4B5563', maxWidth: 150 }} >Total</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={handleShowProgress} style={styles.payWrapper}>
                        {
                            showProgress ? <Progress.Circle color='white' size={20} indeterminate={true} /> : <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Pay Now</Text>
                        }
                    </TouchableOpacity>
                </ScrollView>
            </BottomSheet>
        </SafeAreaView>
    );
};

export default ThankYou;
