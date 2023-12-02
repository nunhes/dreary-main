---
title: Javascript DOM - Selección de elemento
description: Uso de javascript na arbore do modelo de obxecto do documento
---

# `getElementById`

**Resumo** : neste tutorial, aprenderás a usar o JavaScript `getElementById()`para seleccionar un elemento mediante un identificador especificado.

## Introdución ao método JavaScript getElementById().

O método `document.getElementById()` devolve un obxecto `Element` que representa un elemento HTML cun ID que coincide cunha cadea especificada.

Se o documento non ten ningún elemento co id especificado, `document.getElementById()` devolve `null`.

Dado que o identificador dun elemento é único dentro dun documento HTML, `document.getElementById()` é un xeito rápido de acceder a un elemento.

A diferenza do método `querySelector()`, `getElementById()` só está dispoñible no obxecto `document`, non noutros elementos.

O código seguinte mostra a sintaxe do método `getElementById()`:

```js
const element = document.getElementById(id);
```

Nesta sintaxe, o id é unha cadea que representa o id do elemento a seleccionar. O ID distingue entre maiúsculas e minúsculas. Por exemplo,  `'root'` e `'Root'` son totalmente diferentes.

Un `id` é único dentro dun documento HTML. Non obstante, o HTML é unha linguaxe tolerante. Se o documento HTML ten varios elementos co mesmo ID, o método `document.getElementById()` devolve o primeiro elemento que atopa.

## Exemplo do método JavaScript getElementById().

Supón que temos o seguinte documento HTML:

```html
<html>
    <head>
        <title>Método JavaScript getElementById()</title>
    </head>
    <body>
        <p id="message">Un parágrafo</p>
    </body>
</html>
```

O documento contén un `<p>`elemento que ten o `id`atributo co valor `message`:

```js
const p = document.getElementById('message');
console.log(p);
```

Saída:

```html
<p id="message">A paragraph</p> 
```

Despois de seleccionar un elemento, pode [engadir estilos ao elemento](https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/) , manipular os seus [atributos](https://www.javascripttutorial.net/dom/attributes/set-the-value-of-an-attribute/) e desprazarse aos elementos [pai](https://www.javascripttutorial.net/javascript-dom/javascript-get-parent-element-parentnode/) e [fillo](https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/) .

## Resumo

- Devolve `document.getElementById()`un elemento DOM especificado por un `id`ou `null`se non se atopou ningún elemento coincidente.
- Se varios elementos teñen o mesmo `id`, aínda que non é válido, devolve `getElementById()`o primeiro elemento que atopa.



# `getElementsByName`

**Resumo** : neste tutorial, aprenderás a usar o `getElementsByName()`método JavaScript para obter elementos cun nome dado nun documento.

## Introdución ao método JavaScript getElementsByName().

Cada elemento dun documento HTML pode ter un `name`atributo:

```html
<input type="radio" name="language" value="JavaScript">
```

A diferenza do `id`atributo, varios elementos HTML poden compartir o mesmo `value`atributo `name`así:

```html
<input type="radio" name="language" value="JavaScript">
<input type="radio" name="language" value="TypeScript">
```

Para obter todos os elementos cun nome especificado, usa o `getElementsByName()`método do `document`obxecto:

```js
let elements = document.getElementsByName(name); 
```

Acepta `getElementsByName()`a `name`que é o valor do `name`atributo de elementos e devolve unha vida `NodeList`de elementos.

A colección de elementos de retorno está en directo. Significa que os elementos de retorno actualízanse automaticamente cando se [insiren](https://www.javascripttutorial.net/dom/manipulating/insert-an-element-before-an-existing-element/) e/ou [eliminan](https://www.javascripttutorial.net/javascript-dom/javascript-removechild/) do documento elementos co mesmo nome.

## Exemplo de getElementsByName().

O seguinte exemplo mostra un grupo de radio formado por [botóns de opción](https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/) que teñen o mesmo nome ( `rate`).

Cando selecciona un botón de opción e fai clic no botón Enviar, a páxina mostrará o valor seleccionado, como `Very Poor`, `Poor`, `OK`, `Good`ou `Very Good`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JavaScript getElementsByName Demo</title>
</head>

<body>
    <p>Please rate the service:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Very poor" id="very-poor"> Very poor
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Poor" id="poor"> Poor
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="OK" id="ok"> OK
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Good"> Good
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Very Good" id="very-good"> Very Good
        </label>
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <p id="output"></p>
    <script>
        let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });
    </script>
</body>

