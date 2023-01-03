import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useState } from 'react';
import { MinusCircleIcon } from 'react-native-heroicons/solid';
import { PlusCircleIcon } from 'react-native-heroicons/solid';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../basketSlice';
import { useDispatch, useSelector } from 'react-redux';


const DishRow = (props: any) => {

  const { id, name, description, price, image } = props;

  const [isPressed, setisPressed] = useState(true);

  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  }

  const items = useSelector((state: any) => selectBasketItemsWithId(state, id));

  const removeItemFromBasket = () => {
    if (!(items.length > 0)) return;

    dispatch(removeFromBasket({ id }))
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={() => setisPressed(!isPressed)} style={isPressed ? styles.dishAfterPressedWrapper : styles.dishWrapper}>
        <View style={styles.dishInnerWrapper}>
          <View style={styles.dishTextWrapper}>
            <Text style={styles.Name} >{name}</Text>
            <Text style={styles.Description}>{description}</Text>
            <Text style={styles.Price}>
              ${price}
            </Text>
          </View>

          <View>
            <Image
              style={styles.dishImage}
              source={{
                uri: image
              }} />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.boxWrapper}>
          <View style={styles.boxInnerWrapper}>
            <TouchableOpacity disabled={items.length === 0} onPress={removeItemFromBasket}>
              <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
            </TouchableOpacity>

            <Text>{items?.length}</Text>

            <TouchableOpacity onPress={() => addItemsToBasket()}>
              <PlusCircleIcon color={'#00CCBB'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Fragment>
  )
}

export default DishRow

const styles = StyleSheet.create({
  dishAfterPressedWrapper: {
    backgroundColor: 'white',
    padding: 16,
  },
  dishWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 16,
    borderColor: '#E5E7EB',
  },
  dishInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 8
  },
  dishTextWrapper: {
    flex: 1,
    paddingRight: 8
  },
  Name: {
    fontSize: 24,
    marginBottom: 4
  },
  Description: {
    color: '#9CA3AF'
  },
  Price: {
    color: '#9CA3AF',
    marginTop: 8
  },
  dishImage: {
    height: 80,
    width: 80,
    backgroundColor: 'gray',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3F3F4'
  },
  boxWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 16
  },
  boxInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    paddingBottom: 12
  }
})