import React from 'react';
import { View, Text,SafeAreaView  } from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

const OrdersScreen = ()=> {
	const tw = useTailwind();
 
	return (
		<SafeAreaView style={tw('h-full')}>
			<View>
				<Text>Orders screen</Text>
			</View>
		</SafeAreaView>
	)
}

export default OrdersScreen;