---
layout: post
title: "Formatear SSD desde CMD con Diskpart"
cover-img: /images/banner.jpg
thumbnail-img: /images/banner.jpg
share-img: /images/banner.jpg
categories:
  - Manual
  - Formato
  - SSD
  - Disco Duro
  - Diskpart
tags:
  - Manual
  - Formato
  - SSD
  - Disco Duro
  - Diskpart
---
Una de las tareas frecuentes que solemos realizar en nuestros discos duros es el formato, ya sea para borrar toda la información allí alojada y usar esa partición o revivir el ssd.

En estos escenarios normalmente vamos al Explorador de archivos y desde allí realizamos esto, pero aquí te explico como formatear tu disco duro desde CMD usando la herramienta Diskpart.

Para usar Diskpart accedemos al CMD como administrador:

En la consola abrimos Diskpart con el comando:

{: .box-note}
**diskpart**

<pre id="cmd">
Microsoft Windows [Version 10.0.22621.1702]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Administrator>diskpart

Microsoft DiskPart version 10.0.22621.1

Copyright (C) Microsoft Corporation.
On computer: WINSYSGROUP

DISKPART>
</pre>

Seguimos con los siduientes comandos

<pre id="cmd">
Microsoft Windows [Version 10.0.22621.1702]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Administrator>diskpart

Microsoft DiskPart version 10.0.22621.1

Copyright (C) Microsoft Corporation.
On computer: WINSYSGROUP

DISKPART> list disk

  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          119 GB      0 B        *
  Disk 1    Online           28 GB      0 B        *

DISKPART> select disk 0

Disk 0 is now the selected disk.

DISKPART> clean

DiskPart succeeded in cleaning the disk.

DISKPART> create partition primary

DiskPart succeeded in creating the specified partition.

DISKPART> active

DiskPart marked the current partition as active.

DISKPART> format quick

  100 percent completed

DiskPart successfully formatted the volume.

DISKPART> assign

DiskPart successfully assigned the drive letter or mount point.

DISKPART> exit

Leaving DiskPart...

C:\Users\Administrator>
</pre>

Listo!

Este es el simple proceso para formatear un disco duro desde CMD con Diskpart.

<p class="meta">{{ page.date | date_to_string }}</p>