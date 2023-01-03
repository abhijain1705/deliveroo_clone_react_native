import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { styles } from './Style'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../../restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'

const Basket = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  const [groupedItemsInBasket, setgroupedItemsInBasket] = useState<Array<any>>([]);

  useMemo(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {})

    setgroupedItemsInBasket(groupedItems);
  }, [items]);


  return (
    <SafeAreaView style={styles.BasketWrapper}>
      <View style={styles.BasketInnerWrapper}>
        <View style={styles.BasketInnerInnerWrapper}>
          <View>
            <Text style={styles.basketText}>Basket</Text>
            <Text style={styles.titleText}>{restaurant.title}</Text>
          </View>

          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <XCircleIcon color={'#00CCBB'} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.secondChildWrapper}>
          <Image style={styles.logoImage} source={{
            uri: 'https://links.papareact.com/wru'
          }} />
          <Text style={styles.DeliverText}>Deliver in 30-50 min</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {

            return (
              (
                <View style={styles.itemWrapper} key={key}>
                  <Text>{items.length} x</Text>
                  <Image source={{ uri: items[0]?.image }} style={styles.dishImage} />
                  <Text style={styles.dishName} >{items[0]?.name}</Text>

                  <Text style={styles.priceText} >${items[0]?.price}</Text>

                  <TouchableOpacity>
                    <Text style={styles.removeText} onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))} >Remove</Text>
                  </TouchableOpacity>
                </View>
              )
            )
          })}
        </ScrollView>

        <View style={styles.subTotalWrapper}>
          <View style={styles.innerSubTotalWrapper}>
            <Text >Subtotal</Text>
            <Text style={styles.priceText}>
              ${basketTotal}
            </Text>
          </View>

          <View style={styles.innerSubTotalWrapper}>
            <Text >Delivery Fee</Text>
            <Text style={styles.priceText}>
              ${5.99}
            </Text>
          </View>

          <View style={styles.innerSubTotalWrapper}>
            <Text >Order Total</Text>
            <Text style={styles.priceText}>
              ${basketTotal + 5.99}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} style={styles.OrderButton}>
            <Text style={styles.OrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Basket