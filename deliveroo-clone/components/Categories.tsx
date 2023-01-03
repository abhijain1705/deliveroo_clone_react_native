import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { sushi_Category, burger, pizza, pasta, maggie, choumin, chhole_bathure, panipuri } from '../assets/CategoryImages'

let data = [
  {
    title: "Sushi", imgUrl: sushi_Category
  },
  {
    title: "Burger", imgUrl: burger
  },
  {
    title: "Pizza", imgUrl: pizza
  },
  {
    title: "Pasta", imgUrl: pasta
  },
  {
    title: "Maggie", imgUrl: maggie
  },
  {
    title: "Chaoumin", imgUrl: choumin
  },
  {
    title: "Chhole Bhature", imgUrl: chhole_bathure
  },
  {
    title: "Pani Puri", imgUrl: panipuri
  },
  {
    title: "Sushi", imgUrl: sushi_Category
  },
  {
    title: "Burger", imgUrl: burger
  },
  {
    title: "Pizza", imgUrl: pizza
  },
  {
    title: "Pasta", imgUrl: pasta
  },
  {
    title: "Maggie", imgUrl: maggie
  },
  {
    title: "Chaoumin", imgUrl: choumin
  },
  {
    title: "Chhole Bhature", imgUrl: chhole_bathure
  },
  {
    title: "Pani Puri", imgUrl: panipuri
  },
];

const Categories = () => {


  return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
        }}
        horizontal
        style={styles.categoriesWrapper}
        showsHorizontalScrollIndicator={false}
      >
        {
          data.map((itm, ind) => (
            <CategoryCard key={ind} title={itm.title} imgUrl={itm.imgUrl} />
          ))
        }
      </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoriesWrapper: {
    display: 'flex',
    flex: 1,
  }
})