</html>
```

Como funciona:

- En primeiro lugar, selecciona o botón enviar polo seu ID `btnRate`usando o `getElementById()`método.
- En segundo lugar, escoita o evento [de clic](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/) do botón enviar.
- En terceiro lugar, obtén todos os botóns de opción usando `getElementsByName()`e mostra o valor seleccionado no elemento de saída.

Teña en conta que aprenderá sobre [eventos](https://www.javascripttutorial.net/javascript-dom/javascript-events/) como `click`máis tarde. Polo momento, só tes que centrarte no `getElementsByName()`método.

<iframe src="https://www.javascripttutorial.net/sample/dom/selecting/getelementbyname.html" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

## Resumo

- O `getElementsByName()`devolve unha vida `NodeList`de elementos cun nome especificado.
- É `NodeList`un obxecto similar a unha matriz, non un obxecto [de matriz](https://www.javascripttutorial.net/javascript-array/) .



# `getElementsByTagName`

**Resumo** : neste tutorial, aprenderás a usar JavaScript `getElementsByTagName()`para seleccionar elementos cun nome de etiqueta determinado.

## Introdución ao `getElementsByTagName()`método JavaScript

É `getElementsByTagName()`un método do `document`obxecto ou un elemento DOM específico.

O `getElementsByTagName()`método acepta un nome de etiqueta e devolve unha lista `HTMLCollection`de elementos co nome de etiqueta coincidente na orde en que aparecen no documento.

O seguinte ilustra a sintaxe do `getElementsByTagName()`:

```
let elements = document.getElementsByTagName(tagName);
```

A colección de retorno `getElementsByTagName()`está activa, o que significa que se actualiza automaticamente cando se engaden e/ou eliminan do documento elementos co nome de etiqueta correspondente.

Teña en conta que `HTMLCollection`é un obxecto similar a unha matriz, como `arguments`o obxecto dunha función.

## `getElementsByTagName()`Exemplo de JavaScript

O seguinte exemplo ilustra como usar o `getElementsByTagName()`método para obter o número de etiquetas H2 no documento.

Cando fai clic no botón **Contar H2** , a páxina mostra o número de etiquetas H2:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript getElementsByTagName() Demo</title>
</head>
<body>
    <h1>JavaScript getElementsByTagName() Demo</h1>
    <h2>First heading</h2>
    <p>This is the first paragraph.</p>
    <h2>Second heading</h2>
    <p>This is the second paragraph.</p>
    <h2>Third heading</h2>
    <p>This is the third paragraph.</p>

    <button id="btnCount">Count H2</button>

    <script>
        let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });
    </script>
</body>

</html>
```

<iframe src="https://www.javascripttutorial.net/sample/dom/selecting/getelementsbytagname.html" height="400" style="box-sizing: border-box; margin: 0px; max-width: 100%; border: none; min-height: 70px; width: 1064px; padding: 1rem;"></iframe>

Cómo funciona:

- En primeiro lugar, seleccione o botón **Conta H2** usando o `getElementById()`método.
- En segundo lugar, conecta o evento de clic do botón a unha función anónima.
- En terceiro lugar, na función anónima, use o `document.getElementsByTagName()`para obter unha lista de `H2`etiquetas.
- Finalmente, mostra o número de `H2`etiquetas usando a `alert()`función.

## Resumo

- É `getElementsByTagName()`un método do obxecto documento ou elemento.
- Acepta `getElementsByTagName()`un nome de etiqueta e devolve unha lista de elementos co nome de etiqueta correspondente.
- O `getElementsByTagName()`devolve unha vida `HTMLCollection`de elementos. É `HTMLCollection`un obxecto semellante a unha matriz.





# `getElementsByClassName`

**Resumo** : neste tutorial aprenderás a usar o `getElementsByClassName()`método para seleccionar elementos polo nome da clase.

## Introdución ao método getElementsByClassName().

O `getElementsByClassName()`método devolve unha matriz de obxectos dos elementos fillos cun nome de clase especificado. O `getElementsByClassName()`método está dispoñible no `document`elemento ou en calquera outro elemento.

Ao chamar ao método no `document`elemento, busca todo o documento e devolve os elementos fillos do documento:

```
let elements = document.getElementsByClassName(names); 
```

Non obstante, ao chamar ao método nun elemento específico, devolve os descendentes dese elemento específico co nome da clase:

```
let elements = rootElement.getElementsByClassName(names); 
```

O método devolve o `elements`que é unha colección HTML en directo dos elementos coincidentes.

O parámetro *names* é unha cadea que representa un ou máis nomes de clase para coincidir; Para usar varios nomes de clases, sepáraos por espazo.

## Exemplos do método JavaScript getElementsByClassName().

Poñamos algúns exemplos de uso do `getElementsByClassName()`método.

Supoña que tes o seguinte documento HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript getElementsByClassName</title>
</head>
<body>
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
    <section>
        <article>
            <h2 class="secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="secondary">Example 2</h2>
        </article>
    </section>
