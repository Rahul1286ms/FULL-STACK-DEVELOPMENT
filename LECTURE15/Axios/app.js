
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });