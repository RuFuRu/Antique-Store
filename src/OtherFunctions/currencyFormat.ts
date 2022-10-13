function currencyFormat(num: number) {
    return new Intl.NumberFormat('de-DE', {style: "currency", currency: 'EUR'}).format(num);
}

export default currencyFormat;