---
title: WebDev 101
description: WebDev 101
---

O desenvolvemento web é unha das mellores profesións do mundo. Traballas nunha plataforma con case **5.000 millóns de usuarios activos ao día**, todos conectados como as neuronas dun cerebro superintelixente global. Este sistema pode **curar enfermidades, eliminar a pobreza, avanzar na ciencia** e moitas outras cousas… aínda que na práctica úsase principalmente para **compartir memes, crear relacións parasociais, amplificar dramas e, sobre todo, xerar enormes cantidades de diñeiro**.

Se queres entrar neste mundo, hai moitas cousas que debes aprender. Nesta introdución ao desenvolvemento web, veremos **101 conceptos clave** que necesitas coñecer para crear aplicacións web full stack.

---

## **1. A Internet e a Web**
### 📡 Que é a Internet?
- A internet é unha rede de miles de millóns de máquinas conectadas entre si.
- Foi oficialmente creada o **1 de xaneiro de 1983** co establecemento do **conxunto de protocolos de Internet (TCP/IP)**.
- Cada máquina na rede recibe un **enderezo IP único** que permite a súa identificación.
- A transmisión de datos realízase dividindo a información en **pequenos paquetes** que viaxan a través de cables de fibra óptica, routers e modems.

### 🌍 A diferenza entre Internet e a Web
- A **Internet** é a infraestrutura (hardware) que conecta os dispositivos.
- A **Web (World Wide Web)** é unha capa de software que permite acceder a páxinas mediante o **Protocolo de Transferencia de Hipertexto (HTTP)**.
- As páxinas web teñen un **URL (Uniform Resource Locator)** que permite localizalas.

### 🖥️ O papel do navegador
- Os usuarios acceden ás páxinas web a través dun **navegador web** (Chrome, Firefox, etc.).
- O navegador actúa como **cliente**, que fai solicitudes HTTP aos **servidores web** que aloxan o contido das páxinas.

### 🌐 O Sistema de Nomes de Dominio (DNS)
- Cada páxina web ten un **nome de dominio** (exemplo.com).
- O **DNS** traduce os nomes de dominio en **enderezos IP reais**.

---

## **2. A estrutura das páxinas web**
### 🏗️ HTML: A linguaxe de marcas
- As páxinas web están escritas en **HTML (HyperText Markup Language)**.
- HTML organiza a información en **etiquetas e elementos** como `<p>` (parágrafos) e `<h1>` (cabezallos).
- Permite definir formularios con `<input>` e `<select>` para recibir información do usuario.
- O **DOM (Document Object Model)** representa a estrutura xerárquica dunha páxina web.

### 🎨 CSS: A linguaxe de estilos
- **CSS (Cascading Style Sheets)** define a aparencia dos elementos HTML.
- Métodos para aplicar estilos:
  - **Estilos en liña**: usando o atributo `style`.
  - **Estilos internos**: dentro dunha etiqueta `<style>`.
  - **Estilos externos**: en ficheiros `.css` vinculados ao documento.
- **O modelo de caixa** en CSS**:
  - `margin`: Espazo exterior do elemento.
  - `border`: Borde do elemento.
  - `padding`: Espazo entre o contido e o borde.

### 📱 Deseño responsivo
- Os **media queries** permiten cambiar estilos segundo o tamaño da pantalla.
- Ferramentas clave:
  - **Flexbox**: Para organizar elementos en filas ou columnas.
  - **Grid**: Para disposicións máis complexas en múltiples filas e columnas.

---

## **3. JavaScript e a interactividade**
### 🚀 Introdución a JavaScript
- **JavaScript (JS)** fai as páxinas interactivas.
- Execútase dentro dun navegador a través dun `<script>`.
- Normalmente escríbese en ficheiros externos `.js`.

### 🏗️ Estrutura de JavaScript
- JS é unha linguaxe de programación baseada en **ECMAScript**.
- Tipos de variables:
  - `let`: Pode ser reasignada.
  - `const`: Non pode ser modificada.
- Soporta **tipado dinámico**, aínda que moitos desenvolvedores usan **TypeScript** para engadir tipado estático.

### 🎛️ Manipulación do DOM
- JS pode modificar o contido dunha páxina accedendo aos seus elementos co método `document.querySelector()`.
- Permite **escoitar eventos** como:
  - `click` → Cando se fai clic nun elemento.
  - `input` → Cando se introduce texto nun formulario.

