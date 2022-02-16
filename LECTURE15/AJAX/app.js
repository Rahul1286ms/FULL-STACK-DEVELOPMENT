//JSON DATA
const fetchedData = `{"ticker":{"base":"BTC","target":"USD","price":"44233.06686145","volume":"4192.06027187","change":"-35.25119551"},"timestamp":1645013105,"success":true,"error":""}`

const data = JSON.parse(fetchedData);
console.log(data.ticker.price);
