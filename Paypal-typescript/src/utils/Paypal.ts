import { loadScript, PayPalNamespace } from "@paypal/paypal-js";

export default async function PayPal() {
  let paypal = await loadScript({
    "client-id":
      "AViUchXygYp5nDJ2cZUVKhhzshDFbeYjTgK13yXXW7Cn02pPYivih7Cc9CIDJ9H7Jsr6iY-AVav4kgT3",
    components: "buttons",
  });
  let $amount = document?.querySelector(".amount") as HTMLInputElement;
  let $nombre = document?.querySelector("#name") as HTMLInputElement;
  let $email = document?.querySelector("#email") as HTMLInputElement;
  let $divPaypal = document.querySelector("#paypal-button") as HTMLDivElement;
  const style = ["pointer-events-none", "opacity-50"];


  let definedPaypal: PayPalNamespace | null | undefined = paypal;
  if (definedPaypal?.Buttons !== undefined) {
    try {
      definedPaypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "pill",
            label: "paypal",
            height: 45
          },
          createOrder: (_data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${$amount.value}`,
                  },
                },
              ],
            });
          },
          onApprove: (_data, actions) => {
            if (actions.order?.capture) {
              return actions.order?.capture().then((_resposne): void => {
                const dataEmail = {
                  amount: $amount.value,
                  nombre: $nombre.value,
                  email: $email.value,
                };
                fetch("http:/locahost:PORT/email/", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(dataEmail),
                });

                $amount.value = "";
                $nombre.value = "";
                $email.value = "";
                $divPaypal.classList.add(...style);

                (function () {
                  let modalSuccess = document.querySelector(
                    ".modal-success"
                  ) as HTMLDialogElement;
                  modalSuccess.showModal();
                })();

                let btnClose = document.querySelector(
                  ".close-modal-success"
                ) as HTMLButtonElement;

                let modal = document.querySelector(
                  ".modal-success"
                ) as HTMLDialogElement;
                btnClose.addEventListener("click", () => {
                  modal.close();
                });
              });
            } else {
              return Promise.reject(
                new Error("La captura de la orden no está disponible.")
              );
            }
          },
          onCancel(_data, _actions) {
            try {
              (function () {
                let modalSuccess = document.querySelector(
                  ".modal-denied"
                ) as HTMLDialogElement;
                modalSuccess.showModal();
              })();
              let btnClose = document.querySelector(
                ".close-modal-denied"
              ) as HTMLButtonElement;

              let modal = document.querySelector(
                ".modal-denied"
              ) as HTMLDialogElement;
              btnClose.addEventListener("click", () => {
                modal.close();
              });
            } catch (error) {}
          },
        })
        .render("#paypal-button");
    } catch (error) {}
  }
}
