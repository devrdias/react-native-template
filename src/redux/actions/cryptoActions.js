import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	fetchCoinData: null,
	fetchCoinDataLoading: null,
	fetchCoinDataSuccess: ['coinData'],
	fetchCoinDataFailure: ['errorMessage']
});

export const CryptoTypes = Types;
export default Creators;
