import React from 'react';

function ConversionForm({
    amount,
    fromCurrency,
    toCurrency,
    handleAmountChange,
    handleFromChange,
    handleToChange,
    currencies,
}) {
    const renderCurrencyOptions = () =>
        Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
                {currency}
            </option>
        ));
    return (
        <>
            <div className="div1">
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div className="div2">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleFromChange} value={fromCurrency}>
                    {renderCurrencyOptions()}
                </select>
            </div>
            <div className="div4">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleToChange} value={toCurrency}>
                    {renderCurrencyOptions()}
                </select>
            </div>
        </>
    );
}

export default ConversionForm;