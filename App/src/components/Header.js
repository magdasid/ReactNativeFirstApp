import React from 'react';
import { Text, StyleSheet, View, FlexBox } from 'react-native';

//header is a functional component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};
//styles
var styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.4
    },
    textStyle: {
        fontSize: 20
    },
});

//export component
export default Header;