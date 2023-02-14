import Address from "../models/address.js";
import * as addressService from '../services/address-service.js'

function State (){

  this.address = new Address(); 
  this.btnSave =  "";
  this.btnclear = "";

  this.inputCep = "";
  this.inputStreet = "";
  this.inputNumber = "";
  this.inputCity = "";

  this.errorCep = "";
  this.errorNumber = "";

}
const state = new State();


export function init(){

    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnclear = document.forms.newAddress.btnclear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
    
   state.inputNumber.addEventListener('change', handleInputNumberChange);
   state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);
   state.btnclear.addEventListener('click', handleBtnClearClick);
   state.btnSave.addEventListener('click', handleBtnSaveClick);
   state.inputCep.addEventListener('change', handleInputCepChange);
  
}

function handleInputNumberKeyup (event){
  state.address.number = event.target.value;
}

async function handleInputCepChange (event) {
 const cep = event.target.value;
 try{
  const address = await addressService.findByCep(cep);
  state.inputCity.value = address.city;
  state.inputStreet.value = address.street;
 
  state.address = address;
  setFormError ("cep","")
 state.inputNumber.focus();
 }
catch (e){
  state.inputStreet.value = null;
  state.inputCity.value = null;
setFormError ("cep", "Informe un CEP válido")
}

}

 async function handleBtnSaveClick (event){
  event.preventDefault();
  // const result = await requestService.getJson('https://viacep.com.br/ws/01001000/json/');
  console.log(state.address);
  }

function handleInputNumberChange (event){
  if(event.target.value == ""){
    setFormError("number","Campo requerido");
  }
  else{
    setFormError("number","");
  }
}
function handleBtnClearClick (event) {
    event.preventDefault();
    clearForm();
}
function clearForm(){
  state.inputCep.value = "";
  state.inputCity.value = "";
  state.inputNumber.value = "";
  state.inputStreet.value = "";

  setFormError("cep", "")
  setFormError("number", "")
  state.inputCep.focus();
}
function setFormError (key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML =value;
}