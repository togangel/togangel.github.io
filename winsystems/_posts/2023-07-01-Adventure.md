---
layout: post
title: "Instalación Adventure 7.1"
mix: "Adventure"
cover-img: /images/03/sshot-63.png
thumbnail-img: /images/03/sshot-63.png
share-img: /images/03/sshot-63.png
categories:
  - Adventure
  - Manual
  - Instalaciones
tags:
  - Adventure
  - Manual
  - Instalaciones
---

<div class="alert alert-primary alert-dismissable" id="accordion">
Aquí se describen los pasos a seguir para instalar Adventure 7.1
</div>

<section id="menu0">
				<div class="alert alert-danger alert-dismissable">
					<b>Importante: No es necesario ejecutar la actualización para el modo en línea en este mix, ya que viene instalado de forma predeterminada desde el mix de Goriland Link.</b>
				</div>				<div class="alert alert-danger alert-dismissable">
					Tener en cuenta el hardware específico que se utilizará, ya sea el <b>[Kino DA77]</b> con Windows 8 o el <b>[Axiomtek]</b> con Windows 10.
				</div>
				<div class="alert alert-danger alert-dismissable">
					Asegúrate de contar con la imagen correspondiente al hardware que vas a utilizar antes de proceder con la instalación.
				</div>
				<div class="alert alert-success alert-dismissable">
					Solicita las licencias <b>.xml</b> y <b>.dll</b> para cada uno de los EGM de Adventure con los siguientes datos por correo: MIX, Serie de los EGM y Wibu Key.
				</div>
				<div class="alert alert-success alert-dismissable">
					Solicita la licencia <b>.xml</b> para el Jackpot de Adventure con los siguientes datos por correo: Tema de JP, Serie de JP y Wibu Key.
				</div>
		</section>

<div data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="notice--info" markdown="1" id="menu1">
{: .box-note}
### [Software requerido](#menu1)
</div>
<section id="collapse1" class="collapse">
			<div class="card">
				<div class="card-header">
					<h1>[WinSCP o Filezilla]</h1>
				</div>
				<div class="card-body">
					<div class="alert alert-info alert-dismissable">
						Los links de descarga funcionan sólo con <b>WinSCP</b> instalado.
						<hr>
						Si cuentas con FileZilla sólo sigue la ruta
					</div>
					<a class="link-dark" href="https://winscp.net/download/WinSCP-5.21.8-Setup.exe">WinSCP-5.21.8-Setup.exe</a> (Recomendado) - <a class="link-dark" href="HowTo/WinSCP.html">Guía de instalación</a>
					<hr>
					<a class="link-dark" href="https://filezilla-project.org/download.php?show_all=1">FileZilla_3.64.0_win64-setup.exe</a> - <a class="link-dark" href="/FileZilla">Guía de instalación</a>
				</div>
				<div class="card-header">
					<h1>[Updates]</h1>
				</div>
				<div class="card-body">
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Tools/Updates/GameUpdate.LicenceFileManager.JP.zip">/Tools/Updates/GameUpdate.LicenceFileManager.JP.zip</a>
					<hr>
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Tools/Updates/SystemUpdate.LicenceFileManager.Slot.zip">/Tools/Updates/SystemUpdate.LicenceFileManager.Slot.zip</a>
					<hr>
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Adventure_7.1/GameUpdate.Slot.CountrySelector_V2.0.15_45_V1_MEX.zip">/Adventure_7.1/GameUpdate.Slot.CountrySelector_V2.0.15_45_V1_MEX.zip</a>
					<hr>
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Adventure_7.1/GameUpdate.JPController.CountrySelector_V2.zip">/Adventure_7.1/GameUpdate.JPController.CountrySelector_V2.zip</a>
				</div>
				<div class="card-header">
					<h1>[Usb con Macrium]</h1>
				</div>
				<div class="card-body">
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Tools/rufus.exe">/Tools/rufus.exe</a>
					<hr>
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Tools/Macrium-Reflect.iso">/Tools/Macrium-Reflect.iso</a>
				</div>
				<div class="card-header">
					<h1>[Adventure]</h1>
				</div>
				<div class="card-body">
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Adventure_7.1/Adventure7-1_800p_Mex_5c93_1036_DA77_Win8_31012023-00-00.mrimg">/Adventure_7.1/Adventure7-1_800p_Mex_5c93_1036_DA77_Win8_31012023-00-00.mrimg [Kino DA77]</a>
					<hr>
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Adventure_7.1/Adventure7-1_Mex_5c93_1036_Axiomtek_Win10_30012023-00-00.mrimg">/Adventure_7.1/Adventure7-1_Mex_5c93_1036_Axiomtek_Win10_30012023-00-00.mrimg [Axiomtek]</a>
				</div>
				<div class="card-header">
					<h1>[Jackpot]</h1>
				</div>
				<div class="card-body">
					<a class="link-dark" href="winscp-ftp://TecnicoGC;x-name=Winsystems;x-utf=1;x-proxyport=1;x-ftppasvmode=0@189.213.198.110/Adventure_7.1/ADV_JP_Controller_800p_Mex_DA77_Win8_09032023-00-00.mrimg">/Adventure_7.1/ADV_JP_Controller_800p_Mex_DA77_Win8_09032023-00-00.mrimg [Kino DA77]</a>
				</div>
			</div>
		</section>
	
