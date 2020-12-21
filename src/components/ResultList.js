import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) =>{
                    return <ResultDetail result={item}/>;
                }}
            />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        marginLeft: 15,
        marginBottom: 10

    },
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default ResultList;