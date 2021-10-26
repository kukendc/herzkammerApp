/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview';
import StatusBarHeight from './functions-file'



const App: () => Node = () => {
  return (
       <WebView
        source={{ uri: 'https://www.herzkammer.bayern/' }}
        style={{marginTop: Platform.OS === 'ios' ? 40 : 0}}
      />
  );
};



export default App;
