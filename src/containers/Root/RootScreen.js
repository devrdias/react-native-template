import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import NavigationService from '../../services/NavigationService';
import { View } from 'react-native';
import styles from './RootScreenStyle';
import CoinListScreen from '../../containers/CoinList/CoinListScreen';
import SplashScreen from '../../containers/SplashScreen/SplashScreen';
import { connect } from 'react-redux';
import StartupActions from '../../redux/actions/startupActions';
import Colors from '../../Theme/Colors';

/**
 * a root screen contem a navegacao do app
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

// configuracao da Stack de navegacao
// aplicas-se a todas as rotas
const configureStack = {
	// Splash screen é exibida por default durante a execucao do startup() saga
	// ver definicao no arquivo StartupSaga.js
	initialRouteName: 'SplashScreen',
	// remove header de todas as telas
	// https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
	headerMode: 'none',
	navigationOptions: {
		translucent: 'true',
		headerStyle: {
			backgroundColor: Colors.defaultBackground,
			elevation: 0,
			paddingTop: 40
		},
		headerTitleStyle: {
			textAlign: 'center',
			fontFamily: 'Geomanist-Medium',
			alignSelf: 'center'
		},
		headerTintColor: Colors.headerTintColor
	}
};

/**
 * Telas
 */
const AppNav = createStackNavigator(
	{
		SplashScreen: SplashScreen,
		MainScreen: CoinListScreen
	},
	configureStack
);

class RootScreen extends Component {
	componentDidMount() {
		// Executa startup saga quando aplicacao inicia
		this.props.startup();
	}

	render() {
		return (
			<View style={styles.container}>
				<AppNav
					// Utilizando NavigationService para permitir navegar de onde navigation props nao for acessível
					// Permite navegar direto de um Saga, por exemplo
					// NavigationService (https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	startup: () => dispatch(StartupActions.startup())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RootScreen);
