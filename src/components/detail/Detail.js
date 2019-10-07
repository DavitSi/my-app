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
            <div>Hello detail</div>
        );
    };
}

export default Detail;