import CryptoActions from '../../redux/actions/cryptoActions';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Style from './CoinListScreenStyle';
import CoinCard from '../../components/CoinCard/CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CoinListScreen extends React.Component {
	componentDidMount() {
		this.props.fetchCoinData();
	}

	renderCoinCards() {
		const { coinList = [] } = this.props;

		return (
			coinList &&
			coinList.map((coin, index) => {
				return (
					<CoinCard
						key={index}
						coinName={coin.name}
						symbol={coin.symbol}
						priceUsd={coin.quotes['USD'].price}
						percentChange24h={coin.quotes['USD'].percent_change_24h}
						percentChange7d={coin.quotes['USD'].percent_change_7d}
					/>
				);
			})
		);
	}

	render() {
		const { coinDataErrorMessage, coinDataIsLoading } = this.props;
		console.log('coinDataIsLoading: ', coinDataIsLoading);

		return (
			<View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
				{/* {coinDataIsLoading && (
					<View>
						<Spinner
							visible={coinDataIsLoading}
							textContent="Loading..."
							textStyle={{ color: '#253145' }}
							animation="fade"
						/>
					</View>
				)} */}

				<ScrollView contentContainerStyle={Style.contentContainer}>
					{this.renderCoinCards()}
				</ScrollView>
				<View>
					<Button onPress={this.props.fetchCoinData} title="Refresh" />
				</View>
			</View>
		);
	}
}

/**
 * Definir proptypes para todos componentes ou telas
 */
CoinListScreen.propsTypes = {
	coinData: PropTypes.array,
	coinDataErrorMessage: PropTypes.string,
	coinDataIsLoading: PropTypes.bool
};

const mapStateToProps = ({ crypto }) => {
	debugger;
	return {
		coinList: crypto.coinData,
		coinDataErrorMessage: crypto.coinDataErrorMessage,
		coinDataIsLoading: crypto.coinDataIsLoading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchCoinData: () => dispatch(CryptoActions.fetchCoinData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoinListScreen);
