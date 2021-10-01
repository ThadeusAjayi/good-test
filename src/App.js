import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  Image,
} from 'react-native';
import fonts from './assets/fonts/fonts';
import colors from './colors';

const isNative = Platform.OS !== 'web';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const CustomItem = ({index, label}) => {
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.listItem}>
        <View style={styles.itemIndex}>
          <Text style={styles.index}>{index}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const values = [
    'bike',
    'dark',
    'jumping',
    'cave',
    'rooms',
    'socks',
    'dove',
    'orange',
    'bottle',
    'blanket',
    'salt',
    'bug',
  ];

  return (
    <SafeAreaView style={styles.scrollView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.headWrap}>
            <TouchableOpacity style={styles.back}>
              <Image
                defaultSource={'/image/left_arrow.png'}
                source={require('./assets/left_arrow.png')}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <Text style={styles.title}>BACKUP MY WALLET</Text>
          </View>
          <Text style={styles.head}>please save your 12-word pass phrase</Text>
          <Text style={styles.subHead}>
            {
              'and keep it in a secure location\nso you can recover your wallet anytime'
            }
          </Text>
          <View style={styles.itemWrap}>
            {values.map((item, index) => (
              <CustomItem key={index + item} index={index + 1} label={item} />
            ))}
          </View>

          <Text style={styles.copy}>Copy all to clipboard</Text>
          <Text style={styles.email}>Send me a backup email</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.btn}>
            <Text style={styles.btnText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.Bold,
    fontWeight: '700',
    fontSize: PixelRatio.getFontScale() * 20,
  },
  headWrap: {
    backgroundColor: colors.blue,
    width: isNative ? '100%' : '50%',
    height: Dimensions.get('window').height / 12,
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 20,
    paddingRight: 8,
    paddingVertical: 8,
    zIndex: 2,
    // backgroundColor: 'green',
  },
  backImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  head: {
    color: colors.text,
    textAlign: 'center',
    fontFamily: fonts.Bold,
    fontWeight: '700',
    fontSize: PixelRatio.getFontScale() * 20,
    marginTop: 18,
  },
  subHead: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    color: colors.text,
    textAlign: 'center',
    fontSize: PixelRatio.getFontScale() * 20,
  },
  itemWrap: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 25,
    paddingHorizontal: '10%',
  },
  listItem: {
    flexDirection: 'row',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: colors.blue,
    overflow: 'hidden',
    width: '40%',
    height: 40,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemIndex: {
    backgroundColor: colors.blue,
    width: '20%',
    justifyContent: 'center',
  },
  index: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    color: colors.white,
    overflow: 'hidden',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: PixelRatio.getFontScale() * 20,
  },
  label: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    marginLeft: '5%',
    color: colors.darkerText,
    fontSize: PixelRatio.getFontScale() * 20,
  },
  copy: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    color: colors.blue,
    marginTop: 30,
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    fontSize: PixelRatio.getFontScale() * 20,
  },
  email: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    color: colors.blue,
    marginTop: 30,
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    fontSize: PixelRatio.getFontScale() * 20,
  },
  btn: {
    width: isNative ? '80%' : '20%',
    backgroundColor: colors.blue,
    borderRadius: 80,
    alignItems: 'center',
    marginTop: 40,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.Bold,
    fontWeight: '700',
    fontSize: PixelRatio.getFontScale() * 20,
    paddingVertical: 20,
  },
});
export default App;