### 🔄 POO en JavaScript
- JS usa **herdanza prototípica** en vez de clases tradicionais.
- A maioría dos desenvolvedores usan **frameworks como React, Vue ou Svelte** para organizar o código.

---

## **4. Backend e Servidores**
### 🖥️ Node.js e a execución no servidor
- **Node.js** permite executar código JavaScript fóra do navegador.
- Usa un modelo de execución **asincrónico e baseado en eventos** para manexar múltiples solicitudes de forma eficiente.
- Os paquetes de Node distribúense a través de **npm (Node Package Manager)**.

### 🌍 Métodos HTTP e API REST
- Unha aplicación web adoita seguir o modelo **cliente-servidor**.
- Métodos HTTP máis usados:
  - `GET`: Solicita datos do servidor.
  - `POST`: Envia datos ao servidor.
  - `PATCH/PUT`: Modifica datos.
  - `DELETE`: Elimina datos.

### 🛢️ Bases de datos
- As aplicacións web necesitan gardar información sobre usuarios e contidos.
- Tipos de bases de datos:
  - **SQL** (MySQL, PostgreSQL) → Bases de datos relacionais.
  - **NoSQL** (MongoDB, Firebase) → Para datos máis flexibles.

### 🏗️ Arquitecturas de renderizado
- **Server-Side Rendering (SSR)** → O servidor xera a páxina HTML e envíalla ao cliente.
- **Single Page Applications (SPA)** → A páxina cárgase unha vez e JS manexa a navegación.
- **Static Site Generation (SSG)** → As páxinas xeradas previamente para un rendemento óptimo.

---

## **5. Despregamento e Infraestrutura**
### 🚀 Publicación de aplicacións web
- Os proxectos pásanse dun ambiente de desenvolvemento a un **servidor real**.
- O máis común é usar **servizos na nube como AWS, Vercel ou Netlify**.

### 📦 Contedores e virtualización
- **Docker** permite empaquetar aplicacións en contedores para unha execución consistente.
- **Plataformas como Kubernetes** axudan a escalar aplicacións automaticamente.

### 🔐 Autenticación e seguridade
- **OAuth, JWT, OpenID** → Métodos de autenticación para usuarios.
- **HTTPS** → Encripta o tráfico entre cliente e servidor.
- **XSS, CSRF, SQL Injection** → Ataques comúns que deben evitarse cun bo desenvolvemento seguro.

---

## **Conclusión**
Isto é só o **1% do que necesitas saber para ser un desenvolvedor web full stack**. Pode parecer moito, pero non te preocupes: **case ninguén o sabe todo de memoria**. A maioría dos profesionais buscan información en Google sobre a marcha. 

Se chegaches ata aquí, parabéns! Acabas de superar a introdución ao desenvolvemento web. 🚀

<!--O desenvolvemento web é o mellor traballo do mundo

O desenvolvedor web crea para unha plataforma con case 5.000 millóns de usuarios activos diarios. Todos conectados entre si como as neuronas dun cerebro superintelixente global-

Un sistema que pode curar enfermidades, eliminar a pobreza, avanzar a ciencia e cousas así, 

Aínda que principalmente se adoite para compartir memes, crear relacións parasociais, amplificar o drama e, o máis importante, gañar toneladas e toneladas de diñeiro

Se queres entrar, terás que saber algunhas cousas sobre o desenvolvemento web

Botaremos unha ollada.

## 101 conceptos que necesitarás saber ao crear aplicacións web de pila completa 

