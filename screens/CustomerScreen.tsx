import React,{useLayoutEffect, useState} from 'react';
import {ScrollView, Image  } from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Input } from '@rneui/base';


export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>

const BASE_URI = 'https://images.unsplash.com/photo-1609522886437-27a610fbe81d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'

const CustomerScreen = ()=> {
	const tw = useTailwind();
	const navigation = useNavigation<CustomerScreenNavigationProp>()
	const[input, setInput ] = useState<string>('')

	useLayoutEffect(()=>{
		navigation.setOptions({
			headerShown: false
		})
	},[])
 
	return (
		<ScrollView style={{ backgroundColor: "#59C1CC"}}>
			<Image
			style={{ width: '100%', height: 200}}
			source={{uri: (BASE_URI)}}
			/>
			<Input 
			placeholder="Search" 
			value={input} 
			onChangeText={setInput}
			containerStyle={{ backgroundColor: 'white', paddingTop: 10}}
			/>
	
		</ScrollView>
	)
}

export default CustomerScreen;