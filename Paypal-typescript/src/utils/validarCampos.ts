
interface DataPaypal{
  price: string;
  name: string;
  email: string
}


export default function validateInputs(): DataPaypal {
  let $amount = document?.querySelector(".amount") as HTMLInputElement;
  let $nombre = document?.querySelector("#name") as HTMLInputElement;
  let $email = document?.querySelector("#email") as HTMLInputElement;
  let $divPaypal = document.querySelector("#paypal-button") as HTMLDivElement;
  let $form = document.querySelector(".form-container")


/**
 * ?Validando los inputs que sean números, además de ir cambiando la url con los valores del input costo
 */
  $amount.addEventListener("keydown", (event: KeyboardEvent) => {
    let keycode = event.key;
    if (!parseInt(keycode, 10) && keycode != "Backspace" && keycode !== "0") {
      event.preventDefault();
    }
  });
  $amount.addEventListener("keyup", function (_event: KeyboardEvent) {
    window.history.pushState({}, "", "?amount=" + $amount.value);
  });


  /**
   * ? Validando si todo los inputs estan llenos de rellenados
   */

  $form?.addEventListener('keyup', (_event) => {

    const style = ["pointer-events-none", "opacity-50"]
    if ($amount.value !== "" && $nombre.value !== "" && $email.value !== "") {
     $divPaypal?.classList.remove(...style) 
    } else {
      $divPaypal?.classList.add(...style)
    }


  })



  return {
    email: $email.value,
    price: $amount.value,
    name: $nombre.value
  }
}