1. Internet, é unha rede de miles de millóns de máquinas conectadas entre si, no que podes ler, publicar ou escribir correos electrónicos
2. Hai moita xente que o usa e se comunica
3. Naceu oficialmente o 1 de xaneiro de 1983 grazas ao establecemento da suite de protocolos de Internet que normalizou a forma en que se comunican os ordenadores. 
4. O protocolo de Internet utilízase para identificar os diferentes ordenadores da rede. Asignándolles a cada un deles un enderezo IP único
5. Os ordenadores conectados poden enviar datos de ida e volta co protocolo de control de transmisión, que divide os datos nun grupo de pequenos paquetes como pezas de crebacabezas e despois envíaos a través dun grupo de compoñentes físicos como a fibra óptica. cables e módems antes de que o ordenador receptor os reúna
6. Pódese entender Internet como un enorme e complexo conxunto de hardware, pero Internet non é o mesmo que a web
7. A World Wide Web é como un software que se atopa por enriba da Internet e onde a xente pode acceder a páxinas web co... 
8. Protocolo de transferencia de hipertexto...
9. ...que dá a cada páxina de contido un localizador de recursos uniforme ou URL. 
10. Os humanos normalmente usan unha ferramenta chamada navegador web para acceder a un URL. Nese navegador se pode renderizar visualmente o contido vinculado a dito localizador. 
11. A maquina desde a que se navega chámase cliente porque está a consumir información,
12. No outro extremo dese URL hai outro ordenador chamado servidor, que recibe unha solicitude HTTP do cliente e envía unha resposta que entrega o contido da páxina web. 
13. Cada páxina web ten un nome de dominio único como fireship.io ou example.com
14. Calquera pode rexistrar un nome de dominio a través dun rexistrador acreditado por ICANN, unha organización sen ánimo de lucro responsable de supervisar os espazos de nomes en Internet
15. Cando navegas a un dominio en Internet, o navegador envía a través do DNS, ou sistema de nomes de dominio, asignado a un enderezo IP real nun servidor nalgún lugar
16. DNS é como o directorio telefónico de Internet
17. Cando miras unha páxina web o contido real que ves está representado pola linguaxe de marcado de hipertexto
18. A maioría dos navegadores teñen ferramentas de desenvolvemento onde podes inspeccionar a estrutura do HTML en calquera momento
19. Para crear a túa propia páxina web, quererás un editor de texto como vs code
20. Un documento HTML é só unha colección de elementos onde cada elemento se define cunha etiqueta de apertura e outra de peche, e con algún contido no medio como un parágrafo, un título,...
21. Un documento HTML tamén ten elementos que xestionan a entrada do usuario, como os elementos de selección -`select`- e entrada - ``input``- que se usan para construír formularios
22. Ademais os elementos poden ter un ou máis atributos para cambiar o seu comportamento. Por exemplo, un ``input`` pode ter un tipo como ``text`` ou ``number`` que o navegador mostrará de forma diferente para recoller o valor axeitado
23. O elemento que engade o hipertexto en HTML é a etiqueta `a`ou áncora: unha ligazón que permite que unha páxina navegue a outra páxina diferente en función do seu URL. 
24. Os elementos están aniñados nunha xerarquía
25. Cando se reciben os datos dunha URL no navegador este forma con elementos HTML o modelo de obxecto do documento ou DOM a partir do elemento raíz
26. Unha páxina web divídese en dúas partes: 
    1. unha cabeceira - `head` - que contén información invisible como os metadatos, e un título que se amosara na lapela do navegador
    2. e un corpo -`body`- para o contido principal que será o que o usuario final verá realmente
