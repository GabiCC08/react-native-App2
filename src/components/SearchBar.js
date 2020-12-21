import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{

    return(
        <View style={styles.backgroundStyle}>
            <Feather
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#DEDFE0',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection:'row'
    },
    inputStyle:{
        fontSize: 18,
        flex: 1
    },
    iconStyle:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;