<div data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="notice--info" markdown="1" id="menu2">
{: .box-note}
### [USB Booteable con Macrium](#menu2)
</div>

<section id="collapse2" class="collapse">
			<div class="card">
				<div class="card-header">
					Insertar la memoria USB e identificar qué unidad asigna (ejem. E:).
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-1.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Abre Rufus.exe
					<hr>
					Seleccionamos la unidad usb:
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-2.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Damos en <b class="btn btn-secondary">SELECT</b>
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-3.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Buscamos y seleccionamos el archivo .ISO de <b>Macrium-Reflect.iso</b> y damos en <b class='btn btn-secondary'>abrir</b>.
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-4.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Validamos que en <b>"File System"</b> esté en "NTFS". Es posible que muestre "FAT32" u otro sistema de archivos.
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-5.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Damos en <b class="btn btn-secondary">START</b>
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-6.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccionamos <b>"Write in ISO Image Mode (Recommended)"</b> y damos en <b class="btn btn-secondary">OK</b>
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-7.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Confirmamos el borrado de archivos con <b class="btn btn-secondary">OK</b>
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-8.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Comenzará el proceso....
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-9.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Esperamos hasta que aparezca <b>"READY"</b> y damos en <b class="btn btn-secondary">Close</b>.
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-10.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Por último, copiamos la imagen <b>.mrimg</b> del mix en la memoria USB.
				</div>
				<div class="card-body">
					<img src="/images/01/sshot-11.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
		</section>
<div data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="notice--info" markdown="1" id="menu3">
{: .box-note}
### [Instalar Imagen con Macrium](#menu3)
</div>

<section id="collapse3" class="collapse">
			<div class="card">
				<div class="card-header">
					<h2>Instale la imagen en el SSD del EGM [Kino DA77] W8 normalmente S3 y JP o [Axiomtek] W10 Normalmente ST3 utilizando Macrium.</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-success alert-dismissable">
						Tecla <kbd>[F7]</kbd> para ingresar al Bios setup en una placa [Kino DA77]
					</div>
					<img src="/images/02/sshot-1.png" class="img-fluid mx-auto d-block">
					<div class="alert alert-success alert-dismissable">
						Tecla <kbd>[DEL]</kbd> para ingresar al Bios setup en una placa [Axiomtek]
					</div>
					<img src="/images/02/sshot-2.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Ya cargado Macrium, seleccionamos <b class="btn btn-secondary">Browse for an image file...</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-3.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Buscamos la imagen correspondiente a cargar [Kino DA77] o [Axiomtek] con extension <b>.mrimg</b> y damos click en <b class="btn btn-secondary">open</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-4.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Vamos a la sección de abajo y damos click en <b class="btn btn-secondary">Restore Image</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-5.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					En la sección de 'Destination', damos click en <b class='btn btn-secondary'>Select a disk to restore to...</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-6.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccionamos el SSD local del EGM / JP a clonar
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-7.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Damos click en <b class="btn btn-secondary">Next</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-8.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Damos click en <b class="btn btn-secondary">Finish</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-9.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Confirmamos sobrescribir el volumen con <b class='btn btn-secondary'>continue...</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-10.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Esperamos a que termine el proceso y damos click en <b class="btn btn-secondary">ok</b>
				</div>
				<div class="card-body">
					<img src="/images/02/sshot-11.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Cerramos todas las ventanas y se reiniciará el EGM / JP
				</div>
				<div class="card-body">
				</div>
			</div>
		</section>
		
