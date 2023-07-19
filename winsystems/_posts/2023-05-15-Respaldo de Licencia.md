---
layout: post
title: "Respaldo de licencias ,xml y ,dll"
description: "Manual para respaldo de licencias."
tags: [Trucos, Tutorial,]
categories: [Trucos, Tutorial,]

---

## Repaldo de licencias (.xml y .dll)

Requieres Teclado y Usb con Update de Total Commander:

```
SystemUpdate.SIQ TotalCommander.zip (S3 y ST3)
SystemUpdate.TC.zip (S1, S2 y ST2)
```

Entras al Bios de Gold Club

Ir a Restore y Seleccionar el Update de Total commander correspondiente

Ir a la Unidad D:\

O el acceso directo de Gold Club

#### Para respaldar Licence.dll
Se encuentra en la siguiente ruta:

```
D:\slot\
```

Seleccionar Licence.dll y copiarlo a la unidad donde se respaldara

#### Para respaldar Licencexx-xxxxxxxx_xxx_xxxxx.xml
Se encuentra en la siguiente ruta:

```
D:\slot\Licenses\
```

Seleccionar Licencexx-xxxxxxxx_xxx_xxxxx.xml y copiarlo a la unidad donde se respaldara

#### Para respaldar con Case o Adaptador Sata-USB

### S1, S2 y ST2
Unidad local Renombrada como Data se encontraran los siguientes archivos
```
\Slot\Licence.dll
\Slot\Licenses\Licencexx-xxxxxxxx_xxx_xxxxx.xml
```

### S3 y ST3
Para w7 y w10, sequiere de instalar en la Computadora 7-zip para visualizar los archivos .vhd

Abrimos el Archivo 'Gold Club.vhd' y respaldamos los siguientes archivos

```
\Slot\Licence.dll
\Slot\Licenses\Licencexx-xxxxxxxx_xxx_xxxxx.xml
```