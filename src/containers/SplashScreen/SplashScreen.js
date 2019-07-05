import React from 'react';
import { Image, View } from 'react-native';
import styles from './SplashScreenStyle';
import Images from '../../Theme/Images';

export default class SplashScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image style={styles.imageLogo} source={Images.logo} resizeMode="cover" />
				</View>
			</View>
		);
	}
}
