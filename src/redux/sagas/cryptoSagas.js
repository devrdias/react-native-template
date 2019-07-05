import { put, call } from 'redux-saga/effects';
import CryptoActions from '../actions/cryptoActions';
import { ExchangeService } from '../../services/ExchangeService';
/**
 *
 * @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
 *
 * Use put para disparacar uma acao que sera lida pelo listener do Redux, ou seja, para atualizar um estado no reducer
 * Use call para disparar açoes assincronas, como chamadas as API's
 *
 * Call eh "blocante" - a chamada eh resolvida e soh apos terminar o codigo continua
 * Put eh "nao blocante" - a chamada eh executada asyncrona
 */
export function* fetchCoinData() {
	// seta reducer para estado de loading
	yield put(CryptoActions.fetchCoinDataLoading());

	// Fetch API
	const coinData = yield call(ExchangeService.fetchCoinData);

	if (coinData) {
		yield put(CryptoActions.fetchCoinDataSuccess(coinData));
	} else {
		yield put(CryptoActions.fetchCoinDataFailure('Erro na chamada da API.'));
	}
}
