---
layout: post
title: "Listado de imagenes y updates Adventure"
mix: "Adventure"
cover-img: /images/03/sshot-63.png
thumbnail-img: /images/03/sshot-63.png
share-img: /images/03/sshot-63.png
categories:
  - Adventure
  - Updates
  - Descargas
tags:
  - Adventure
  - Updates
  - Descargas
---

<section>
	<div class="card border-info">
		<div class="card-header">
			Descargas con [WinSCP o Filezilla]
		</div>
		<div class="card-body">
			{% for item in site.data.togangel.updates %}
				{% if item.version == "downloads" %}
				<small>
					<a class="link-dark" href="{{ item.url }}">{{ item.title }}</a> - <a class="link-dark" href="{{ item.url2 }}">{{ item.guia }}</a><br>
				</small>
				{% endif %}
			{% endfor %}
		</div>
	</div>
	<br>
	<div class="alert alert-info alert-dismissable">
		<small>Los links de descarga funcionan sólo con <b>WinSCP</b> instalado.</small>
		<hr>
		<small>Si cuentas con FileZilla sólo sigue la ruta.</small>
	</div>
</section>

<section>
    {% for item in site.data.togangel.adventure %}
      {% if item.version == 48 %}
	<div class="card border-info">
		<div class="card-header">
			{{ item.title | Capitalize | escape }}
		</div>
		<div class="card-body">
			<small>
				<a class="card-text link-dark" href="{{ item.url }}">{{ item.ftp }}</a>
			</small>
		</div>
	</div>
	<br>
		{% endif %}
    {% endfor %}
</section>

<section>
	<div class="alert alert-info alert-dismissable">
		<small>Updates necesarios para respaldar e ingresar las licencias</small>
	</div>
	{% for item in site.data.togangel.updates %}
	{% if item.version == "licence" %}
	<div class="card border-info">
		<div class="card-header">
			{{ item.title | Capitalize | escape }}
		</div>
		<div class="card-body">
			<small>
				<a class="link-dark" href="{{ item.url }}">{{ item.ftp }}</a>
			</small>
		</div>
	</div>
	<br>
		{% endif %}
    {% endfor %}
</section>
