import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Test = () => {
  const [notify, setNotify] = useState(false);

  const toggleNotify = useCallback(() => {
    setNotify(!notify);
  }, []);

  useEffect(() => {
    window.addEventListener('blur', e => {
      toggleNotify();
    });
  });

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
          <Text style={styles.label}>
            Don't forgot to save the changes Your did
          </Text>
          <Button style={styles.button} title="Dismiss" onClick={onDismiss} />
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
