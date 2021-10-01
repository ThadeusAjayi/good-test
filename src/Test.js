import React, {useState, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Text, View, Button, Platform, AppState} from 'react-native';

const Test = () => {
  const [notify, setNotify] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const toggleNotify = useCallback(() => {
    setNotify(!notify);
  }, []);

  const listener = () => toggleNotify();

  useEffect(() => {
    if (Platform.OS == 'web') {
      window.addEventListener('blur', listener);
    } else {
      const subscription = AppState.addEventListener('change', nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground!');
        } else toggleNotify();

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
      });

      return () => {
        subscription.remove();
      };
    }
  }, [window.addEventListener]);

  const onDismiss = () => setNotify(false);

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
          <Text style={styles.label}>
            Don't forgot to save the changes Your did
          </Text>
          <Button
            style={styles.button}
            title="Dismiss"
            onPress={() => onDismiss()}
          />
        </View>
      )}
      <Text style={styles.label}>Some UI would be here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  notifiction: {},
  button: {},
});

export default Test;