<div data-toggle="collapse" data-parent="#accordion" href="#collapse4" class="notice--info" markdown="1" id="menu4">
{: .box-note}
### [Jackpot Controller Configuración](#menu4)
</div>

<section id="collapse4" class="collapse">
			<div class="card">
				<div class="card-header">
					<h2>Configuración de Jackpot Controller</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-primary" role="alert">
						Instala la imagen en el SSD correspondiente utilizando el software Macrium
					</div>
						Cuando la copia de Macrium haya finalizado, el JP se reiniciará y la configuración de inicio automático del Jackpot Controller nos guiará a través de los ajustes básicos del Jackpot Controller, los cuales en esta instancia están establecidos en los valores predeterminados.
					<hr>
						Ingrese el número de serie del controlador de jackpot (GJP) y presione <b class="btn btn-secondary">OK</b>. EL JP se reiniciará.
					<img src="/images/04/sshot-1.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card">
					<div class="card-header">
						Después de reiniciar, se abrirá la ventana <b>"JackpotDisplay Config"</b>. Cierre la ventana con la <b class="btn btn-danger">X</b> en la esquina inferior derecha.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-2.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Se abrirá la ventana del <b>“Aurum currency manipulator”</b>. Presione el botón <b class="btn btn-secondary">Add</b>
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-3.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
					Aparecerá la ventana <b>“Currency list”</b>. Seleccione la moneda deseada y presione el botón <b class="btn btn-secondary">Accept</b>
					</div>
					<div class="card-body">
					<img src="/images/04/sshot-4.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Volverá a la ventana del <b>"Aurum currency manipulator"</b> con una moneda seleccionada que se muestra. Presione el botón <b class="btn btn-secondary">Save and close</b> para confirmar la selección.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-5.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Se abrirá la ventana <b>"JackpotDisplayController Config"</b>. Cierre la ventana con la <b class="btn btn-danger">X</b> en la esquina inferior derecha.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-6.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
			</div>
		</section>
<div data-toggle="collapse" data-parent="#accordion" href="#collapse5" class="notice--info" markdown="1" id="menu5">
{: .box-note}
### [Jackpot Controller Licencia](#menu5)
</div>
		
<section id="collapse5" class="collapse">
			<div class="card">
				<div class="card-header">
					<h2>Solicitud de la licencia de Jackpot Controller</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-success alert-dismissable">
					<b>En el caso de necesitar licencia para el Jackpot Controller se realizarán los siguientes pasos:</b>
					<hr>
					Solicita la licencia <b>.xml</b> para el Jackpot de Adventure enviando un correo electrónico con los siguientes datos: Tema del Jackpot, Serie del Jackpot y Wibu Key.
					</div>
					<h5>Cuando se muestre la pantalla inicial</h5>
				</div>
				<div class="card">
					<div class="card-header">
						Para interrumpir el inicio y acceder al BIOS Login, presione la tecla <kbd>INSERT</kbd>.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-7.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Si se realiza correctamente, se mostrará una ventana de inicio del BIOS Login. Presione la tecla <kbd>BLOCK NUM</kbd> para habilitar la celda de usuario en verde. A continuación, ingrese el nombre de usuario y la contraseña del administrador para acceder.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-9.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						La licencia correspondiente para el Jackpot Controller debe estar en una carpeta creada en el USB con el siguiente formato:
						<br>
						usb:/goldclub/licenses/LicenceXX-XXXXXXXX.xml
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-10.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Dentro del menú del BIOS, acceda a la pestaña <b class="btn btn-primary">Restore</b> y haga clic en el botón <b class="btn btn-primary">System update</b> para abrir la ventana de Select Update.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-11.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Seleccione el archivo de actualización llamado <b>GameUpdate.LicenceFileManager.JP.zip</b> y haga click en el botón <b class="btn btn-secondary">OK</b>.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-12.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Después, se abrirá una ventana de confirmación. Presione el botón <b class="btn btn-secondary">YES</b>.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-13.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Se abrirá la ventana del Administrador de archivos de licencia, que mostrará la información de la licencia actual. Presione el botón <b class="btn btn-secondary">COPY LICENCE</b>.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-14.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Se abrirá una ventana de confirmación de actualización de licencia. Presione el botón <b class="btn btn-secondary">OK</b> y luego haga clic en <b class="btn btn-secondary">Close</b> para volver atrás.
					</div>
					<div class="card-body">
						<img src="/images/04/sshot-15.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
			</div>
		</section>
		