27. A razón pola que envolvemos todo en etiquetas é para darlle aos navegadores e bots suxestións sobre o significado semántico da páxina web
28. Isto permite aos motores de busca mostrar os resultados correctamente e tamén axuda coa accesibilidade en dispositivos como lectores de pantalla que permiten o desfrute de calquera persoa independentemente da súa discapacidade, do contido que o teu ordenador le - un texto, broma ou botón "Me gusta" ou "Subscríbete". 
29. Un dos elementos máis comúns cos que atoparás é ``div`` ou división para definir unha sección da páxina web. Por si só un ``div`` pode parecer que non fai nada
30. Como facemos que este sitio web pareza xenial?  A segunda linguaxe que necesitarás aprender como desenvolvedor web é CSS 
31. As follas de estilo en cascada ou CSS permiten cambiar a aparencia dos elementos HTML. Para conseguir isto pódese empregar un estilo en liña usando o atributo ``style`` nun elemento
32. Este atributo de estilo en si contén unha colección de propiedades e valores que cambian a aparencia do elemento co que podemos facer que a cor de fondo sexa negra e a cor do texto vermella ou o que creamos axeitado. Este estilo en liña só se aplicará a ese elemento
33. Sen embargo, a cascada CSS pódese aplicar a varios elementos ao mesmo tempo, proporcionando unha mellor reutilización do código, A opción é mover o noso código a unha etiqueta de estilo - `style`- dentro da cabeceira do documento
34. Para que este código funcione dende aí, primeiro necesitaremos definir un selector para que saiba a que elementos dirixirse. 
35. O selector, por exemplo, pode dirixirse a todos os elementos do parágrafo da páxina -`p`-. Pero iso é demasiado amplo, p
36. Podemos ser máis detallados definindo unha clase que CSS se poida aplicar a un ou máis elementos co atributo ``class``. As clases poden aplicar diferentes propiedades de estilo ao mesmo elemento
37. CSS contén unha morea de regras de especificidade que determinan que estilos son relevantes para un elemento dun xeito evidente
38. A maioría das veces, non usamos estas etiquetas de estilo na cabeceira senón que usamos unha folla de estilo externa que está ligada á páxina web na cabeceira do documento
39. O máis difícil de aprender é o deseño e o posicionamento. 
40. Pensa en cada elemento HTML como nunha caixa. O exterior desa caixa está envolto cun bordo, o recheo interno e as marxes con outros elementos.
41. As caixas ocupan un espazo na páxina de arriba abaixo
42. Algúns elementos como o título -`h1`, `h2`,... `h6`- teñen unha visualización de bloque por defecto, o que significa que ocupan todo o espazo horizontal dispoñible
43. Outros elementos como a imaxe - `img`- móstranse en liña, o que significa que poden aliñarse horizontalmente uns ao lado doutros
44. O problema é que a posición predeterminada dos elementos HTML normalmente non é desexable, pódese cambiar personalizando a propiedade de posición dun elemento. 
45. O posicionamento relativo - `relative`- permite que un elemento se mova un determinado número de píxeles desde a súa posición normal. 
46. O posicionamento absoluto -`absolute`-  é similar e os valores de posición son parecidos e se aplican en relación ao seu antepasado máis próximo
47. Logo temos o posicionamento fixo que manterá un elemento na pantalla aínda que o usuario se afaste del porque está fixado en relación á vista ou *viewport*
48. Cambiar a posición dun elemento é unha cousa posible pero un dos maiores desafíos dos desenvolvedores web.
49. Outro reto é conseguir que os usuarios poidan acceder á túa páxina web desde todo tipo de pantallas diferentes e quedar ben en todas elas. Se trata de deseños receptivos que se adaptan sen problema a pantalla sexa cal sexa o seu tamaño.
50. Css ofrece unha morea de ferramentas diferentes para axudarche a que isto suceda, unha delas son as consultas de medios - `media queries`- que che permiten unha consulta de medios para obter información sobre o dispositivo que está a renderizar a páxina web e aplicar diferentes estilos en consecuencia, 
51. CSS ofrece ferramentas de deseño pensadas para resolver a responsividade como ``flexbox``. 
52. Aplicar esta flexibilidade - `display:flex`- permite aos pais controlar o fluxo dos fillos para crear facilmente filas e columnas aínda para os esquemas máis complexos. p
53. Pódese usar para controlar varias filas e columnas ao mesmo tempo
54. Aínda así CSS non adoita considerarse unha linguaxe de programación completa por si só, pero ten mecanismos como ``calc`` para realizar operacións matemáticas e propiedades personalizadas que son como variables que podes reutilizar. 
55. Non obstante, o *CSS de vainilla* raramente é suficiente, e moitos desenvolvedores optan por amplialo con ferramentas como *SASS* que engaden funcións programáticas adicionais
56. O terceiro idioma que necesitarás coñecer como desenvolvedor web é JavaScript 
57. Tecnicamente non necesitas JavaScript para construír un sitio web, pero a maioría dos desenvolvedores optan por usalo para facer a interface de usuario máis interactiva 
58. Para executar código JavaScript nunha páxina web incluímolo cunha etiqueta `script` e escribindo algún código JavaScript dentro dela.
59. O navegador interpreta o HTML desde arriba abaixo e executa este código de script cando o atopa no DOM
60. Na maioría dos casos, JavaScript escríbese nun arquivo separado, e a continuación é referenciado como valor do atributto `src` na etiqueta do script
61. Normalmente é preferible que este código se execute despois de que se cargue o contido do DOM, o que se pode realizar co atributo`defer` 
62. JS é unha linguaxe de programación grande e complicada que se coñece máis formalmente como ECMAScript e está estandarizada en todos os principais navegadores. 
63. En JS hai varias formas diferentes de declarar unha variable
64. Cando unha variable pode ser reasignada no futuro se usa a palabra clave ``let`` mentres que unha variable que non se pode reasignar usa a palabra clave ``const``
65. JS é unha linguaxe de escritura dinámica, o que significa que non se necesitan anotacións de tipo, o que non sempre é ideal, polo que moitos desenvolvedores agora escollen Typescript como alternativa para engadir escritura estática enriba de JavaScript
66. Unha das razóns máis comúns polas que usarías prioritariamente JavaScript é xestionar eventos
67. Sempre que o usuario fai algo nunha páxina web, o navegador emite un evento que podes escoitar como un clic do rato ao moverse nun formulario ou cambiar de paxina. Podemos acceder a estes eventos como a un documento usando a API do navegador, que neste caso ofrece un método chamado ``query selector`` que nos permite coller un elemento cun selector CSS
68. Unha vez que teñamos ese elemento configurado como variable, podemos asignarlle un escoita de eventos -`event listener`-
69. Unha escoita de eventos é unha función que se execúta sempre que se fai clic no botón do rato o se preme a tecla `enter`
70. A linguaxe JS ten unha variedade de estruturas de datos integradas, como unha matriz para representar unha colección de valores, pero a estrutura de datos máis fundamental é o obxecto tamén chamado dicionario ou mapa hash. 
71. Calquera cousa que non sexa un tipo primitivo como unha cadea -`string`- ou un número herda a súa funcionalidade base da clase de obxecto, que depende dunha técnica chamada herdanza prototípica na que un obxecto pode ser clonado varias veces para crear unha cadea de antepasados onde o neno herda as propiedades e métodos dos seus antepasados.
72. Isto é algo diferente da clase, baseada tamén na herdanza, que é algo confusa porque JavaScript tamén admite clases, pero estas clases son só azucre sintáctico para a herdanza prototípica, pero agora estamos quedando un nivel demasiado baixo que a maioría dos desenvolvedores non queren ter que tocar a palabra prototipo, entón o que temos. En vez diso, é usar un marco front-end como Vue, React ou Angular, entre outros. Todos estes marcos fan o mesmo dunha forma lixeiramente diferente, que é representar a interface de usuario como unha árbore de compoñentes que un compoñente pode encapsular HTML CSS e JavaScript nun formato que semella o seu propio elemento HTML personalizado o máis importante é que producen código declarativo que describe exactamente o que fai a interface de usuario e que é moito máis doado de traballar que o código imperativo que normalmente obtería cun simple JavaScript de vainilla neste momento. mira a pila de frontend pero agora necesitamos cambiar de marcha ao back-end comezando por nodejs, que é un tempo de execución do servidor baseado en JavaScript, podes executar código do lado do servidor para aplicacións web en todo tipo de idiomas diferentes, pero o node é o máis popular porque depende da mesma linguaxe que o navegador, tamén está baseado no mesmo motor v8 que permite que o navegador Chrome execute código nun único bucle de eventos sen bloqueo, isto permite que o nodo xestione moitas conexións simultáneas de forma rápida e eficiente, ademais de permite aos desenvolvedores compartir o traballo de forma remota grazas ao xestor de paquetes de nodos, un paquete tamén se chama módulo, que é só un ficheiro que contén algún código cunha declaración de exportación para que se poida usar noutro ficheiro o ficheiro pode consumir un módulo cunha declaración de importación. pero agora temos que pensar en como entregar o sitio web real do servidor ao cliente, a opción clásica é a representación do lado do servidor neste enfoque, o cliente fará unha solicitude de obtención para un determinado URL, cada solicitude ten un método http e git significa que quere recuperar datos dun servidor en oposición a métodos como a publicación e o parche, onde a intención é modificar os datos, o servidor recibe a solicitude e despois xera todo o HTML no servidor e envíao de volta ao cliente como resposta a resposta contén un código de estado como 200 para éxito ou niveis 4 e 500 para erros, por exemplo, se a páxina web non existe, o servidor devolverá un código de estado 404 que probablemente xa vira antes como usuario web ssr é moi popular pero nalgúns casos pode que non sexa o suficientemente rápido outro enfoque é a aplicación dunha soa páxina con este enfoque o servidor só representa un shell para o URL raíz, entón JavaScript xestiona a representación para todas as outras páxinas do sitio web o HTML xérase case na súa totalidade no lado do cliente no navegador facendo que o sitio web se sinta máis como unha aplicación nativa de iOS ou Android cando a aplicación necesita máis datos, aínda fai unha solicitude http pero só solicita unha cantidade mínima de datos como json, que se denomina formato de intercambio de datos que pode ser entendido por calquera linguaxe de programación. pode resultar nunha excelente experiencia de usuario, pero pode ser moi difícil que os bots como os motores de busca e as vistas previas de ligazóns de redes sociais comprendan o contido da páxina, isto levou a outra estratexia de representación chamada xeración de sitios estáticos, neste caso, todas as páxinas web do sitio son cargadas. un servidor por adiantado que permita aos bots obter a información que necesitan, un framework JavaScript front-end adoita facerse cargo de hidratar o HTML para facelo totalmente interactivo e comportarse como unha única páxina. O rendemento da aplicación é extremadamente importante e quererá usar ferramentas como faro para optimizar métricas como a primeira pintura de contido e o tempo para interactuar agora para implementar un destes patróns a maioría dos desenvolvedores usarán un marco de pila completo como next js ruby on rails laravel e así por diante abstraen moitas das cousas máis tediosas que os desenvolvedores non fan. quero xestionar un dos cales son os paquetes de módulos, que son ferramentas como webpack e veed que levan todo o teu CSS e HTML de JavaScript e o empaquetan dun xeito que poida funcionar nun navegador. Tamén poden proporcionar un linter como eslint para avisalo. cando o teu código non segue as pautas de estilo axeitadas e case esquecín que definitivamente necesitarás unha base de datos para construír unha aplicación web de pila completa porque necesitas un lugar onde almacenar os teus datos, como datos dos teus usuarios, pero para conseguir iso. Agora, antes de implementar o teu código, terás que probalo cun servidor web. Hai ferramentas como nginx e apache, creas un servidor http pero o teu Probablemente o framework fará isto por ti atendendo os ficheiros en localhost, o que fai que o teu propio enderezo IP se comporte como un servidor web remoto cando chegue o momento de desactivar

