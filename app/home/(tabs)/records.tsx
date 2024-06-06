import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DropdownComponent from '@/components/recordsprofile/dropdown';
import Frame from '@/components/SessionComponent';
const MyComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Records</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>My Record's</Text>
          <DropdownComponent />
        </View>
        <TouchableOpacity>
          <View style={styles.frame}>
            <View style={styles.innerFrame}>
              <Image
                source={require('@/assets/images/Frame.png')} // Provide the correct path to your image
                style={styles.image}
              />
              <Text style={styles.dateText}>April 23rd, 2024</Text>
              <Text style={styles.healthText}>Physical Health</Text>
              <Image
                source={require('@/assets/images/ggnotes.png')} // Provide the correct path to your image
                style={styles.ggnotes}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.pranicHealingText}>Pranic Healing</Text>
              <Text style={styles.sessionText}>Session1</Text>
            </View>
            <Text style={styles.completionText}>Treatment completed on 23rd April</Text>
            <Text style={styles.completionText1}>Download your Prescription</Text>
            <TouchableOpacity style={styles.downloadButton}>
              <View style={styles.downloadContent}>
                <Image
                  source={require('@/assets/images/Download.png')} // Provide the correct path to your image
                  style={styles.downloadImage}
                />
                <Text style={styles.downloadButtonText}>Download</Text>

              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Frame />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#DCF9E5',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerText: {
    width: 74,
    height: 24,
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#400869',
  },
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 24, // Adjusted to add gap between header and content
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 23,
    width: '100%',
  },
  text: {
    //fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    textAlign: 'right',
    color: '#000000',
  },
  frame: {
    width: 320,
    height: 130, // Increased height to accommodate additional text
    marginTop: 18,
    marginLeft: 20,
    gap: 0,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#00000033',
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  innerFrame: {
    width: '100%',
    height: 52,
    gap: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#E4D6FF',
    position: 'relative',
  },
  image: {
    width: 36,
    height: 36,
    top: 8,
    left: 8,
    borderRadius: 3,
    borderWidth: 1.13,
    borderColor: '#FFFFFF',
    position: 'absolute',
  },
  dateText: {
    width: 101,
    height: 17,
    fontFamily: 'LatoRegular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'left',
    color: '#000000',
    position: 'absolute',
    top: 8,
    left: 52,
  },
  healthText: {
    width: 150,
    height: 14,
    fontFamily: 'LatoBold',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.4,
    textAlign: 'left',
    color: '#000000',
    position: 'absolute',
    top: 30,
    left: 52,
  },
  ggnotes: {
    width: 20,
    height: 20,
    top: 16,
    left: 288,
    position: 'absolute',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 8,
  },
  pranicHealingText: {
    width: 135,
    height: 19,
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.1,
    textAlign: 'left',
    color: '#000000',
    marginRight: -40,
    marginLeft: 10,
  },
  sessionText: {
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12,
    textAlign: 'left',
    color: '#000000',
    paddingTop: 4,
  },
  completionText: {
    width: 185,
    height: 14,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.4,
    textAlign: 'right',
    color: '#00000080',
    marginTop: 4,
    marginLeft: -8,
  },
  completionText1: {
    width: 185,
    height: 14,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.4,
    textAlign: 'right',
    color: '#00000080',
    marginTop: 4,
    marginLeft: -20,
  },
  downloadButton: {
    width: 80,
    height: 24,
    position: 'absolute',
    top: 96,
    left: 232,
    padding: 10,
    gap: 10,
    borderRadius: 4,
    backgroundColor: '#8464C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  downloadImage: {
    width: 10,
    height: 9.6,
    top: 1.2,
    left: 0,
  },
  downloadButtonText: {
    marginLeft: 4, // Adjust the space between image and text
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
    textAlign: 'left',
    color: '#FFFFFF',
  },
});

export default MyComponent;
