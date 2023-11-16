import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    backgroundColor: 'white',
  },
  pagesContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: hp('4%'),
  },
  allProductsContainer: {
    paddingTop: hp('9%'),
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('5%'),
    backgroundColor: 'white',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: hp('7.8%'),
    zIndex: 1,
    width: wp('100%'),
    paddingHorizontal: wp('4%'),
  },
  textInputContainer: {
    marginTop: hp('2%'),
    backgroundColor: COLORS.tertiary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    alignItems: 'center',
    paddingRight: wp('3%'),
    borderRadius: wp('2%'),
  },
  title: {
    color: COLORS.titleText,
    fontWeight: 'bold',
    fontSize: hp('2%'),
    marginLeft: wp('15%'),
  },
  subtitle: {
    color: COLORS.subtitleText,
    fontSize: hp('2%'),
    marginVertical: hp('2%'),
  },
  cardSVGContainer: {
    borderRadius: hp('1.5%'),
    padding: hp('3%'),
  },
  cardCategoriesDescription: {
    marginVertical: hp('1.5%'),
    color: COLORS.subtitleText,
    fontSize: hp('1.8%'),
  },
  containerBoxWithShadow: {
    width: wp('43%'),
    marginRight: wp('3%'),
    paddingLeft: wp('1%'),
  },
  boxWithShadow: {
    width: wp('43%'),
    height: hp('30%'),
    marginVertical: wp('1%'),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: wp('2%'),
    paddingVertical: hp('2%'),
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageProduct: {
    width: wp('38%'),
    height: hp('18%'),
    resizeMode: 'contain',
  },
  bannerContainer: {
    width: wp('85%'),
    height: 'auto',
    marginBottom: hp('2%'),
    marginTop: hp('5%'),
    borderRadius: wp('2%'),
  },
  bannerBlue: {
    width: wp('55%'),
    height: hp('25%'),
    borderRadius: wp('4%'),
    backgroundColor: COLORS.titleText,
    borderTopRightRadius: wp('22%'),
    borderBottomRightRadius: hp('12%'),
    marginRight: wp('5%'),
  },
  landingBannerContainer: {
    marginRight: wp('5%'),
  },
  bannerRed: {
    width: wp('85%'),
    height: hp('25%'),
    backgroundColor: '#FE4B43',
    position: 'absolute',
    zIndex: -1,
    borderRadius: wp('4%'),
  },
  cardCategoriesContainer: {
    marginRight: wp('4%'),
    alignItems: 'center',
  },
  textBanner: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    marginTop: 70,
  },
  textInputText: {
    color: COLORS.titleText,
    marginLeft: wp('2%'),
  },
  titleCardProduct: {
    fontSize: hp('1.5%'),
    fontWeight: '600',
    textTransform: 'uppercase',
    color: COLORS.subtitleText,
  },
  boxRating: {
    flexDirection: 'row',
    marginTop: hp('1.5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  priceCardProduct: {
    color: COLORS.priceText,
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
  },
  textReviews: {
    color: COLORS.subtitleText,
    fontSize: hp('1.8%'),
  },
});
