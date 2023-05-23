# Proyecto con la API de PayPal.

#### El proyecto esta hecho con las tecnologías de Typescript, Tailwind CSS, Node.js con Express ( Typescript ), Nodemailler y el frontend construido con [Vite](https://vitejs.dev/).


## Requerimientos
1. Node.js.
2. Typescript.
3. Una cuenta en PayPal developer ( Ahí te dan ciertas claves y cuentas de prácticas que vas a necesitar para poder usar el proyecto). 
4. Descargar ts-node en la carpeta de server  `npm i ts-node -D`
5. Para el uso del backend vas a tener que agregar tus propios datos en tu archivo .env **(En una sección posterior lo mostraré que hacer y como utilizarlo y además poner información sobre usar otros provedores como gmail o outlook).**


### Recuerda!
En cada carpeta tanto como el frontend y el backend necesita descarga las dependencias con `npm install`.


### **Este es el estado final de la aplicación** 

![Initial](https://github.com/cristianVega615/sdk-paypal/blob/main/screen/initialphoto.png?raw=true)


El div donde contiene los botones para hacer el trámite del pago ( Estos botones fueron implementados por el mismo PayPal ) esta deshabilitado para que nadie pueda hacerlo hasta que no este completado todo los campos del formulario. 


### **Acá es la aplicacion cuando esta ingresado los datos**
![Valores](https://github.com/cristianVega615/sdk-paypal/blob/main/screen/valueCatch.png?raw=true)

Podemos tener dos opciones, el poder mandar y pagar sastifactoriamente ( agregando tu cuenta de prueba que paypal te lo dá ) o el rechazar.
#### Sastifactorio
![Valores](https://github.com/cristianVega615/sdk-paypal/blob/main/screen/sastifactorio.png?raw=true)

#### Denegado
![Valores](https://github.com/cristianVega615/sdk-paypal/blob/main/screen/denegado.png?raw=true)



## Servidor
En el archivo del servidor lo unico que tiene que agregar es el archivo .env con los datos:

```.env
    HOST_NAME='El nombre de tu host o servidor local'
    PORT_HOST='El PORT de tu host, en general la información se encuentra dentro de las opciones de correo electrónicos, recuerda que estamos usando por el envio de SMTP aunque puedes elegir un proveedor de terceros'
    USER='La cuenta quién enviará los mensajes, por ejemplo, yo usé mi cuenta creada desde mi propio host pero si tienes una cuenta de gmail o outlook entonces también funciona'
    PASSWORD='La contraseña del USER'
    PORT='El puerto donde quieras que corra tu servidor'
```

Estas variables de entorno son fundamentales para poder usar el envío de mensajes cuando terminas la compra de paypal.
Por si no tienes host puedes usar tanto como Gmail y Outlook, por favor revisar la docs de la librería. [Nodemailer](https://nodemailer.com/about/).


