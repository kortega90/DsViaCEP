import Address from "../models/address.js";
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
    
   state.inputNumber.addEventListener('change', handleInputNumberChange);
}
function handleInputNumberChange (event){
  if(event.target.value == ""){
    setFormError("number","Campo requerido");
  }
  else{
    setFormError("number","");
  }
}
function handleBtnClearClick(event){
    event.preventDefault();
    clearForm();

}
function clearForm(){
  state.inputCep.value = null;
  state.inputCity.value = null;
  state.inputNumber.value = null;
  state.inputStreet.value = null;

  setFormError("cep", null)
  setFormError("number", null)
}
function setFormError (key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML =value;
}