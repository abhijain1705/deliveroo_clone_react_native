import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const OrderPlaced = () => {

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    }, [])
    

    return (
        <View style={{...styles.placedWrap, height: ScreenHeight, width: ScreenWidth}}>
            <Animatable.Image
                source={require('../../assets/successfully-done.gif')}
                animation='slideInUp'
                iterationCount={1}
                style={styles.animation}
            />
        </View>
    )
}

export default OrderPlaced

const styles = StyleSheet.create({
    placedWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    animation: {
        height: 384,
        width: 384
    },
})