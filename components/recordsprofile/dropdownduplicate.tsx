import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DropdownComponent = () => {
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.text}>All Records </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 90,
    height: 24,
    position: 'absolute', // To apply 'top' and 'left' properties
    top: 0,
    left: 230,
    gap: 0,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00000033',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: 50,
    height: 12,
    gap: 0,
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    textAlign: 'auto',
    color: '#000000CC',
  },
});

export default DropdownComponent;