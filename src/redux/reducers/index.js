import { combineReducers } from 'redux';
import { reducer as CryptoReducer } from './cryptoReducer';

/**
 * Registrar TODOS os reducers neste arquivo
 *
 * @see https://redux.js.org/api-reference/combinereducers
 */
export default combineReducers({
	crypto: CryptoReducer
});
