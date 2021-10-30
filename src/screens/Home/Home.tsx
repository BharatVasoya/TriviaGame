import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {Styles} from './Style';
import Button from '../../components/Button';
import TextInputComponent from '../../components/TextInputComponent';

export interface IItem {
  data: any;
  input: string;
}

const Home = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState('');

  useEffect(() => {
    triviaApi();
  }, []);

  async function triviaApi() {
    let response = await fetch('https://jservice.io/api/random');
    let resp = await response.json();
    resp.map((item: React.SetStateAction<undefined>) => {
      setData(item);
    });
  }

  function submission() {
    if (input === '') {
      Alert.alert('Answer must not be Empty!!');
    } else {
      Alert.alert(
        'Result',
        data.answer === input
          ? 'Your Answer is Right.'
          : 'Your Answer is Wrong.',
        [
          {
            text: 'OK',
            onPress: () => {
              setInput('');
              triviaApi();
            },
          },
        ],
      );
    }
  }

  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView
        style={Styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.container}>
            <Text style={Styles.questionText}>
              {data === undefined ? '' : data.question}?
            </Text>
            <View style={Styles.topContainer}>
              <TextInputComponent
                placeholder={'Fill Your Answer Here..'}
                multiline={true}
                extraStyle={Styles.answerInput}
                keyboardType={'default'}
                value={input}
                onChangeText={(text: React.SetStateAction<string>) =>
                  setInput(text)
                }
              />
            </View>
            <Button
              title={'Submit'}
              onPress={() => submission()}
              extraTextStyle={{}}
              extraStyle={Styles.submitBtn}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
