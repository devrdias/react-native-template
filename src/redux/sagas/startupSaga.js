
import { put } from 'redux-saga/effects';
import CryptoActions from '../../redux/actions/cryptoActions';
import NavigationService from '../../services/NavigationService';

/**
 * Definir processos para executar durante a aplicacao iniciando
 * @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
 */
export function* startup() {
	yield put(CryptoActions.fetchCoinData());

	// Redirecionar para tela principal depois de finalizar
	// durante a execucao destes processos iniciais, a initialScreen sera a SplashScreen
	// Ver definicao no arquivo
	NavigationService.navigateAndReset('MainScreen');
}
