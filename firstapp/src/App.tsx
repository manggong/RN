/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const View = Styled.View`background-color: ${Colors.white}`;

const Text = Styled.Text`
margin-top: 8px; 
font-size: 18px; 
font-weight: 400; 
color: ${Colors.dark}`;

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <View>
              <Text>Engine: Hermes</Text>
            </View>
          )}
          <View>
            <View>
              <Text>Step One</Text>
              <Text>
                Edit <Text>App.js</Text> to change this screen and then come
                back to see your edits.
              </Text>
            </View>
            <View>
              <Text>See Your Changes</Text>
              <Text>
                <ReloadInstructions />
              </Text>
            </View>
            <View>
              <Text>Debug</Text>
              <Text>
                <DebugInstructions />
              </Text>
            </View>
            <View>
              <Text>Learn More</Text>
              <Text>Read the docs to discover what to do next:</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
