import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Routes from './src/routes';
import {defaultTheme} from './src/styles/default.theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#1C1C1C" />
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
});

export default App;
