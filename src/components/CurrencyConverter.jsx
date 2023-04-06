import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../App.css"
import ConversionResult from './ConversionResult';
import ConversionForm from './ConversionForm';
import SwapButton from './SwapButton';

function CurrencyConverter(props) {
    const [currencies, setCurrencies] = useState([])
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("CNY")
    const [amount, setAmount] = useState("1")
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const source = axios.CancelToken.source();
        const debounceRequest = setTimeout(() => {
            axios
                .get(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
                .then((res) => {
                    console.log(res.data);
                    setConvertedAmount(res.data.rates[toCurrency]);
                })
                .catch((err) => {
                    if (!axios.isCancel(err)) {
                        setError(`Error: ${err.message}`);
                    }
                })
        }, 500);
        return () => {
            source.cancel();
            clearTimeout(debounceRequest);
        };
    }, [fromCurrency, toCurrency, amount]);

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(`https://api.frankfurter.app/latest`)
            .then((res) => {
                console.log(res.data);
                setCurrencies(res.data.rates)
            })
            .catch((err) => {
                if (!axios.isCancel(err)) {
                    setError(`Error: ${err.message}`);
                }
            })
        return () => {
            source.cancel()
        }
    }, [])

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const hanldeFromChange = (event) => {
        setFromCurrency(event.target.value)
    }

    const handleToChange = (event) => {
        setToCurrency(event.target.value)
    }

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
      };
      

    return (
        <div className="bg-[#8076a3] rounded p-5" id="parent">
            <ConversionForm
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                handleAmountChange={handleAmountChange}
                handleFromChange={hanldeFromChange}
                handleToChange={handleToChange}
                currencies={currencies}
            />
            <SwapButton handleSwap={handleSwap}/> 
            <ConversionResult
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                amount={amount}
                convertedAmount={convertedAmount} />
        </div>
    );
}

export default CurrencyConverter;
