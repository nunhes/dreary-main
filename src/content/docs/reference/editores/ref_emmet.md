---
title: Abreviaturas Emmet
description: Vomo  acortar o tempo de desenvolvemento con Emmet
---

Emmet é un complemento para moitos editores de texto populares que mellora moito o fluxo de traballo HTML e CSS.

Usando abreviaturas e comandos [Emmet](https://emmet.io) podemos acortar o tempo de desenvolvemento:

## HTML

#### ``#menu$*6>ul>li*0>a{Link Here}``
```html
<div id="menu1">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
<div id="menu2">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
<div id="menu3">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
<div id="menu4">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
<div id="menu5">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
<div id="menu6">
    <ul>
        <li><a href="">Link Here</a></li>
    </ul>
</div>
```

#### ``article#front.main``
```html
<article id="front" class="main"></article>
```

#### ``article>p{Text here...}+bq>{Text here...}^p{Text here...}*3``
```html
<article>
    <p>Text here...</p>
    <blockquote>Text here...</blockquote>
    <p>Text here...</p>
    <p>Text here...</p>
    <p>Text here...</p>
</article> 
```

#### ``form``
```html
<form action=""></form>
```
#### ``form:get``
```html
<form action="" method="get"></form>
```
#### ``form:post``
```html
<form action="" method="post"></form>
```
#### ``input:t``
```html
<input type="text" name="" id="">
```
#### ``input:time``
```html
<input type="time" name="" id="">
```
#### ``input:time#dateTime``
```html
<input type="time" name="" id="dateTime">
```
#### ``table+``
```html
<table>
	<tr>
		<td></td>
	</tr>
</table>
```
#### ``tr+``
```html
<tr><td></td></tr>
```
#### ``colg+``
```html
<colgroup>
    <col>
</colgroup>
```
<center><h3>* * *</h3></center>

## CSS

#### ``pos``
```css
position: relative;
```
#### ``pos:s``
```css
position: static;
```
#### ``t:a``
```css
top: auto;
```
#### ``z``
```css
z-index: ;
```
#### ``va:t`
```css
vertical-align: top;
```
#### ``tsh:ra``
```css
text-shadow: h v blur rgba(0, 0, 0, .5);
```
#### ``bdtli:c``
```css
border-top-left-image: continue;
```
#### ``d``
```css
display: block;
```
#### ``bxsh:ra``
```css
-webkit-box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
box-shadow: inset h v blur spread rgba(0, 0, 0, .5);
```

#### ``@kf``

```css
@-webkit-keyframes identifier {
    from {  }
    to {  }
}
@-o-keyframes identifier {
    from {  }
    to {  }
}
@-moz-keyframes identifier {
    from {  }
    to {  }
}
@keyframes identifier {
    from {  }
    to {  }
}
```

#### ``c:ra``

```css
color: rgba(0, 0, 0, .5);
```



#### ``ff:ss``

```css
font-family: sans-serif;
```

#### ``cps:b``

```css
caption-side: bottom;
```
#### ``bgi:n``

```css
background-image: none;
```

#### ``pgbb:r``

```css
page-break-before: right;
```
---

*_ref: http://docs.emmet.io/cheat-sheet/*
