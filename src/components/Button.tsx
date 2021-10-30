import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../common/Colors';
import {FontSize} from '../common/FontSize';

interface Props {
  title: string;
  extraStyle: any;
  onPress: any;
  extraTextStyle: any;
}

const Button: React.FC<Props> = ({
  title,
  extraStyle,
  extraTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, extraStyle]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={[styles.titleText, extraTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(10),
    backgroundColor: Colors.LightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
  },
  titleText: {
    fontSize: FontSize.Fourteen,
    color: Colors.White,
  },
});

export default Button;
