import {StyleSheet} from 'react-native';

import {scale} from 'react-native-size-matters';
import {Colors} from '../../common/Colors';
import {FontSize} from '../../common/FontSize';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(10),
    backgroundColor: Colors.White,
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: scale(10),
  },
  questionText: {
    fontSize: FontSize.Fourteen,
    textAlign: 'center',
    marginTop: scale(25),
  },
  answerInput: {
    marginTop: scale(20),
  },
  submitBtn: {
    margin: scale(20),
  },
});
