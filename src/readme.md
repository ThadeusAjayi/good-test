## 1.
const useMyAPI = onInitialized => {
  useEffect(() => {
    initializeAPI().then(onInitialized);
  }, [onInitialized]); 
};

# fix - added onInitialized as deps to allow invocation if onInitialized changes


## 2.
// @flow

type Item {
    id: string,
    title: string,
  }
  
  type AppProps {
    items: $ReadOnlyArray<Item>,
  }
   
  const App = (props: AppProps) => {
   const renderItem = (item: Item, index: number) => (
     <li key={item.id} onClick={() => console.log(item)}>
       {item.title}
     </li>
   )
   
   return (
     <ul>
       {props.items.map(renderItem)}
     </ul>
   );
  }

  export default App; 
  # fix = 1. use item.id instead of index 2. add export to make the component usable


  ## 3.
  import { useEffect, useState, useCallback } from 'react';
  import { debounce } from 'lodash'
  
  const useDebouncedValue = (value, ms = 100) => {
  const [debounced, setDebounced] = useState(value)
  
  useEffect(() => useCallback(debounce(() => { 
    setDebounced(value)
  }, ms), 
  [ms, setDebounced, value]),[])
  
  return debounced
  }

  # approach - Added usecallback to memoize debounce function to avoid being recreated

  ## 4.
  import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Test = () => {
  const [notify, setNotify] = useState(false)

  const toggleNotify = useCallback(() => {
    setNotify(!notify)
  }, [])

  useEffect(() => {
    window.addEventListener("blur", (e) => {
      toggleNotify()
    })
  })

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
        <Text style={styles.label}>Don't forgot to save the changes Your did</Text>
        <Button style={styles.button} title="Dismiss"onClick={onDismiss} />
        </View>
      )}
      <Text style={styles.label}>Some UI would be here...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  notifiction: {},
  button: {}
})

export default Test