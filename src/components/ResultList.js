import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ResultsShow', { id: item.id })
                            }
                        >
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
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

export default withNavigation(ResultsList);