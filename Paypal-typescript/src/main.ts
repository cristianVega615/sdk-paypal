import "./style.css";
import Paypal from "./utils/Paypal";
import DataValidar from "./utils/validarCampos";

let $amount = document?.querySelector(".amount") as HTMLInputElement;

window.addEventListener("DOMContentLoaded", () => {
  window.history.pushState({}, "", "?amount=" + $amount.value);
});

/**
 * ? Esta función controla los componentes de paypal.
 */
Paypal();


/**
 * 
 */

DataValidar()



