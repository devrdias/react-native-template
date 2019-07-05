import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './redux/store/configureStore';
import RootScreen from './containers/Root/RootScreen';
import SplashScreen from './containers/SplashScreen/SplashScreen';
import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';


const { store, persistor } = configureStore(rootReducer, rootSaga);

// Debug Only - yellow box
console.disableYellowBox = true;

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{/**
				 *
				 * PersisteGate atrasa o rendering do app ateh que o estado salvo na AsyncStorage seja salvo no Redux
				 * prop `loading` pode ser null ou qualquer outro component React
				 * por exemplo loading={<SplashScreen />}
				 * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
				 */}
				<PersistGate loading={<SplashScreen />} persistor={persistor}>
					<RootScreen />
				</PersistGate>
			</Provider>
		);
	}
}
