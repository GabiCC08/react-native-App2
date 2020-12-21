import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from "react-native";

const ResultDetail = ({result}) =>{
    return(
        <View>
            <Image
                source={{uri: result.image_url}}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    imageStyle:{
        width: 250,
        height:120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize:16
    }
});

export default ResultDetail;