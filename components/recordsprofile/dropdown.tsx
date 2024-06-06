import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

const DropdownComponent = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('All Records');
  
  const items = [
    'All Records',
    'Record 1',
    'Record 2',
    
  ];

  const handleSelectItem = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setDropdownVisible(true)} style={styles.dropdownButton}>
        <Text style={styles.text}>{selectedItem}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={dropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setDropdownVisible(false)}
          >
            <View style={styles.modalContainer}>
              {items.map((item) => (
                <TouchableOpacity key={item} onPress={() => handleSelectItem(item)} style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
    width: 90,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00000033',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    textAlign: 'center',
    color: '#000000CC',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00000033',
    padding: 10,
  },
  dropdownItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10, // Adjusted padding as per your requirement
    paddingHorizontal: 0,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    width: 100,
    height: 10,
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
    textAlign: 'center', // Center the text horizontally
    color: '#000000CC',
  },
});

export default DropdownComponent;