<div data-toggle="collapse" data-parent="#accordion" href="#collapse6" class="notice--info" markdown="1" id="menu6">
{: .box-note}
### [Jackpot Controller Country Selector](#menu6)
</div>

<section id="collapse6" class="collapse">
			<div class="card">
				<div class="card-header">
				Aplica la nueva configuración utilizando el Update <b>GameUpdate.JPController.CountrySelector_V2</b>.
				</div>
				<div class="card-body">
				Coloca el archivo de actualización en la raíz de una memoria USB y luego inserta la memoria USB en un puerto USB vacío del controlador de jackpot.
				</div>
			</div>
<!--
			<div class="card">
				<div class="card-header">
					Accede al BiOS del JP. Para ello, presiona las teclas <kbd>[ALT]</kbd> + <kbd>[TAB]</kbd> y aparecerá una ventana de comandos. En ese momento, presiona la tecla <kbd>ESC</kbd> para salir de la animación.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-16.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Para interrumpir el inicio y acceder al BIOS Login, presione la tecla <kbd>INSERT</kbd>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-17.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Si se realiza correctamente, se mostrará una ventana de inicio del BIOS Login. Presione la tecla <kbd>BLOCK NUM</kbd> para habilitar la celda de usuario en verde. A continuación, ingrese el nombre de usuario y la contraseña del administrador para acceder.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-18.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
-->
			<div class="card">
				<div class="card-header">
					Dentro del menú del BIOS, acceda a la pestaña <b class="btn btn-primary">Restore</b> y haga clic en el botón <b class="btn btn-primary">System update</b> para abrir la ventana de Select Update.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-19.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccione el archivo de actualización llamado <b>GameUpdate.JPController.CountrySelector_V2.zip</b> y haga clic en el botón <b class="btn btn-secondary">OK</b>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-20.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Después, se abrirá una ventana de confirmación. Presione el botón <b class="btn btn-secondary">YES</b>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-21.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccionamos <b>Adventure 7.1</b>
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-22.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccionamos <b class="btn btn-secondary">Configure</b> dependiendo los valores del JP.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-23.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Confirmamos con <b class="btn btn-secondary">YES</b>
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-24.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Dejamos en blanco sin escribir nada y luego hacemos clic en el botón <b class="btn btn-secondary">Accept</b>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-25.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Dejamos en blanco sin escribir nada y luego hacemos clic en el botón <b class="btn btn-secondary">Accept</b>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-26.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Nos devolverá al inicio de la configuración de BiOS, y deberemos realizar un <b class="btn btn-danger">RAMCLEAR</b> manualmente para completar la configuración.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-27.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
		</section>
		
<div data-toggle="collapse" data-parent="#accordion" href="#collapse7" class="notice--info" markdown="1" id="menu7">
{: .box-note}
### [Jackpot Controller Ramclear](#menu7)
</div>

