import React from 'react';
import Loading from '../common/Loading';
import { API_URL } from '../../config';
import { handleChangePercent, handleResponse } from '../../helpers';
import './Detail.css';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currency: {},
            error: null
        }
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        const currencyId = this.props.match.params.id;
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponse)
        .then(currency => {
            this.setState({
                loading: false,
                currency,
                error:''
            })
        })
    };

    render () {
        const { loading, currency, error } = this.state;
        if(loading) {
            return (
                <div className="loading-container">
                    <Loading />
                </div>
            )
        }
        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>
                <div className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price}</span>
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value">{currency.rank}</span>
                    </div>
                    <div className="Detail-item">
                        24H change
                        <span className="Detail-value">
                           {handleChangePercent(currency.percentChange24h)}
                        </span>
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">24H Volume</span>
                        <span className="Detail-dollar">$</span>
                        {currency.volume24h}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Total supply</span>
                        {currency.totalSupply}
                    </div>
                </div>
            </div>
        );
    };
}

export default Detail;