</body>
</html> 
```

### 1) Chamando a JavaScript getElementsByClassName() nun exemplo de elemento

O seguinte exemplo ilustra como usar o `getElementsByClassName()`método para seleccionar os `<li>`elementos que son os descendentes do `<ul>`elemento:

```
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data); 
```

Saída:

```
['HTML', 'CSS', 'JavaScript', 'TypeScript'] 
```

Cómo funciona:

- En primeiro lugar, selecciona o `<ul>`elemento co nome da clase `menu`mediante o `getElementById()`método.
- A continuación, selecciona `<li>`os elementos, que son os descendentes do `<ul>`elemento, utilizando o `getElementsByClassName()`método.
- Finalmente, cree unha matriz do contido de texto dos `<li>`elementos tomando prestado o `map()`método do `Array`obxecto.

### 2) Chamando JavaScript getElementsByClassName() no exemplo de documento

Para buscar o elemento coa clase `heading-secondary`, utiliza o seguinte código:

```
let elements = document.getElementsByClassName('secondary');
let data = [].map.call(elements, elem => elem.textContent);

console.log(data); 
```

Saída:

```
["Example 1", "Example 2"] 
```

Este exemplo chama ao `getElementsByClassName()`método no `document`obxecto. Polo tanto, busca os elementos coa clase `secondary`en todo o documento.

## Resumo

- Use o método JavaScript `getElementsByClassName()`para seleccionar os elementos fillos dun elemento que ten un ou máis nomes de clase.





# `querySelector`

**Resumo** : neste tutorial aprenderás a usar JavaScript `querySelector()`e `querySelectorAll()`buscar elementos baseados nos selectores CSS.

## Introdución aos métodos JavaScript querySelector() e querySelectorAll().

É `querySelector()`un método da `Element`interface. O `querySelector()`método permítelle seleccionar o primeiro elemento que coincida cun ou máis selectores CSS.

O seguinte ilustra a sintaxe do `querySelector()`método:

```js
let element = parentNode.querySelector(selector); 
```

Nesta sintaxe, `selector`é un selector CSS ou un grupo de selectores CSS para coincidir cos elementos descendentes do `parentNode`.

Se a `selector`sintaxe CSS non é válida, o método xerará unha `SyntaxError`excepción.

Se ningún elemento coincide cos selectores CSS, `querySelector()`devolve `null`.

O `querySelector()`método está dispoñible no `document`obxecto ou en calquera `Element`obxecto.

Ademais do `querySelector()`, pode usar o `querySelectorAll()`método para seleccionar todos os elementos que coincidan cun selector CSS ou un grupo de selectores CSS:

```
let elementList = parentNode.querySelectorAll(selector); 
```

O `querySelectorAll()`método devolve unha estática `NodeList`de elementos que coinciden co selector CSS. Se ningún elemento coincide, devolve un `NodeList`.

Teña en conta que `NodeList`é un obxecto similar a unha matriz, non un obxecto de matriz. Non obstante, nos navegadores web modernos, pode usar o `forEach()`método ou o `for...of`bucle.

Para converter `NodeList`a unha matriz, usa o `Array.from()`método como este:

```
let nodeList = document.querySelectorAll(selector);
let elements = Array.from(nodeList); 
```

## Selectores básicos

Supoña que tes o seguinte documento HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>querySelector() Demo</title>
</head>
<body>
    <header>
        <div id="logo">
            <img src="img/logo.jpg" alt="Logo" id="logo">
        </div>
        <nav class="primary-nav">
            <ul>
                <li class="menu-item current"><a href="#home">Home</a></li>
                <li class="menu-item"><a href="#services">Services</a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to the JS Dev Agency</h1>

        <div class="container">
            <section class="section-a">
                <h2>UI/UX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem placeat, atque accusamus voluptas
                    laudantium facilis iure adipisci ab veritatis eos neque culpa id nostrum tempora tempore minima.
                    Adipisci, obcaecati repellat.</p>
                <button>Read More</button>
            </section>
            <section class="section-b">
                <h2>PWA Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat similique illo nobis quibusdam
                    commodi aspernatur, tempora doloribus quod, consectetur deserunt, facilis natus optio. Iure
                    provident labore nihil in earum.</p>
                <button>Read More</button>
            </section>
            <section class="section-c">
                <h2>Mobile App Dev</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos culpa laudantium consequatur ea!
                    Quibusdam, iure obcaecati. Adipisci deserunt, alias repellat eligendi odit labore! Fugit iste sit
                    laborum debitis eos?</p>
                <button>Read More</button>
            </section>
        </div>
    </main>
    <script src="js/main.js"></script>
</body>
</html> 
```

### 1) Selector universal

O selector universal denotase por `*`que coincide con todos os elementos de calquera tipo:

```css
*
```

O seguinte exemplo usa o `querySelector()`selecciona o primeiro elemento do documento:

