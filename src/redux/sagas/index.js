import { takeLatest } from 'redux-saga/effects';
import { CryptoTypes } from '../actions/cryptoActions';
import { StartupTypes } from '../actions/startupActions';
import { fetchCoinData } from './cryptoSagas';
import { startup } from './startupSaga';

export default function* root() {
	yield [
		/**
		 * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
		 */
		// Run startup saga quando aplicacao eh iniciada
		takeLatest(StartupTypes.STARTUP, startup),
		takeLatest(CryptoTypes.FETCH_COIN_DATA, fetchCoinData)
	];
}