<section id="collapse7" class="collapse">
			<div class="card">
				<div class="card-header">
					En la configuración de BiOS seleccionamos <b class="btn btn-secondary">Logout</b>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-28.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Para interrumpir el inicio y acceder al BIOS Login, presione la tecla <kbd>INSERT</kbd>.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-29.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Si se realiza correctamente, se mostrará una ventana de inicio del BIOS Login. Presione la tecla <kbd>BLOCK NUM</kbd> para habilitar la celda de usuario en verde. A continuación, ingrese el nombre de usuario y la contraseña del maintenance para acceder.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-30.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Seleccionamos RamClear y se reiniciará el JP Controller
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-31.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Después de reiniciar, se abrirá la ventana <b>"JackpotDisplay Config"</b>. Cierre la ventana con la <b class="btn btn-danger">X</b> en la esquina inferior derecha.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-2.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Se abrirá la ventana del <b>"Aurum currency manipulator"</b> con una moneda seleccionada que se muestra. Presione el botón <b class="btn btn-secondary">Save and close</b> para confirmar la selección.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-5.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Se abrirá la ventana <b>"JackpotDisplayController Config"</b>. Cierre la ventana con la <b class="btn btn-danger">X</b> en la esquina inferior derecha.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-6.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					Ya cargará la animación del JP con los valores seleccionados.
				</div>
				<div class="card-body">
					<img src="/images/04/sshot-32.png" class="img-fluid mx-auto d-block">
					<img src="/images/04/sshot-33.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
		</section>
<div data-toggle="collapse" data-parent="#accordion" href="#collapse8" class="notice--info" markdown="1" id="menu8">
{: .box-note}
### [EGM Configuración Inicial](#menu8)
</div>

<section id="collapse8" class="collapse">
			<div class="card">
				<div class="card-header">
					<h2>Ajustes de configuración  del EGM</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-primary" role="alert">
						Instala la imagen en el EGM correspondiente utilizando el software Macrium. Puedes seguir las instrucciones detalladas en el siguiente enlace: <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="alert-link">Guía de instalación utilizando el software Macrium</a>.
					</div>
					Una vez que la copia de Macrium se haya completado, el EGM se reiniciará y la configuración de inicio automático del EGM nos guiará a través de los ajustes básicos del EGM, los cuales en esta instancia están configurados con los valores predeterminados.
				</div>
				<div class="card">
					<div class="card-header">
						Configura el número de serie y luego haz click en el botón <b class="btn btn-secondary">OK</b>.
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-1.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Configura la llave Dallas (Ingresala 2 veces)
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-2.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Configura las denominaciones y luego haz click en el botón <b class="btn btn-secondary">Next</b>.
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-3.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Configura el Dallas de la sala y luego haz click en el botón <b class="btn btn-secondary">Next</b>.
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-4.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Configurar Billetes
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-5.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Haz click en el botón <b class="btn btn-secondary">REMOVE BILL</b> para todos los billetes, desmarca la opción <b>Active</b> y luego haz click en <b class="btn btn-secondary">APPLY</b> como se muestra en la siguiente imagen:
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-6.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Configurar Monedas
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-7.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Haz click en el botón <b class="btn btn-secondary">REMOVE COIN</b> para todas las monedas, desmarca la opción <b>Active</b> y luego haz click en <b class="btn btn-secondary">APPLY</b> como se muestra en la siguiente imagen:
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-8.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						Valida el número de serie y el idioma, luego haz clic en el botón <b class="btn btn-secondary">Close</b>.
					</div>
					<div class="card-body">
						<img src="/images/03/sshot-9.png" class="img-fluid mx-auto d-block">
					</div>
				</div>
			</div>
		</section>
<div data-toggle="collapse" data-parent="#accordion" href="#collapse9" class="notice--info" markdown="1" id="menu9">
{: .box-note}
### [EGM Country Selector](#menu9)
</div>

