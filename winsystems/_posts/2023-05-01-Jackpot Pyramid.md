---
layout: post
cover-img: /images/banner.png
thumbnail-img: /images/banner.png
share-img: /images/banner.png
---

En la Maquina:

1.- Mostrar el numero de niveles en pantalla  S3 & ST3

GameUpdate.Slot.JackpotPyramidsVideoTopper_2counters
GameUpdate.Slot.JackpotPyramidsVideoTopper_3counters_TTD 20170824
GameUpdate.Slot.JackpotPyramidsVideoTopper_4counters_TTD 20180628

2.- Declarar los niveles del progresivo se corre depende del modelo

GameUpdate.ChangeJPGameNumberOfLevels 20180305 (W8)
GameUpdate.ChangeJPGameNumberOfLevels_Win10

3.- SystemUpdate.Slot.JackpotGame_Piramyd 20180305
4.- ConfigUpdate.Slot.JPControlerSerialEdit 20171027

5.- Hacer Ramclear con initial Setup

En el Jackpot Controller:

Vamos a hacerle Factory Reset al JP controller

Cerramos primer pantalla de Jackpot
Configuramos sólo No. de serie y la moneda cuando se nos lo solicite.
Cerramos las demas configuraciones que se lleguen a abrir.

Ingresamos al menu de bios del Jackpot

Ingresanos Licencia de JP solicitada en:
`C:\goldclub\bios\Licences\`

Corremos el Update correspondiente a los valores del JP
GameUpdate.GoldClub_SlotJackpotController_SetConfig.zip

Vamos a la config del Jackpot Controller en la opción de Suscriber para dar de alta las terminales.

Al abrir el suscriber comenzara a escanear las terminales
Escogemos y marcamos todas las terminales a vincular, excepto al JP
Damos en Connect to, se hablititara Actions
Se pondran en verde las selecciones
Damos en Actions
Damos en Link Machine together, se abrira una ventana
Esperamos a aque aparezca la serie del JP
Marcamos la opcion que tiene abajo de la serie del JP y damos doble clic
Se abrira una ventana mas
Vamos a la pestaña de Bonusing
Presionamos el boton de la palomita verde, Use this option
Damos Next y despues en Finish, se reiniciaran las terminales
Salimos y reiniciamos el JP