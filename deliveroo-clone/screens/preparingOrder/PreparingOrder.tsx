import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './Style'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {

    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Delivery");
      }, 5000);
    }, [])
    

    return (
        <SafeAreaView style={styles.animateWrapper}>
            <Animatable.Image
              source={require('../../assets/delivery-boy.gif')}
              animation='slideInUp'
              iterationCount={1}
              style={styles.animation}
             />

            <Animatable.Text
               animation={'slideInUp'}
               iterationCount={1}
               style={styles.animationText}
             >Waiting for Restaurant to accept your order!</Animatable.Text>

             <Progress.Circle color='white' size={60} indeterminate={true} />
        </SafeAreaView>
    )
}

export default PreparingOrder;