```js
let element = document.querySelector('*'); 
```

E isto selecciona todos os elementos do documento:

```js
let elements = document.querySelectorAll('*'); 
```

### 2) Selector de tipo

Para seleccionar elementos polo nome do nodo, usa o selector de tipos, por exemplo, `a`selecciona todos os `<a>`elementos:

```
elementName
```

O seguinte exemplo atopa o primeiro `h1`elemento do documento:

```
let firstHeading = document.querySelector('h1'); 
```

E o seguinte exemplo atopa todos `h2`os elementos:

```
let heading2 = document.querySelectorAll('h2'); 
```

### 3) Selector de clases

Para atopar o elemento cunha clase CSS determinada, usa a sintaxe do selector de clases:

```
.className 
```

O seguinte exemplo atopa o primeiro elemento coa `menu-item`clase:

```
let note = document.querySelector('.menu-item'); 
```

E o seguinte exemplo atopa todos os elementos coa `menu`clase:

```
let notes = document.querySelectorAll('.menu-item'); 
```

### 4) Selector de ID

Para seleccionar un elemento en función do valor do seu id, usa a sintaxe do selector de id:

```
#id 
```

O seguinte exemplo atopa o primeiro elemento co id `#logo`:

```
let logo = document.querySelector('#logo'); 
```

Dado que `id`debe ser único no documento, `querySelectorAll()`non é relevante.

### 5) Selector de atributos

Para seleccionar todos os elementos que teñan un atributo determinado, utiliza unha das seguintes sintaxes do selector de atributos:

```js
[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*$*=value] 
```

O seguinte exemplo atopa o primeiro elemento co atributo `[autoplay]`con calquera valor:

```js
let autoplay = document.querySelector('[autoplay]'); 
```

E o seguinte exemplo atopa todos os elementos que teñen `[autoplay]`un atributo con calquera valor:

```js
let autoplays = document.querySelectorAll('[autoplay]'); 
```

## Agrupación de selectores

Para agrupar varios selectores, usa a seguinte sintaxe:

```css
selector, selector, ...
```

A lista de selectores fará coincidir calquera elemento cun dos selectores do grupo.

O seguinte exemplo atopa todos `<div>`e `<p>`elementos:

```
let elements = document.querySelectorAll('div, p'); 
```

##  Operadores

### 1) combinador descendente

Para atopar descendentes dun nodo, usa a sintaxe do combinador descendente de espazo ( ):

```css
selector selector
```

Por exemplo `p a`, coincidirá con todos `<a>`os elementos do `p`elemento:

```js
let links = document.querySelector('p a'); 
```

### 2)  Operador infantil

O `>`combinador fillo atopa todos os elementos que son fillos directos do primeiro elemento:

```css
selector > selector
```

O seguinte exemplo atopa todos `li`os elementos que están directamente dentro dun `<ul>`elemento:

```js
let listItems = document.querySelectorAll('ul > li'); 
```

Para seleccionar todos `li`os elementos que están directamente dentro dun `<ul>`elemento coa clase `nav`:

```js
let listItems = document.querySelectorAll('ul.nav > li'); 
```

### 3)  Operador xeral de irmáns

O `~`combinador selecciona irmáns que comparten o mesmo pai:

```css
selector ~ selector
```

Por exemplo, `p ~ a`coincidirá con todos `<a>`os elementos que seguen ao `p`elemento, inmediatamente ou non:

```js
let links = document.querySelectorAll('p ~ a'); 
```

### 4)  Operador de irmáns adxacentes

O combinador   `+`de irmáns adxacentes selecciona os irmáns adxacentes:

```css
selector + selector
```

Por exemplo, `h1 + a`coincide con todos os elementos que seguen directamente a `h1`:

```js
let links = document.querySelectorAll('h1 + a'); 
```

E selecciona o primeiro `<a>`que segue directamente a `h1`:

```js
let links = document.querySelector('h1 + a'); 
```

## Pseudo

### 1) Pseudoclases

O `:`pseudocoincide con elementos en función dos seus estados:

```css
element:state 
```

Por exemplo, `li:nth-child(2)`selecciona o segundo `<li>`elemento dunha lista:

```js
let listItem = document.querySelectorAll('li:nth-child(2)'); 
```

### 2) Pseudoelementos

Representan `::`entidades que non están incluídas no documento.

Por exemplo, `p::first-line`coincide coa primeira liña de todos os `p`elementos:

```js
let links = document.querySelector('p::first-line');     
```

## Resumo

- Busca `querySelector()`o primeiro elemento que coincide cun selector CSS ou un grupo de selectores CSS.
- Busca `querySelectorAll()`todos os elementos que coinciden cun selector CSS ou un grupo de selectores CSS.
- Un selector CSS define elementos aos que se aplica unha regra CSS.