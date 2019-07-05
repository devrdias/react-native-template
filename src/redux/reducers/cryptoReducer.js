import { createReducer } from 'reduxsauce';
import { CryptoTypes } from '../actions/cryptoActions';

const INITIAL_STATE = {
	coinData: {},
	coinDataErrorMessage: null,
	coinDataIsLoading: false
};

export const fetchCoinDataLoading = state => {
	return {
		...state,
		coinDataIsLoading: true,
		coinDataErrorMessage: ''
	};
};

export const fetchCoinDataSuccess = (state, { coinData }) => {
	debugger;
	return {
		...state,
		coinData: Object.keys(coinData).map(k => coinData[k]),
		coinDataIsLoading: false,
		coinDataErrorMessage: null
	};
};

export const fetchCoinDataFailure = (state, { errorMessage }) => {
	debugger;
	return {
		...state,
		coinData: {},
		coinDataIsLoading: false,
		coinDataErrorMessage: errorMessage
	};
};

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 *
 * O nome da funcao deve ser o mesmo em SNAKE_CASE - se nao dah erro !
 */
export const reducer = createReducer(INITIAL_STATE, {
	[CryptoTypes.FETCH_COIN_DATA_LOADING]: fetchCoinDataLoading,
	[CryptoTypes.FETCH_COIN_DATA_SUCCESS]: fetchCoinDataSuccess,
	[CryptoTypes.FETCH_COIN_DATA_FAILURE]: fetchCoinDataFailure
});
