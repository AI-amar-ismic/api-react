import axios from 'axios';

export default function getPrice (){
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
}