Probablemente uses un gran provedor de nube como aws a maioría das aplicacións están en contenedores con Docker, o que fai que sexan fáciles de escalar e baixar en función da cantidade de tráfico que reciben. Hai moitas ferramentas que funcionan como plataforma como servizo para xestionar esta infraestrutura por ti a cambio do teu diñeiro ou se non queres quedar atrapado nunha corporación tecnolóxica xigante, podes aloxar a túa aplicación nunha cadea de bloques descentralizada con web3 e iso é aproximadamente un 1% do que necesitarás saber para chamarte programador web de pila completa se isto parece abrumador, non te preocupes demasiado case ninguén sabe o que diaños están facendo e todos usamos Google para descubrir cousas sobre a marcha parabéns acabas de pasar o desenvolvemento web 101 grazas por mirando e vémonos na próxima



web development is the best job in the world you build on a platform with nearly 5 billion daily active users all connected together like the neurons of a global super intelligent brain a system that can cure disease eliminate poverty advance science and stuff like that but mostly it's used to share memes create parasocial relationships amplify drama and most importantly make tons and tons of money if you want to get into it you're gonna need to know some stuff like a lot of stuff in web development 101 we'll take a look at a 101 different concepts that you'll need to know when building full stack web apps this is the internet it's a network of billions of machines connected together what do you write to it like mail no a lot of people use it and communicate i guess they can communicate with nbc writers and producers alison can you explain what internet is it was officially born on january 1 1983 thanks to the establishment of the internet protocol suite which standardized the way these computers communicate the internet protocol is used to identify different computers on the network by assigning each one of them a unique ip address these computers can then send data back and forth with the transmission control protocol it breaks data into a bunch of small packets kind of like puzzle pieces then sends them through a bunch of physical components like fiber optic cables and modems before they're put back together by the receiving computer you can think of the internet as hardware but the internet is not the same thing as the web the world wide web is like software that sits on top of the internet where people can access web pages with the hypertext transfer protocol what's special about it is that it gives every page of content a uniform resource locator or url humans typically use a tool called a web browser to access a url where it can be rendered visually on their screen the browser is called the client because it's consuming information but on the other end of that url there's another computer called a server it received an http request from the client then sent a response containing the web page content these are called http messages but more on that later what's interesting is that every web page has a unique domain name like fireship.io or example.com a domain name can be registered by anyone via a registrar who's accredited by icann a nonprofit responsible for overseeing namespaces on the internet when you navigate to a domain in a browser it gets routed through the domain name system that maps these names to an actual ip address on a server somewhere dns is like the phone book of the internet now when you look at a webpage the actual content you see is represented by hypertext markup language most browsers have devtools where you can inspect the structure of the HTML at any time to build your own web page you'll want a text editor like vs code an HTML document is just a collection of elements where an element is an opening and closing tag with some content in the middle like a paragraph and heading it also has elements that handle user input like the select and input elements which are used to build forms in addition elements can have one or more attributes to change their behavior for example an input can have a type like text or number which the browser will render differently to collect the appropriate value but the element that puts the hypertext in HTML is the a tag or anchor it's a link that allows one page to navigate to a different page based on its url these elements are nested together in a hierarchy to form the document object model or dom from the root element a web page is split into two parts the head contains invisible content like metadata and a title then we have the body for the main content that the end user actually sees the reason we wrap everything in tags is to give browsers and bots hints about the semantic meaning of the web page this allows search engines to display results properly and also helps with accessibility for devices like screen readers that allow anybody regardless of disability to enjoy the content my computer reads me the text bro smash that like button and subscribe one of the most common elements you'll come across is div or division to define a section of the webpage on its own a div might not seem to do anything and currently produces this plain black and white website that begs the question how do we make this website look cool the second language you'll need to learn as a web developer is cascading stylesheets or CSS which allows you to change the appearance of the HTML elements one way to accomplish that is with an inline style using the style attribute on an element the style itself contains a collection of properties and values that change the appearance of the element like we might make the background color black and the text color red what we've created here is an inline style that will only be applied to this one element however CSS cascades which means it can be applied to multiple elements at the same time providing better code reusability another option is to move our code into a style tag but to make the code work we'll first need to define a selector so it knows which elements to target a selector for example can target all of the paragraph elements on the page but that's too broad we can be more granular by defining a class that style can then be applied to one or more elements with the class attribute what's interesting though is that we now have classes that apply different styles to the same element CSS contains a bunch of specificity rules that determine which styles are relevant to an element in a way that's self-evident and elegant like a benevolent elephant most often though we don't use style tags but instead use an external style sheet which is linked to the webpage and the head of the document when it comes to CSS by far the most difficult thing to learn is layout and positioning think of every element like a box the outside of that box is wrapped with padding border and margin the boxes then take up space on the page from top to bottom some elements like heading have a display of block by default which means they take up all available horizontal space other elements like image are displayed inline which means they can line up horizontally side by side the problem is that the default position is usually not desirable it can be changed by customizing the position property on an element relative positioning allows an element to move a certain number of pixels from its normal position absolute positioning is similar but the position values are relative to its nearest ancestor and then we have fixed positioning which will keep an element on the screen even as the user scrolls away from it because it's fixed to the entire viewport changing the position of an element is one thing but one of the biggest challenges web developers face is creating responsive layouts users can access your web page from all kinds of different screens and it should look good on all of them CSS provides a bunch of different tools to help make this happen one of which is media queries a media query allows you to get information about the device that's rendering the web page and apply different styles accordingly but more importantly it provides layout tools like flexbox applying display flex allows the parent to control the flow of the children to easily create rows and columns for more complex layouts display grid can be used to control multiple rows and columns at the same time now CSS is usually not considered a turing complete programming language on its own however it does have mechanisms like calc to perform mathematical operations and custom properties which are like variables that you can reuse in multiple places vanilla CSS is rarely enough though and many developers choose to extend it with tools like sas that add additional programmatic features on top of it and that brings us to the third language you'll need to know as a web developer JavaScript technically you don't need JavaScript to build a website however most developers choose to use it to make the user interface more interactive to run JavaScript code on a web page open up a script tag then write some JavaScript code inside of it the browser interprets the HTML from top to bottom and runs this code when it encounters it in the dom in most cases JavaScript is written in a separate file then referenced as the source on the script tag usually it's preferred that this code runs after the dom content has loaded which can be accomplished with the defer attribute js is a big complicated programming language which is more formally known as ecmascript and is standardized in all major browsers there are several different ways to declare a variable a variable that might be reassigned in the future uses the let keyword while a variable that can't be reassigned uses const it's a dynamically typed language which means no type annotations are necessary that's not always ideal so many developers choose typescript as an alternative to add static typing on top of JavaScript now one of the most common reasons you would use JavaScript in the first place is to handle events whenever the user does something on a web page the browser emits an event that you can listen to like a click mouse move form input change and so on we can tap into these events using browser apis like document which in this case provides a method called query selector that allows us to grab an element with a CSS selector once we have that element set as a variable we can then assign an event listener to it an event listener is a function that will be called or re-executed anytime the button is clicked the language has a variety of built-in data structures like an array to represent a collection of values but the most fundamental data structure is the object also commonly called a dictionary or hashmap anything that's not a primitive type like a string or number inherits its base functionality from the object class it relies on a technique called prototypal inheritance where an object can be cloned multiple times to create a chain of ancestors where the child inherits the properties and methods of its ancestors this is different from class-based inheritance which is kind of confusing because JavaScript also supports classes however these classes are just syntactic sugar for prototypal inheritance but now we're getting a little too low level most developers don't ever want to have to touch the word prototype so what we do instead is use a front-end framework like react view spelt angular and so on all of these frameworks do the same thing in a slightly different way which is represent the ui as a tree of components a component can encapsulate HTML CSS and JavaScript into a format that looks like its own custom HTML element most importantly they produce declarative code that describes exactly what the ui does and that's much easier to work with than imperative code that you would normally get with just plain vanilla JavaScript at this point we've taken a look at the frontend stack but now we need to switch gears to the back end starting with nodejs which is a server-side runtime based on JavaScript you can run server-side code for web applications in all kinds of different languages but node is the most popular because it relies on the same language as the browser it's also based on the same v8 engine that powers the chromium browser to run code in a single threaded non-blocking event loop this allows node to handle many simultaneous connections quickly and efficiently in addition it allows developers to share work remotely thanks to the node package manager a package is also called a module which is just a file that contains some code with an export statement so it can be used in another file the file can consume a module with an import statement but now we need to think about how to deliver the actual website from the server to the client the classic option is server side rendering in this approach the client will make a get request for a certain url every request has an http method and git means you want to retrieve data from a server as opposed to methods like post and patch where the intent is to modify data the server receives the request and then generates all the HTML on the server and sends it back to the client as a response the response contains a status code like 200 for success or levels 4 and 500 for errors for example if the web page doesn't exist the server will return a 404 status code which you've likely seen before as a web user ssr is extremely popular but in some cases it may not be fast enough another approach is the single page application with this approach the server only renders a shell for the root url then JavaScript handles the rendering for all other pages on the website the HTML is generated almost entirely client-side in the browser making the website feel more like a native ios or android app when the app needs more data it still makes an http request but only requests a minimal amount of data as json which is called a data interchange format that can be understood by any programming language this can result in a great user experience however it can be very difficult for bots like search engines and social media link previews to understand content on the page this led to another rendering strategy called static site generation in this case every webpage on the site is uploaded to a server in advance allowing bots to get the information they need a front-end JavaScript framework usually takes over to hydrate the HTML to make it fully interactive and behave like a single page application performance is extremely important and you'll want to use tools like lighthouse to optimize metrics like first contentful paint and time to interactive now to implement one of these patterns most developers will use a full stack framework like next js ruby on rails laravel and so on they abstract away many of the more tedious things developers don't want to deal with one of which is module bundlers which are tools like webpack and veed that take all of your JavaScript CSS and HTML and package it in a way that can actually work in a browser they might also provide a linter like eslint to warn you when your code doesn't follow the proper style guidelines oh and i almost forgot you are definitely going to need a database to build a full stack web application because you need somewhere to store your data like data about your users but in order to get that data you'll need to give users a way to log in via a process called user authentication now before you deploy your code you'll need to test it with a web server there are tools like nginx and apache you create an http server but your framework will likely do this for you by serving the files on localhost which makes your own ip address behave like a remote web server when it comes time to deploy you'll likely use a big cloud provider like aws most apps are containerized with docker making them easy to scale up and down based on the amount of traffic that they receive there are many tools out there that function as a platform as a service to manage this infrastructure for you in exchange for your money or if you don't want to get locked in with a giant tech corporation you might host your app on a decentralized blockchain with web3 and that's about one percent of what you'll need to know to call yourself a full stack web developer if that seems overwhelming don't worry too much almost nobody knows what the hell they're doing and we all just use google to figure things out on the fly congratulations you just passed web development 101 thanks for watching and i will see you in the next one-->

ref: https://www.youtube.com/watch?v=erEgovG9WBs