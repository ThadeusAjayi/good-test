# Task 1

1. I made all the components and text responsive for web with a maximum percentage of the screen in mind. For list items I used about 60% of the screen width to layout each of the items side by side with a flexwrap
2. I used PixelRatio's for mobile and em for web responsiveness

# Hooks questions
## 1.
const useMyAPI = onInitialized => {
  useEffect(() => {
    initializeAPI().then(onInitialized);
  }, [onInitialized]); 
};

### fix - added onInitialized as deps to allow invocation if onInitialized changes


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
  ### fix = 1. use item.id instead of index 2. add export to make the component usable

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
  ### approach - Added usecallback to memoize debounce function to avoid being recreated

  ## 4. Bugfix
  ### Answers 
  1. 
    1. Won't work on all platforms
    2. onDismiss function not defined in code and onClick is not available on react-native Button changed to onPress.
    3. Array of dependencies, add window listener and native listener
    4. Remove listener when window is blur, abstract listener function
  2. Check Test.js file