<section id="collapse9" class="collapse">
			<div class="card">
				<div class="card-header">
					Cuando se muestre la pantalla inicial
				<br>
					Accede a la BiOS del EGM haciendo clic en la esquina superior izquierda de la pantalla de inicio o presionando la tecla <kbd>INSERT</kbd>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-10.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Si se realiza correctamente, se mostrará la pantalla de inicio de sesión de BiOS con un código QR.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-11.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Se escanea el código con tu dispositivo móvil y se enviará al correo <a class="btn btn-info" href="mailto:slot.login&#64;winsysgroup.com">slot.login&#64;winsysgroup.com</a> (sin asunto)
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-12.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					El servidor responderá con un código de 6 dígitos que deberás ingresar en el EGM.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-13.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Si todo se realiza correctamente, habrás ingresado exitosamente.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-14.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Vamos a la pestaña de "RESTORE" haciendo clic en el botón <b class="btn btn-primary">RESTORE</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-15.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Seleccionamos la opción <b class="btn btn-primary">System update</b> haciendo click en ella.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-16.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Seleccionamos el archivo de actualización <b>GameUpdate.Slot.CountrySelector_V2.0.15_45_V1_MEX.zip</b> y luego hacemos clic en <b class="btn btn-secondary">OK</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-17.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Confirmamos la selección haciendo click en <b class="btn btn-secondary">YES</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-18.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
						Seleccionamos el tipo de hardware (Mother) que tiene el EGM.
				</div>
				<div class="card-body">
					<div class="alert alert-danger alert-dismissable">
						Para la placa [Kino DA77]
					</div>
						<img src="/images/03/sshot-19.png" class="img-fluid mx-auto d-block">
					<div class="alert alert-danger alert-dismissable">
						Para la placa [Axiomtek]
					</div>
					<img src="/images/03/sshot-20.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Seleccionamos <b class="btn btn-secondary">Configure</b> y elige la opción <b class="btn btn-info">(WHITOUT) LegacyBonus</b> según corresponda.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-21.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Confirmamos la selección con <b class="btn btn-secondary">YES</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-22.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Ingresamos la serie del EGM y hacemos click en <b class="btn btn-secondary">Accept</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-23.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Ingresamos la serie del Jackpot Controller y hacemos click en <b class="btn btn-secondary">Accept</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-24.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					El EGM se reiniciará realizando un <b class="btn btn-danger">RAMCLEAR INITIAL SETUP</b>.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-25.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Por lo tanto, será necesario configurar nuevamente los parámetros que se establecieron previamente.
				</div>
				<div class="card-body">
					<div class="alert alert-danger  alert-dismissable">
					<ul>
						<li>Configuración de Dallas</li>
						<li>Denominación</li>
						<li>Configuración de Dallas de la sala</li>
						<li>Deshabilitar los Billetes</li>
						<li>Deshabilitar las Monedas</li>
						<li>Validar Serie y Lenguaje</li>
					</ul>						</div>
				</div>
			</div>
		</section>
		
<div data-toggle="collapse" data-parent="#accordion" href="#collapse10" class="notice--info" markdown="1" id="menu10">
{: .box-note}
### [EGM Ingreso de Licencias](#menu10)
</div>

<section id="collapse10" class="collapse">
			<div class="card">
				<div class="card-header">
					<h2>Solicitud de las Licencias del EGM</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-success alert-dismissable">
					Solicita las licencias para el EGM de Adventure con los siguientes datos por correo: Mix, Serie de JP y Wibu Key.
					</div>
				</div>
				<div class="card-header">
					<h5>Cuando se muestre la pantalla inicial</h5>
					Presione la tecla <kbd>[INSERT]</kbd> para interrumpir el inicio e ingresa al BiOS Login
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-10.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Si se realiza correctamente, se mostrará la pantalla de inicio de sesión de BiOS con un código QR.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-11.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Se escanea el código con tu dispositivo móvil y se enviará al correo <a class="btn btn-info" href="mailto:slot.login&#64;winsysgroup.com">slot.login&#64;winsysgroup.com</a> (sin asunto)
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-12.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					El servidor responderá con un código de 6 dígitos que deberás ingresar en el EGM.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-13.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Si todo se realiza correctamente, habrás ingresado exitosamente.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-14.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Las licencias para el EGM deben estar en una carpeta creada en el USB de este formato:
					<ul>
						<li>usb:/goldclub/licenses/licence_XX-XXXXXXXX.dll</li>
						<li>usb:/goldclub/licenses/LicenceXX-XXXXXXXX.xml</li>
					</ul>
					Donde las "X" es la Wibu Key
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-26.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Dentro del BiOS, abra la pestaña "Restore" y presione el botón "System update" para abrir la ventana de actualización del sistema.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-27.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Seleccione la licencia del controlador de jackpot titulada <b>"GameUpdate.LicenceFileManager.Slot"</b> y presione "OK".
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-28.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Se abre una ventana de confirmación. Presione “YES”.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-29.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Se abre un Administrador de archivos de licencia, que muestra la información de la licencia actual. Pulse el botón “COPY LICENCE”.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-30.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
						Se abrirá una ventana de confirmación de actualización de licencia. Presione el botón <b class="btn btn-secondary">OK</b> y luego haga clic en <b class="btn btn-secondary">Close</b> para volver atrás.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-31.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
		</section>
