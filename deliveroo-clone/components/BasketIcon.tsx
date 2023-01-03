import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {

    const items = useSelector((state) => selectBasketItems(state));

    const navigation: any = useNavigation();

    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;

    return (
        <View style={styles.basketWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('BasketScreen', {})} style={styles.basketInnerWrapper}>
                <Text style={styles.quantityWrapper}>{items.length}</Text>
                <Text style={styles.viewTextWrapper}>View Basket</Text>
                <Text style={styles.priceWrapper}>${basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon

const styles = StyleSheet.create({
    basketWrapper: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        zIndex: 50
    },
    basketInnerWrapper: {
        backgroundColor: '#00CCBB',
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceWrapper: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },
    quantityWrapper: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#01A296',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    viewTextWrapper: {
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})