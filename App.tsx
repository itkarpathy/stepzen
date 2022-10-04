import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import RootNavigator from './navigator/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </TailwindProvider>
    
    
  );
}

