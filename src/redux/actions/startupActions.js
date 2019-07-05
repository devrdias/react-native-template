import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	// Acao disparada quando aplicacao eh iniciada
	startup: null
});

export const StartupTypes = Types;
export default Creators;