<div data-toggle="collapse" data-parent="#accordion" href="#collapse11" class="notice--info" markdown="1" id="menu11">
{: .box-note}
### [EGM Configuración SAS](#menu11)
</div>

<section id="collapse11" class="collapse">
			<div class="card">
				<div class="card-header">
					Selecciona en menú "Configuración" (Config) y Selecciona la opción "Configuración SAS" (SAS configuration).
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-51.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Se abrirá una nueva ventana con opciones para configurar SAS.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-52.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Abre la opción "SAS channel 1 protocol settings" y selecciona la configuración llamada "PollRate".
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-53.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Actualiza el valor a "300"
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-54.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Regresa a la ventana anterior con las opciones de configuración de SAS.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-52.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Selecciona la opción "SAS Channel 1 Features" y marca las siguientes opciones: [is cashless controler], [is handpay controller]. Luego, haz clic en "Apply" y posteriormente en "Exit".
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-55.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Regresa nuevamente a la ventana anterior con las opciones de configuración de SAS.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-52.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Selecciona la opción "SAS Channel 1" y abre la ruta [Clients > SASClientState].
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-58.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Selecciona la configuración llamada "ValidationMode" y cambia la opción a "NONE".
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-59.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Cerramos todas las ventanas y reiniciamos la terminal por última vez. En este reinicio, se nos solicitará la licencia de vigencia. Escaneamos el código correspondiente utilizando nuestro dispositivo móvil y enviamos la solicitud por correo electrónico.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-60.png" class="img-fluid mx-auto d-block">
				</div>
				<div class="card-header">
					Una vez que recibamos el código de licencia por correo, lo ingresamos en el EGM correspondiente. Después de ingresar el código, podremos acceder al juego exitosamente.
				</div>
				<div class="card-body">
					<img src="/images/03/sshot-32.png" class="img-fluid mx-auto d-block">
				</div>
			</div>
		</section>
<!--
		<div data-toggle="collapse" data-parent="#accordion" href="#collapse12" class="alert alert-info" id="menu12">
-->
<div class="notice--info" markdown="1" id="menu12">
{: .box-note}
### [Cierre de producto](#menu12)
</div>
<!--
		<section id="collapse12" class="collapse show">
-->
<section>
			<div class="card">
				<div class="card-header">
					SI todo se realizó correctamente, se valida tomando evidencia fotogáfica de lo siguiente para el cierre.
				</div>
				<div class="card-body">
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="HowTo/MenuDeJuego.html" class="alert-link">Menú de juego</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="HowTo/Denominaciones.html" class="alert-link">Denominaciones</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">RTP</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Cash In</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Apuesta Máxima</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Apuesta Mínima</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Spin (Una jugada con apuesta mínima)</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Cash Out</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Pantalla de cada una de las pestañas del juego</a> (Si aplica)
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Jackpot Avanzado</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Panorámicas de ubicación de la Isla</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
				</div>
			<div class="card">
				<div class="card-header">
					<h2>Después de haber obtenido las pruebas anteriores, se extrae lo siguiente.</h2>
				</div>
				<div class="card-body">
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Logs históricos</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
					<a href="#" class="alert-link">Device Manager Data [DMD's]</a>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
				</div>
			</div>
		