import axios from "axios";
const api=axios.create({
    baseURL: " https://v6.exchangerate-api.com/v6/b2182c9c5f2348ab29bc4649",
});
export const currencyConvertor=(fromCurrency, toCurrency, amount)=>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};