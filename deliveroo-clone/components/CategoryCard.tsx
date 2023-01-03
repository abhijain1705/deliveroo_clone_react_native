import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = (props: any) => {

    const { title, imgUrl, key } = props;

    return (
        <TouchableOpacity key={key} style={styles.CategoryWrapper}>
            <Image style={styles.CategoryImage} source={{
                uri: imgUrl
            }} />
            <Text style={styles.CategoryText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    CategoryWrapper: {
        position: 'relative',
        marginRight: 8
    },
    CategoryImage: {
        height: 80,
        width: 80,
    },
    CategoryText: {
        position: 'absolute',
        bottom: 4,
        left: 4 ,
        color: 'white',
        fontWeight: 'bold'
    }
})