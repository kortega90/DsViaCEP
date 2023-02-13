import Address from "../models/address";
function State (){
    
  this.address = new Address(); 
  this.btnSave = null;
  this.btnclear = null;

  this.inputCep =null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity =null;

  this.errorCep = null;
  this.errorNumber = null;

}
const state = new State();


export function init(){

    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnSave = document.forms.newAddress.btnclear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
    console.log(state);
}