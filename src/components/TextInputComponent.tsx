import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../common/Colors';

interface Props {
  placeholder: string;
  multiline: boolean;
  onChangeText: any;
  value: string;
  keyboardType: any;
  extraStyle: any;
}

const TextInputComponent: React.FC<Props> = ({
  placeholder,
  multiline,
  onChangeText,
  value,
  keyboardType,
  extraStyle,
}) => {
  return (
    <TextInput
      style={[styles.container, extraStyle]}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={5}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={Colors.Grey}
      keyboardType={keyboardType}
      autoCapitalize={'none'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(75),
    textAlign: 'center',
    borderRadius: scale(5),
    borderColor: Colors.Black,
    borderWidth: scale(1),
    paddingHorizontal: scale(10),
  },
});

export default TextInputComponent;
