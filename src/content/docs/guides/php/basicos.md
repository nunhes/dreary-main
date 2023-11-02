---
title: Que é PHP?
description: Nocións básicas sobre esta linguaxe de guión
---


PHP é unha [linguaxe de programación](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-son-los-lenguajes-de-scripting/) do lado servidor de código aberto que se usa principalmente para **crear páxinas web dinámicas** . A abreviatura naceu orixinalmente de “Personal Home Page Tools”, para logo converterse no acrónimo de “**Hypertext Preprocessor** ”.

Mentres que as linguaxes do lado do cliente como HTML, CSS ou JavaScript son interpretadas polo navegador web no momento de abrir unha páxina, o código PHP **execútase no servidor web** . Alí, os scripts PHP xeran o código HTML que despois se envía ao navegador. Daquela o navegador, ou cliente, non recibe o código real (o script PHP), senón o resultado da súa execución.

O ámbito principal de PHP é **a programación do servidor,** o que o fai moi axeitado para páxinas e aplicacións dinámicas. Outras áreas de implantación son a creación de aplicacións de escritorio ou a programación de liña de comandos. A pesar de ter unha sintaxe sinxela, PHP ofrece un número notable de capacidades. PFP distínguese polo seu amplo soporte de bases de datos, pódese utilizar en todo tipo de plataformas e está cuberta por unha licenza **especial** **[PHP](http://www.php.net/license/3_01.txt)** que permite o seu uso gratuíto e a modificación do código fonte, o que a converte nunha linguaxe moi apreciada polos programadores.

Algúns dos **sistemas de xestión de contidos** - CMS- máis populares, como WordPress, TYPO3, Joomla ou Drupal, están baseados en PHP. Unha análise de mercado realizada por [W3Techs](https://w3techs.com/technologies/overview/programming_language/all) establece que esta linguaxe de secuencias de comandos utilízase no 76,8% das páxinas da World Wide Web (datos do outubro de 2023), o que indica que PHP é, con diferenza, a linguaxe de programación do lado servidor máis popular en todo o mundo. Isto é motivo máis que suficiente para que, se queres dedicarte ao desenvolvemento web, te interese familiarizarte coas posibilidades de PHP. 

Esta titoría é unha introdución a PHP e ao mundo da programación do lado servidor. Non obstante, é convinte que antes te teñas familiarizado cos  **[fundamentos do desenvolvemento web](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/fundamentos-del-desarrollo-web/)**, principalmente con linguaxes do lado cliente como HTML, CSS ou Javascript tamén é recomendable familiarizarse primeiro coa **[linguaxe de marcas HTML](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/aprende-html-tutorial-para-principiantes/)** .

A forma máis rápida de **aprender PHP** é comprendendo os exemplos e adaptándoos ás necesidades de cada proxecto web. Todo o que se necesita para a programación PHP é un **servidor web cun intérprete PHP** , un **editor de texto** (por exemplo, Notepad++ ou [Vim](https://www.ionos.es/digitalguide/servidores/herramientas/editores-linux-como-editar-codigo-con-vim/) ) e un **navegador web** . Como servidor para unha primeira inclusión, recoméndase utilizar o **ambiente de proba XAMPP local, que** [Apache Friends](https://www.apachefriends.org/es/index.html) ofrece gratuitamente para os sistemas operativos Windows, Linux e macOS.

## Instalación PHP

Para executar scripts PHP, primeiro necesitas un servidor web que sexa capaz de interpretar esta linguaxe de programación. Para iso, ten que ser complementado cun **intérprete PHP.** Trátase, neste sentido, dun compoñente de software que pode identificar as pasaxes dun ficheiro que contén código PHP. En principio, PHP pode executarse en calquera servidor web e o intérprete forma parte do paquete de descarga de PHP. A versión actual pódese descargar gratuitamente dende o **sitio web oficial do proxecto** **[php.net](http://www.php.net/downloads.php)** .

Como regra xeral, o intérprete PHP está integrado a través dun **módulo de servidor** ou como o protocolo FastCGI **.** Por razóns de rendemento, non se recomenda utilizar o intérprete como programa CGI. Na práctica, PHP úsase a miúdo en combinación co **[servidor HTTP Apache](https://www.ionos.es/digitalguide/servidores/configuracion/instala-apache-en-tu-pc/)** . Se esta conexión se completa coa base de datos **[MySQL](https://www.ionos.es/digitalguide/servidores/know-how/guia-para-aprender-a-utilizar-mysql/)** ou **MariaDB** , dependendo do sistema operativo, pódese denominar **[LAMP](https://www.ionos.es/digitalguide/servidores/know-how/servidor-lamp-la-solucion-para-webs-dinamicas/)** (Linux), **WAMP** (Windows) ou **[MAMP](https://www.ionos.es/digitalguide/servidores/know-how/mamp-programas-practicos-para-mac-os-x/)** (macOS).

**[As pilas web](https://www.ionos.es/digitalguide/servidores/know-how/desarrollo-web-con-stacks-de-software/)** deste tipo ofrécense como pilas de software preconfiguradas. Para aprender PHP é recomendable utilizar o paquete completo **XAMPP** , que contén a instalación local do servidor web Apache, o sistema de base de datos MariaDB e as linguaxes de programación Perl e PHP. No **tutorial** **[de XAMPP](https://www.ionos.es/digitalguide/servidores/herramientas/instala-tu-servidor-local-xampp-en-unos-pocos-pasos/)** da nosa Guía dixital atoparás un manual de instalación detallado.

 Atención

XAMPP está pensado exclusivamente como un servidor de proba. Esta pila de software ofrece aos desenvolvedores web a posibilidade de engadir un ambiente de proba completo para scripts, páxinas HTML e follas de estilo nun tempo récord. Non obstante, non se pode garantir o funcionamento seguro como servidor web en Internet. Polo tanto, XAMPP debe usarse localmente, o que significa que os servizos XAMPP non teñen que estar dispoñibles desde Internet.

## PHP básico: sintaxe da linguaxe

Unha vez configurado o seu servidor web local (por exemplo, coa axuda de XAMPP), cómpre comprobar que **PHP está instalado correctamente** e pode executar scripts.

 Definición

Un script é un programa informático xeralmente pequeno que non se compila previamente en código binario. Os scripts están escritos nunha linguaxe de programación como PHP, Perl ou JavaScript e son executados por un intérprete no servidor web (lado servidor) ou por un motor de renderizado no navegador web (lado cliente).

Abre o teu **editor de texto** favorito e introduce o seguinte script PHP:

```none
<?php
phpinfo();
?>
```

Os scripts PHP baséanse sempre no mesmo esquema. A **etiqueta PHP que se abre** *<?php* indica que está a piques de comezar un **ambiente de scripts** . Isto é seguido polo propio código PHP en forma de comandos ou instrucións. No exemplo é a chamada á **función** *phpinfo()* . A maioría das funcións requiren un ou máis parámetros entre parénteses. No caso de *phpinfo(),* estes son opcionais: *phpinfo(INFO_ALL )* . Cada función remata cun **punto e coma** ( *;* ) e para pechar o script entra en xogo a **etiqueta PHP de peche** , é dicir, *?>* .

 Definición

As funcións son miniaplicativos que permiten externalizar partes do código do programa. Para evitar a redundancia, as tarefas recorrentes defínense como funcións e chámanse mediante un nome de función. Os desenvolvedores usan [funcións PHP predefinidas](http://php.net/manual/es/funcref.php) ou crean os seus propios applets.

Garda o ficheiro de texto co nome de *proba* en formato *.php* (script PHP) e abre o servidor web. Mentres estea a usar o ambiente de proba XAMPP, coloque *test.php* no directorio XAMPP baixo ***htdocs\*** ( *C:\xampp\htdocs* ).

Pódese acceder ao ficheiro de exemplo introducindo o seguinte URL no seu navegador web: *http:// localhost/ test.php* . Se está a usar outro servidor web ou configuración personalizada do software XAMPP, **seleccione o URL da ruta do ficheiro correspondente** .

 Atención

Mentres os enderezos de Internet usan a barra inclinada (/) como símbolo delimitador de directorios, o Explorador de Windows usa a barra invertida (\). Os navegadores web modernos, con todo, transforman a barra invertida nunha barra inclinada na barra de navegación automaticamente.

Ao introducir o URL *http:// localhost/ test.php* estás dicindo ao navegador web que solicite o ficheiro *test.php* do servidor web. O servidor HTTP Apache ou outro software do servidor web abre o ficheiro no directorio correspondente. A terminación *.php* informa que o ficheiro contén código PHP. Agora iníciase o intérprete PHP integrado no servidor web, que percorre o documento ata que atopa a etiqueta PHP de apertura *<?php,* que marca o inicio do código PHP. Despois diso, o intérprete agora ten a capacidade de executar o código PHP e xerar saída HTML que se envía ao navegador desde o servidor web. 

Se executas un script coa función phpinfo(), o navegador mostrará información sobre a configuración de PHP

A función *phpinfo()* é a abreviatura do valor estándar *phpinfo(INFO_ALL)* , que proporciona información detallada sobre a configuración de PHP no servidor web. Se non se pode localizar ningunha versión de PHP, o navegador mostrará unha mensaxe de erro ou entregará un código PHP sen interpretar ao navegador.

### "Ola mundo!" – Así podes crear texto con eco

Se a instalación de PHP se realiza sen erros, agora pode escribir os seus primeiros scripts. *A instrución echo* é adecuada para iso . A diferenza *de phpinfo(),* *echo* non representa unha función, senón unha **construción de linguaxe** que permite que a seguinte cadea sexa distribuída como texto.

 Definición

As palabras reservadas son instrucións utilizadas en PHP para controlar a execución de programas. [As palabras reservadas](http://php.net/manual/es/reserved.keywords.php) inclúen , ademais de *eco,* declaracións como *if, for, do, include, return, exit* ou *die* . A diferenza das funcións, neste caso non se necesitan parénteses.

Crea un novo ficheiro PHP para o teu primeiro script e escribe o seguinte código:

```none
<?php
echo 'Ola mundo!';
?>
```

A etiqueta de apertura `<?php` inicia un ambiente de guión. A continuación segue a palabra reservada ***eco\*** e a cadea *[Hello World! ](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/hello-world/)***entre** comiñas simples. Coa etiqueta *?>* péchase o script. Neste sentido, debes prestar atención ao punto e coma que segue á instrución. En lugar de *Ola mundo!* Pódese utilizar calquera outro texto.

 Definición

En informática, enténdese por cadea unha secuencia de caracteres de lonxitude variable ou, noutras palabras, unha cadea de consoantes, números e símbolos. No campo da programación, as cadeas considéranse tipos de datos independentes e son diferentes doutros tipos de datos como os enteiros (números enteiros) ou os flotantes (números de coma flotante).

Garda o script co nome *hello.php* no cartafol *htdocs* do teu servidor web e accede ao ficheiro a través do URL *http://localhost/hello.php* no navegador. Se o código se transmitiu correctamente, a secuencia de caracteres que utilizou agora debería mostrarse na xanela do navegador:

[![Emisión de texto coa construción da linguaxe eco](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-textausgabe.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-textausgabe.png)A construción da linguaxe echo indica ao servidor web que emita a secuencia de caracteres Hello World!

Cada texto que sae con *eco* pode estar formado por **etiquetas HTML** se é necesario, que son interpretadas polo navegador web despois da especificación HTML correspondente. Podes comprobalo ti mesmo, por exemplo, co seguinte script:

```none
<?php
echo '<h1>Hello World!</h1>
<p>This is my first PHP page.</p>';
?>
```

copiar

Ao facer a solicitude ao navegador web, podes ver o **resultado da execución do script** do seguinte xeito:

[![Resultado da execución dun script con etiquetas HTML](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-ergebnis-hello-world.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-ergebnis-hello-world.png)Se o resultado da execución do script inclúe etiquetas HTML, o navegador interprétaas automaticamente

A secuencia de caracteres incluídas nas etiquetas *<h1>* , é dicir, *Ola mundo!* , é interpretado polo navegador como o título de primeiro nivel e vai seguido dun salto de liña automático e da etiqueta de parágrafo *<p>* .

Dependendo das necesidades, *o eco* pódese usar tanto con **comiñas** **simples** **( \*'\* )** como **con comiñas dobres** **( \*"\* )** . Se queres sacar texto, non hai diferenzas no tipo de comiñas que elixes, pero isto cambia en canto aparecen as **variables** . en acción.

### Variables

A palabra *eco* reservada é máis útil que a propia saída de texto, que tamén se pode implementar sen PHP e usando HTML como base. O verdadeiro valor engadido do *eco* baséase no feito de que a instrución permite **xerar textos de forma dinámica coa axuda de variables** .

Os usuarios de PHP poden atopar variables que teñen, por exemplo, a seguinte forma:

*$exemplo*

Cada variable consta do **signo de dólar** **( \*$\* ),** seguido do **nome da variable** . As variables úsanse nos scripts PHP para integrar datos externos en páxinas web. Neste sentido podemos falar de valores moi variados que van desde simples números e cadeas de caracteres ata textos completos ou estruturas de documentos HTML.  

PHP diferencia entre sete tipos de variables:

| Tipos variables | Descrición                                                   |
| :-------------- | :----------------------------------------------------------- |
| Corda           | Unha cadea é unha secuencia de caracteres, que pode ser unha palabra, unha frase, un texto ou o código HTML completo dunha páxina web. |
| Número enteiro  | Un enteiro é un número enteiro sen decimais que pode ser positivo ou negativo. |
| flotar          | Un flotante é un número de coma flotante, é dicir, un valor numérico con decimais. Nas linguaxes de programación, a coma escríbese cun punto (.). PHP permite colocar ata 14 caracteres despois da coma. |
| Booleano        | As variables booleanas son o resultado dunha operación lóxica e só comprenden dúas constantes: VERDADERO e FALSO. Este tipo de variables aplícase cando se traballa con condicións. |
| matriz          | Unha matriz é unha variable que pode albergar varios elementos. É unha agrupación de varios datos estruturados formando unha matriz. |
| obxecto         | A variable obxecto permite aos programadores definir os seus propios tipos de datos e aplícase na programación orientada a obxectos. As variables do tipo obxecto non están incluídas no noso tutorial de PHP. |
| NULL            | NULL representa unha variable sen valor. Para variables de tipo NULL, este é o único valor. |

A xestión central do contido xeralmente realízase coa axuda de **sistemas de bases de datos** . Os valores das variables pódense definir directamente no script. Este tipo de clasificación realízase segundo o seguinte esquema: 

*$example = "Valor";*

O símbolo característico do dólar vai seguido do nome da variable (neste caso *exemplo* ), que se une ao valor entre comiñas co **símbolo de igualdade** **( \*=\* )** .

 Atención

os valores das variables de tipo enteiro e flotante non están entre comiñas (por exemplo, *$example = 24;* ou *$example = 2,7;* )

PHP dáche a liberdade de designar variables como queiras, pero aquí xorden algunhas limitacións:

- Cada variable comeza co signo de dólar. 

- O nome da variable é unha secuencia de caracteres formada por letras, números e guións (por exemplo, *$example_1* ).

- Un nome de variable válido sempre comeza cunha letra ou un guión baixo ( *$example1* ou *$_example* ), pero nunca cun número (incorrecto: *$1example* ).

- PHP distingue entre maiúsculas e minúsculas *($example ≠ $Example* ).

- Os nomes das variables non poden conter espazos nin saltos de liña (incorrecto: *$exemplo 1* )

- O usuario non pode facer uso gratuíto das secuencias de caracteres reservadas por PHP para outros fins (por exemplo, *$this* )

Vémolo nun exemplo:

```none
<?php
$author = "John Doe";
echo "<h1>Hello World!</h1> 
<p>This dynamic web page was created by $author.</p>";
?>
```

copiar

A etiqueta de apertura de PHP vai seguida da **definición da variable** : no caso de *$author* empregaríase o valor *John Doe* . Cando se executa o script, a variable *$author* substitúese polo valor *John Doe* cada vez que se menciona no contorno do script. O seguinte gráfico mostra como isto se reflicte no navegador web.

[![Xeración dinámica de texto con variables](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-dynamische-texterstellung.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-dynamische-texterstellung.png)No resultado da execución do script, á variable $author asígnaselle o valor John Doe

Se se produce un erro e o sitio web non procede de John Doe, senón do seu colega alemán Max Mustermann, hai que adaptar a variable co nome *$author para corrixir o erro.*

[![As variables permítenche crear páxinas web de forma dinámica](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-durch-variablen.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-durch-variablen.png)Para a variable $author utilízase o valor de Max Mustermann

Isto é especialmente eficaz cando unha variable aparece varias veces nun script. Neste caso, só hai que corrixir unha parte dela, é dicir, a parte onde se definiu o valor da variable.  

Aquí o punto forte de PHP é evidente: **o contido** **pódese integrar como variables** , que é a base do desenvolvemento web dinámico. A diferenza das páxinas web estáticas, que se presentan como páxinas HTML extraditables, **as páxinas web dinámicas** xéranse no momento en que se abren. Para iso, o intérprete de PHP descarga cada un dos elementos da páxina web solicitada coa axuda das variables das diferentes bases de datos e intégraos nunha páxina HTML adaptada á solicitude.

As vantaxes deste concepto de deseño son evidentes: se se corrixen os elementos da páxina web (por exemplo, no pé de páxina), non é necesario facer axustes manualmente en cada unha das subpáxinas do proxecto web. Pola contra, abonda con **actualizar a entrada na base de datos.** Deste xeito, asúmese automaticamente a revisión para todas as páxinas web que vinculen os datos correspondentes como variables.

Se **unha variable se define varias veces nun script** , a nova definición anula a anterior. O seguinte *eco* sempre dá o valor actual dunha variable.

```none
<?php
$author = "John Doe";
echo "<h1>Hello World!</h1> 
<p>This dynamic web page was created by $author.</p>";
$author = "Max Mustermann";
echo " <p>Supported by $author.</p>";
?>
```

copiar

[![Proceso de sobreescritura de variables](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-das-uberschreiben.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-das-uberschreiben.png)O valor de John Doe sobrescríbese polo valor de Max Mustermann

O exemplo de código dálle á variable *$author o valor* *John Doe* e despois substitúeo polo valor *Max Mustermann* .

En canto ao **uso de comiñas** , a diferenza das cadeas de caracteres, non é necesario que as variables estean encerradas entre comiñas:

```none
<?php
$author = "John Doe";
echo $author;
?>
```

copiar

A non ser que a variable teña que usarse dentro dunha cadea, nese caso terás que utilizar comiñas dobres ( *"* ). Estas indican ao intérprete de PHP que ten que buscar variables na cadea para substituílas polos valores asociados. con As secuencias de caracteres expresadas entre comiñas simples ( *'* ) interpretaranse e reproduciranse como información puramente textual aínda que sexan variables. Podes comprobalo ti mesmo coa seguinte secuencia de código:

```none
<?php
$author = "John Doe";
echo '<h1>Hello World!</h1> 
<p>This dynamic web page was created by $author.</p>';
?>
```

copiar

[![Texto simple entre comiñas simples](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-reine-textausgabe.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-reine-textausgabe.png)As comiñas simples dan lugar a texto plano. Non se interpretan as variables

A este respecto pode xurdir a pregunta de que pasaría se se eliminasen completamente as comiñas. Neste caso, PHP informaría dun erro de sintaxe.

### Mensaxes de erro e enmascaramento

No caso de que haxa **erros de sintaxe** , o código PHP non é válido e o intérprete de PHP emite unha mensaxe de erro. Tamén pode ocorrer o mesmo cando, por exemplo, a instrución *echo* se usa cunha cadea sen comiñas:

```none
<?php
echo Hello World!;
?>
```

copiar

As mensaxes de erro conteñen, na maioría dos casos, información sobre a localización dos erros, ofrecendo así datos importantes para a súa erradicación.

[![O navegador emite unha mensaxe de erro: Erro de análise](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-der-webbrowser.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-der-webbrowser.png)Unha mensaxe de erro informa sobre a presenza de erros de sintaxe no código do programa

Neste exemplo, suponse que hai un erro na liña 2 do código do programa, xa que aí é exactamente onde eliminamos as comiñas para demostralo.

**Os erros sintácticos** tamén xorden cando se quere utilizar caracteres como texto e estes están asociados a unha determinada tarefa. Un exemplo sería a comiña simple ( *'* ). Símbolos como este só aparecen en PHP como texto cando o intérprete entende que o símbolo non estaría relacionado co seu verdadeiro propósito. No caso das comiñas simples, hai dúas posibilidades: por unha banda, unha cadea con comiñas simples pode estar rodeada de comiñas dobres ou, por outra banda, as comiñas pódense enmascarar mediante unha barra invertida (\ *)* :

```none
<?php
echo '\'Hello World!\' ';
?>
```

copiar

[![A barra invertida como símbolo de máscara](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-der-backslash.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-der-backslash.png)Se hai símbolos enmascarados cunha barra invertida, estarán exentos da súa función na sintaxe PHP.

Tamén é posible a combinación de comiñas simples e dobres:

```none
<?php
echo " 'Hello World!' ";
?>
```

copiar

Non obstante, esta ortografía sería incorrecta:

```none
<?php
echo ' 'Hello World!' ';
?>
```

copiar

Nos exemplos aparecen espazos entre as comiñas para mellorar a súa lexibilidade.

### Operadores de concatenación

Se queres incluír máis dunha variable nun script PHP simultáneamente, podes usar o que aprendiches ata agora:

```none
<?php
$author1 = "John Doe";
$author2 = "Max Mustermann";
echo "<h1>Hello World!</h1> 
<p>This dynamic web page was created by $author1 and $author2.</p>";
?>
```

copiar

Ambas variables escríbense co resto do texto que se mostrará na cadea indicada coas comiñas dobres. PHP recoñece automaticamente as variables usando o símbolo do dólar ( *$* ) e coloca os valores correspondentes despois delas.

[![Texto resultante con dúas variables](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-textausgaben-mit-zwei-variablen.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-textausgaben-mit-zwei-variablen.png)PHP só acepta variables na cadea cando o script non inclúe ningunha función

Entre os programadores, seguir este procedemento considérase traballo sucio. Neste sentido, existe o dogma de que **as variables non deben formar parte da cadea** e unha das razóns para iso é que moitas linguaxes de programación requiren tal separación. O máis importante é que PHP tamén solicita a separación de cadea e variable cando se traballa con chamadas a funcións ou variables complexas. Neste caso, convén realizar esta separación incluso no caso de texto plano, aínda que non sexa estritamente necesario.

Cando se traballa con variables, sempre entran en xogo varios elementos que deben estar interconectados entre si. Para iso, entra en xogo o **operador de concatenación** (.) .

Se se programa un código "limpo", debería verse así para o exemplo mencionado anteriormente:

```none
<?php
$author1 = "John Doe";
$author2 = "Max Mustermann";
echo '<h1>Hello World!</h1> 
<p>This dynamic web page was created by ' . $author1 . ' and ' . $author2 . '.</p>';
?>
```

copiar

[![Conectando cadeas e variables con operadores de concatenación](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-verbindung-von-strings.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-verbindung-von-strings.png)Os operadores de concatenación conectan cadeas e variables

Aquí estamos ante tres cadeas e dúas variables que están encadeadas formando unha secuencia de caracteres.

| Cadena 1                                                     |      | Variable 1 |      | Cadena 2 |      | Variable 2 |      | Cadena 3 |
| :----------------------------------------------------------- | :--- | :--------- | :--- | :------- | :--- | :--------- | :--- | :------- |
| '<h1>Ola mundo!</h1><p>Esta páxina web dinámica foi creada por ' | .    | $autor1    | .    | 'e'      | .    | $autor2    | .    | '.</p>'  |

É importante ter en conta que un operador de concatenación une cadeas ou variables sen espazos. Se se quere incluír un espazo, debe escribirse, como no exemplo, na cadea e con comiñas.  

Os programadores non só usan operadores de concatenación para vincular cadeas e variables, senón tamén para estender variables. Vexamos como funciona co seguinte exemplo:

```none
<?php
$example = 'Hello ';
$example .= 'World';
echo $example;
?>
```

copiar

Para ampliar o valor dunha variable é necesario definila de novo, pero colocando o *punto do operador de concatenación* *(.)* diante do signo de igualdade. Esta sería a abreviatura habitual de *$example = $example . 'Mundo'* ( *$exemplo = $exemplo . 'Mundo')* .

PHP engade o novo valor ao definido anteriormente. Se queres incluír un espazo entre ambos os valores, debe ir ata o final da primeira cadea, como se mostra no exemplo.

[![Ampliación do valor dunha variable](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut.png)A cadea Hello alóngase e pasa a ser Hello world

### Como vincular PHP en HTML

O intérprete de PHP só está interesado, en principio, no código colocado entre unha etiqueta PHP de apertura e de peche:

```none
<?php [Esta área será analizada por el intérprete de PHP] ?>
```

copiar

Ignora o resto dos fragmentos do documento e transmíteos ao servidor web a medida que aparecen. Deste xeito, o código PHP pódese integrar en **calquera** **documento HTML** para, por exemplo, crear un modelo para un sistema de xestión de contidos. Neste caso, hai que ter en conta que os documentos HTML que conteñan código PHP deben gardarse como ficheiros PHP. En caso contrario, o intérprete PHP non podería procesar o documento, senón que se entregaría directamente ao navegador, o que provocaría que o código do programa aparecese como texto plano na páxina web.

Podes pensar no intérprete PHP como o colega preguiceiro do servidor web que só funciona cando se lle solicita expresamente, por exemplo, unha etiqueta de apertura de PHP.

Se queres **combinar** **HTML e PHP** , escribe a páxina HTML na súa forma habitual segundo a estrutura do documento clásica e gárdaa coa terminación *.php.*

```none
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>My first PHP page</title>
  </head>
    <body>
  <h1>Hello World</h1>
  <p>What is the current time and date?</p>
  </body>
</html>
```

copiar

Complementa o teu documento HTML para o script PHP, pero lembre que todo o código do programa debe aparecer entre as etiquetas PHP.

```none
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>My first PHP page</title>
  </head>
  <body>
  <h1>Hello World</h1>
  <p>What is the current time and date?</p>
  <p>Your current time and date is: 
  <?php 
  echo date("d.m.Y H:i:s");
  ?>.</p>
  </body>
</html>
```

copiar

*No exemplo, a construción da linguaxe echo* combinouse coa **función** ***date()\*** para mostrar a data e a hora actual como texto no lado do servidor. O parámetro da función mostra o formato desexado en forma de cadea:

*dmY H:i:s = día.mes.ano hora:minuto:segundo*

Se o navegador web solicita tal ficheiro, o intérprete PHP executa o script e escribe a **hora actual en forma de texto** no documento HTML, que será entregado polo servidor web e representado como unha páxina web.

[![Integración de PHP en HTML](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-integration-von-php.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-integration-von-php.png)O documento HTML contén un script PHP incorporado, que mostra a data e hora actual.

### A función PHP para comentarios

Do mesmo xeito que o código HTML, PHP tamén ofrece a posibilidade de incluír comentarios. O intérprete PHP ignora **os comentarios no código fonte** sempre que teñan características adecuadas para a sintaxe. Para iso, PHP ofrece tres alternativas diferentes.

Se queres resaltar unha liña enteira como comentario e excluíla da interpretación, empregarás o **hash ( \*#\* )** ou as **dúas barras** **( \*//\* )** . O seguinte exemplo de código usa ambas posibilidades:

```none
<?php
#This is a single-line comment!
echo '<h1>Hello World!</h1>
<p>This is my first PHP page.</p>';
//This is also a single-line comment!
?>
```

copiar

O editor de texto Notepad++ destaca os comentarios en verde. As pasaxes de texto marcadas como comentarios no entorno de script nin sequera chegan ao navegador web, a diferenza dos comentarios en HTML, xa que o intérprete PHP os ignora ao executar o script.

[![Comentarios dunha soa liña con PHP](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-einzeilige-kommentare.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-einzeilige-kommentare.png)As liñas marcadas como comentarios non se mostran na pantalla onde se mostra o texto resultante

Así mesmo, tamén se poden inserir comentarios que comprendan varias liñas. Para iso, pode marcar o inicio dunha sección cos comentarios cunha **barra seguida dun asterisco** **( \*/\** )** e o final cun **asterisco seguido dunha barra ( \**/\* ).**

```none
<?php
/*
This is a multiple-lines comment block
that spans over multiple
lines
*/
echo '<h1>Hello World!</h1>
<p>This is my first PHP page.</p>';
?>
```

copiar

Este tipo de comentarios destacados non se analizan e, polo tanto, non aparecen no sitio web.

[![Exemplo de comentario de varias liñas](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-beispiel-eines-mehrzeiligen.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/DE-php-beispiel-eines-mehrzeiligen.png)O comentario de varias liñas non se mostra no texto publicado

Os programadores utilizan os comentarios para estruturar o código fonte dos scripts, para facer indicacións para a súa posterior edición ou para engadir datos internos como o autor ou a data.

A inclusión de comentarios é opcional e **non é recomendable abusar do seu uso** para garantir unha boa lexibilidade do código fonte.

### Realización de cálculos con variables

No noso tutorial para aprender a usar PHP xa te familiarizaches coas variables, ás cales se asignaron valores de cadea (cadeas de caracteres) en primeiro lugar. Agora pasaremos a tratar con variables que representan **números enteiros** (números enteiros) ou **números de coma flotante** (flotantes).

Se as variables almacenan valores numéricos, PHP ofrece a posibilidade de realizar cálculos con elas. Vexamos a continuación a tradución dunha suma simple de dous números enteiros:

```none
<?php
$numero1 = 237;
$numero2 = 148;
$resultado = $numero1 + $numero2;
echo "Resultado: " . $resultado;
?>
```

copiar

En primeiro lugar, as variables *$número1* e *$número2* asígnaselles os enteiros 237 e 148, e despois defínese unha variable de tipo *$resultado* , que contén a suma das variables *$número1* e *$número2* . Para iso utilízase o **operador aritmético \*+\*** (máis) . Finalmente, o resultado da suma sae coa axuda do construtor *de eco* como texto. Hai que ter en conta neste sentido que á hora de asignar valores numéricos ás variables non son necesarias as comiñas.

[![Adición de números enteiros coa axuda dun script PHP](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut2.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut2.png)O resultado da adición móstrase como texto no navegador web

O seguinte exemplo de código, do que mostramos a versión española na seguinte captura de pantalla, amosa unha **selección de cálculos matemáticos** que se poden realizar con PHP no lado do servidor. Os operadores empregados corresponden á maioría dos operadores aritméticos estandarizados en matemáticas.

| Operador aritmético  | Operación      | Resultado                                        |
| :------------------- | :------------- | :----------------------------------------------- |
| $número1 + $número2  | Adición        | Suma de $número1 e $número2                      |
| $número1 - $número2  | Resta          | Diferenza de $número1 e $número2                 |
| $número1 * $número2  | Multiplicación | Produto de $número1 e $número2                   |
| $número1/$número2    | División       | Cociente de $número1 e $número2                  |
| $número1 ** $número2 | Exponenciación | Resultado de elevar $número2 á potencia $número1 |

```none
<?php
$numero1 = 10;
$numero2 = 5;
$adicion = $numero1 + $numero2; 
$sustraccion = $numero1 - $numero2; 
$multiplicacion = $numero1 * $numero2; 
$division = $numero1 / $numero2; 
$exponenciacion = $numero1 ** $numero2; 
?>
<?php 
echo "Resultado de la adición: " . $adicion ."<br />"; 
echo "Resultado de la sustracción: " . $sustraccion . "<br />"; 
echo "Resultado de la multiplicación: " . $multiplicacion . "<br />";
echo "Resultado de la división: " . $division . "<br />";
echo "10 elevado a la quinta potencia (10^5): " . $exponenciacion . "<br />";
echo "Raíz de 81: " . sqrt(81) . "<br />";
?>
```

copiar

[![Cálculos con variables en inglés](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut3.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut3.png)Resumo de operacións matemáticas en inglés

Para cálculos máis complexos, as diferentes operacións aritméticas pódense combinar nun mesmo script. Vexamos como se expresaría isto en castelán:

```none
<?php
$numero1 = 10;
$numero2 = 5;
$resultado = 2 * $numero1 + 5 * $numero2 - 3 * sqrt(81);
echo "Resultado: " . $resultado; 
?>
```

copiar

O intérprete PHP determina os valores das variables e calcula:

*2 \* 10 + 5 \* 5 - 3 \* √81 = 20 + 25 – 27 = 18*

A función *sqrt()* calcula a raíz cadrada do parámetro entre parénteses. Neste caso, aplícase a **xerarquía clásica dos** operadores matemáticos : os operadores de multiplicación e división teñen prioridade sobre os operadores de suma e resta. A instrución *echo* proporciona o resultado como unha cadea para o navegador web.

[![Cálculo matemático con dúas variables e diferentes operadores aritméticos](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut4.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut4.png)PHP segue a regra de que os operadores de multiplicación e división teñen prioridade sobre os operadores de suma e resta.

**Os termos entre parénteses** son os que se avalían primeiro en PHP. Agora centrarémonos nos números de coma flotante:

```none
<?php
$numero1 = 2.5;
$numero2 = 3.7;
$resultado = 2 * ($numero1 + 5) * ($numero2 - 3) * sqrt(81);
echo "Resultado: " . $resultado; 
?>
```

copiar

[![Alt-Text: Cálculo con números de coma flotante e termos entre parénteses](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut5.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut5.png)PHP calcula 2*(2,5+5)*(3,7-3)*√81 e dá como resultado 94,5

Como as linguaxes de programación máis comúns, PHP tamén admite os operadores para aumentar ou diminuír **os valores numéricos** **no valor 1** . Neste sentido, podemos diferenciar entre o operador pre-incremento, o pre-decremento, o post-incremento e o post-decremento.

| Operación       | Operador  | Resultado                                                    |
| :-------------- | :-------- | :----------------------------------------------------------- |
| Preincremento   | ++$número | O operador ++ incrementa o valor da variable $número, de xeito que o valor aumenta en 1. O resultado devolverase como o novo valor para $número. |
| Predecremento   | --$número | O operador -- decrementa o valor da variable $número, de xeito que o valor se reduce en 1. O resultado converterase no novo valor de $número. |
| Post-incremento | $número++ | Devólvese o valor actual de $number e o valor increméntase en 1. |

O exemplo de preincremento mostra operacións aritméticas con operadores de incremento e decremento. O seguinte script en castelán incrementa o valor da variable *$numero* en 1, garda o novo valor na variable *$resultado* e mostra o seu valor como cadea:

```none
<?php
$numero = 0;
$resultado = ++$numero;
echo "Resultado: " . $resultado;
?>
```

copiar

Erhöht man den Wert 0 um 1, erhält man das Ergebnis 1.

[![Preincremento do número 0](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut5_2.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut5_2.png)O operador ++ incrementa 0 en 1

Para calcular o preincremento da variable *$número ($número)* utilízanse os mesmos scripts, pero cambiando o operador de preincremento I ( *++* ) para o operador de decremento ( *--* ):

```none
<?php
$numero = 0;
$resultado = --$numero;
echo "Resultado: " . $resultado;
?>
```

copiar

Reducir o valor da variable *$número ($número)* a 0 produce o resultado -1.

[![Predecremento do número 0](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut6.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut6.png)O operador -- decrementa o número 0 en 1

O incremento anterior ou seguinte (pre ou post) dun valor pódese resaltar no seguinte script. Vexémolo máis claramente na tradución da captura de pantalla en cuestión:

```none
<?php
$x = 0;
echo '<p>Resultado: ' . ++$x;
echo '<br>x tiene el valor ' . $x;
echo '<p>Resultado: ' . $x++;
echo '<br>x tiene el valor ' . $x, '</p>';
?>
```

copiar

En ambos casos obtense o mesmo resultado. *No pre-incremento o valor de x* increméntase antes de editar na liña 3 e no post-incremento isto ocorre na liña 5.

[![Diferenza entre pre e posincremento](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut7.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut7.png)Comparación entre pre e post aumento

## Os superglobais $_GET e $_POST

Unha vez que aprendes os conceptos básicos de PHP e sabes como manexar as variables, podes concatenalas e realizar cálculos. Neste apartado contámosche por que as variables son un factor esencial á hora de programar scripts.

Unha característica importante das linguaxes de programación é que ofrecen a posibilidade de analizar a entrada do usuario e pasar os valores a outros scripts. Para iso, PHP depende das **superglobais** ***$_GET\* e $_POST \*,\* variables do sistema** predefinidas que están dispoñibles en todos os ámbitos de validez. Como matrices asociativas (campos de datos), *$_GET* e *$_POST* almacenan un conxunto de variables en forma de cadeas nunha variable.

As matrices pódense imaxinar coma se fosen un armario con varios caixóns, cada un dos cales ofrece a posibilidade de arquivar datos **.** Para saber posteriormente o que alberga cada un destes caixóns, reciben un nome de variable, que, segundo o tipo de matriz, pode ser un índice **ou** unha **clave** . Mentres que no caso das **matrices indexadas** cada caixón recibe un índice en forma de número, aos caixóns dunha **matriz asociativa** asígnaselle unha clave en forma de cadea (secuencia de caracteres).

Os superglobais *$_GET* e *$_POST* conteñen unha serie de variables en forma de claves que nos permiten alcanzar os valores vinculados a ditas claves. Discutiremos este tema en detalle cando nos centremos nos superglobais *$_GET* e *$_POST.*

### Transferencia de datos a través de $_GET

O ***$_GET\*** **superglobal** representa unha matriz de variables que se pasa a un script PHP coa axuda dun URL.

Se visitas **weblogs** , **tendas en liña** ou **foros de Internet** , é posible que os peculiares URL que aparecen neles chamaran a túa atención. Adoitan xerarse seguindo o seguinte esquema:

*http://computername/folder/filename.php?variablename=* variablevalue

Nun blog, o esquema pode verse así:

*http://www.ejemplo-blog.es/index.php?id=1*

Un URL deste tipo pódese desglosar de xeito moi sinxelo: nun servidor web co dominio *example-blog.es* hai un ficheiro co nome *index.php,* que serve para crear unha páxina web dinámica. Normalmente, isto contén código HTML e PHP, así como ligazóns a ficheiros de modelos e follas de estilo externas, todo o necesario para renderizar unha páxina web. O indicador que revela que se trata dunha páxina web dinámica é o código que segue ao signo de interrogación ( *?* ): *id=1.* Isto chámase **cadea de consulta HTTP** e está formado por unha variable ( *id )* e un valor ( *1* ), ambos unidos polo signo igual. Os parámetros URL deste tipo utilízanse, por exemplo, para xerar páxinas web dinámicas, para cargar contido das bases de datos ou para solicitar o modelo adecuado.

As páxinas web dinámicas permiten **a separación entre contido e presentación** . O elemento *index.php* contén practicamente toda a información sobre a estrutura da páxina web, pero non alberga os contidos. Estes normalmente almacénanse nunha **base de datos** e pódense acceder mediante parámetros na cadea de consulta HTTP. No noso exemplo, o URL dá a *index.php* o parámetro *id=1,* que determina que contidos da base de datos se deben ler e cargar en *index.php.* No caso dos weblogs, este é xeralmente o identificador dun artigo específico. Nos foros isto permite visitar unha entrada ou, nas tendas en liña, ver un produto específico.

Se un URL contén máis dun parámetro, únense co **símbolo et (&)** .

*www.example-blog.es/index.php?page=article&id=1*

Non precisa usar unha base de datos para comprender como se usa *$_GET* nun exemplo de código. O seguinte script usa o superglobal *$_GET* para interpretar os valores das variables de nome e apelido *dunha* cadea de consulta *HTTP* e para escribilos nas variables PHP *$variable1* e *$variable2* :

```none
<?php
$variable1 = $_GET['forename'];
$variable2 = $_GET['surname'];
echo "Hello " . $variable1 . " " . $variable2 . "!";
?>
```

copiar

Para abrir o script usamos o seguinte URL:

*localhost/hello.php?forename=John&surname=Doe*

Isto proporciona os parámetros *forename=John* e *apelidos=Doe* . A emisión dos valores realízase, como antes, coa axuda da construción da linguaxe *eco* .

[![Transmisión de datos a través de $_GET](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut7_2.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut7_2.png)Os parámetros URL proporcionan ao script PHP o par de valores das variables forename=John e apelidos=Doe.

A transmisión de datos a través de *$_GET* provoca inevitablemente que os **datos transferidos** **se mostren na liña de enderezos** . En calquera momento pódese comprobar que parámetros se van entregar, o que ten a vantaxe de que as variables poden gardarse en hipervínculos. Ademais, os internautas tamén teñen a posibilidade de colocar URL e mesmo a cadea de consulta HTTP como marcador no navegador.

Non obstante, o feito de que o parámetro GET se execute no URL como texto non codificado descalifica este método para entregar datos confidenciais como os contidos nos formularios en liña. Ademais, o volume de datos que se poden entregar a través do superglobal *$_GET* está limitado á lonxitude máxima dos URL, limitacións que se poden evitar co método HTTP POST. Os datos transferidos con el atópanse no ***superglobal $_POST.\***

### Transferencia de datos a través de $_POST

Mentres os datos transferidos a través do método GET entréganse como parámetros de URL, a transferencia de datos a través de *$_POST* realízase no corpo dunha solicitude HTTP. Isto permite aos desenvolvedores transferir grandes cantidades de datos dun script a outro.

Un campo esencial de aplicación do método HTTP-POST é a **transmisión de datos desde formularios HTML** **.** Vémolo co exemplo dunha subscrición a un boletín.

Para iso, crea un novo ficheiro PHP co nome *page1.php* e inclúe o seguinte bloque de código en español (para ver o código en inglés, consulta a captura de pantalla a continuación):

```none
<form method="post" action="page2.php" >
Por favor, envía la newsletter a: <br />
Tu nombre: <input type="text" name="nombre" /><br />
Tu apellido: <input type="text" name="apellido" /><br />
Tu correo electrónico: <input type="text" name="email" /><br />
<input type="submit" value="Enviar formulario" />
</form>
```

copiar

Ao crear formularios entra en xogo o elemento HTML *<form>* . Isto inclúe dous atributos na etiqueta de inicio: *método* e *acción.* Co primeiro pódese definir os métodos de transmisión, neste caso o método HTTP POST. O URL dun script que recibe todos os datos rexistrados a través dos seguintes campos de entrada gárdase no atributo *action .* O exemplo mostra un **formulario HTML con tres** **elementos de entrada** ( *input type="text"* ) e un **botón de envío** ( *input type="submit"* ). Como destinatario dos datos, defínese o ficheiro *page2.php* .

Para comprender a transferencia de datos a través de *$_POST* , usamos un script sinxelo para analizar datos do formulario que almacena os valores introducidos como variables PHP en formato de texto. Para iso, cree un ficheiro *page2.php* e insira o seguinte código de programación:

```none
<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"]; 
echo "Hola " . $nombre . " " . $apellido . ", <br /> 
Te has registrado con el siguiente correo electrónico: " . $email . ".";
?>
```

copiar

Garda os dous ficheiros PHP no cartafol *htdocs* do teu servidor de proba e abre *page1.php* co seguinte URL no teu navegador web: *http:// localhost/ page1.php* . A continuación, o navegador mostra a interface web interactiva do formulario HTML.

[![Introdución de datos a través dun formulario HTML](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut8.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut8.png)O formulario HTML page1.php inclúe datos do usuario e envíaos ao script co enderezo page2.php

Introduza os datos de rexistro e prema no botón enviar para transferir variables dun script a outro. Tan pronto como confirmes os datos en *page1.php,* serás redirixido directamente a *page2.php.* A xanela do navegador mostra o resultado da execución do script en función dos datos transmitidos.

[![Emisión de datos de usuario](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut9.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut9.png)Transmisión de datos co método HTTP POST e emisión vía eco

Page2.php solicita os datos do usuario rexistrado a través dos campos de entrada de *page1.php* *usando* o seguinte esquema:

```none
$_POST["Nombre del campo de entrada"]
```

copiar

Así é como a liña *$forename = $_POST["forename"]* solicita o primeiro *nome* no campo de entrada e gárdao na variable *$forename, que* *,* á súa vez, sae como cadea grazas a *echo.*

## O constructor PHP if e os operadores de comparación

Ata agora definimos as variables, pero tamén mostramos como se transmiten dun guión a outro e se emiten en forma de cadeas. A continuación mostrámosche como podes vincular a execución dos fragmentos de código con determinadas **condicións** .

O **construtor \*if\*** proporciona a capacidade de escribir scripts de tal xeito que as instrucións teñan efecto cando o usuario cumpra unha das condicións especificadas, como introducir un contrasinal correcto.

As condicións poden definirse en PHP segundo a seguinte estrutura básica:

```none
<?php
if(expression)
   {
   statement;
   }
?>
```

copiar

*Isto di o seguinte: só se pode executar* a instrución naqueles casos nos que se cumpra a condición en *expresión .* Cumpriuse unha condición cando o *construtor* if devolve *TRUE* *.* En caso contrario, isto interprétase como *FALSE* , nese caso ignorarase a instrución.

Como regra xeral, o construtor *if* verifica se o valor dunha variable corresponde ao definido na condición. Esta **estrutura de control** normalmente ten lugar **en base a** **operadores de comparación** .

### Operadores de comparación

Os operadores de comparación utilízanse cando se formulan condicións, co obxectivo de poñer dous argumentos nunha **relación lóxica** que poida avaliarse como verdadeiro ( *VERDADEIRO* ) ou falso ( *FALSO* ). Se se usan operadores de comparación nas estruturas de control PHP, pódense implementar con dúas variables na *expresión* dun constructor *if :*

```none
if ($a == $b) 
   {
   statement;
   }
```

copiar

Imos expresar a estrutura de control en palabras: as condicións definidas realízanse no caso de que a variable *$a* sexa equivalente á variable *$b* .

**Os operadores de comparación PHP** baséanse na linguaxe de programación C e difiren considerablemente dos símbolos matemáticos clásicos na súa escritura. Na seguinte táboa ofrecémosche unha lista detallada deles:

| Operador de comparación | Descrición       | Condicións                                                   |
| :---------------------- | :--------------- | :----------------------------------------------------------- |
| ==                      | Igual            | A condición cúmprese se $a e $b mostran o mesmo valor.       |
| ===                     | Idéntico         | A condición cúmprese se $a e $b mostran o mesmo valor e pertencen ao mesmo tipo de datos. Isto pódese ver nun exemplo no que se compara un enteiro (1) cunha cadea ("1"): 1 == "1" //VERDADEIRO 1 === "1" //FALSO. É mellor usar sempre o operador de comparación === (idéntico) para aquelas condicións que requiren dúas variables. |
| !=                      | Diferente        | A condición cúmprese se $a e $b teñen valores diferentes.    |
| !==                     | Non idéntico     | A condición cúmprese se $a e $b teñen valores que non son iguais ou pertencen a tipos de datos diferentes. |
| <                       | Menor que        | A condición cúmprese se o valor de $a é menor que o de $b.   |
| >                       | Máis grande cá   | A condición cúmprese se o valor de $a é maior que o de $b.   |
| <=                      | Menor ou igual a | A condición cúmprese se o valor de $a é menor que o valor de $b ou se $a e $b teñen o mesmo valor. |
| >=                      | Maior ou igual   | A condición cúmprese se o valor de $a é maior que o valor de $b ou se $a e $b teñen o mesmo valor. |

O seguinte script debería arroxar luz sobre esta estrutura de control, na que se comparan dous números enteiros. O operador de comparación usado é *<* (menos que):

```none
<?php
$numero1 = 10;
$numero2 = 20;
if($numero1 < $numero2) { 
    echo "Se cumple la condición";
}
```

copiar

Neste caso, defínense as variables *$número1* e *$número2* e asígnaselles os valores *10* e *20* . Establécese entón unha condición: se *$número1* é menor que *$número2* , sairá a cadea mencionada na condición *de eco* .

O resultado da execución do script contén a resposta: 10 é menor que 20. O construtor *if* devolve o resultado *TRUE* . Despois diso, podemos dicir que se cumpriu a condición ( *A condición é cumprida* ).

[![O construtor if na aplicación](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut10.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut10.png)Se se cumpre a condición, execútase a instrución.

Se queres definir instrucións que se executan no caso de que non se cumpra unha condición, podes complementar o construtor *if* coa **instrución \*else\*** segundo o seguinte esquema:

```none
<?php
if(condición a)
    {
    instrucción b;
    }
else 
    {
    instrucción c
    }
?>
```

copiar

Este script tamén verifica se *a condición a* devolve *TRUE* ou *FALSE* . Se se cumpre *a condición a* ( *TRUE* ), executarase *a instrución b* . Se non se cumpre a condición *a* *(FALSO)* , omitirase *a instrución b* e executarase *a instrución c* no seu lugar .

A continuación ampliamos o noso script co construtor *else* e cambiamos o operador de comparación *<* (menor que) a *==* (igual):

```none
<?php
$numero1 = 10;
$numero2 = 20;
if($numero1 == $numero2) 
    { 
    echo "La condición se cumple";
    }
else 
    {
    echo "La condición no se cumple";
    }
?>
```

copiar

Neste caso, o construtor *if* devolve *FALSE como resultado.* O valor da variable *$número1* non é o mesmo que o da variable *$número2* . Non se cumpre a *condición* . Polo tanto, non se executa baixo a *instrución if,* senón baixo a definida por *else* .

[![O construtor else da aplicación](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut11.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut11.png)Se non se cumpre a condición, execútase a instrución definida por else.

 Atención

Se a execución dun fragmento de código está suxeita á igualdade de dous valores, o signo de igual úsase dúas veces ( *==* ). No proceso de asignación de valores ás variables úsase un único signo de igualdade ( *= ).*

A **negación das condicións** prodúcese mediante un signo de admiración ( *!* ) dentro da *expresión* .

```none
<?php
$numero1 = 10;
$numero2 = 20;
if ($numero1 == $numero2) 
    { 
    echo "Los números son iguales.";
    }
if (!($numero1 == $numero2))
    {
    echo "Los números no son iguales.";
    }
?>
```

copiar

O exemplo mostra a condición *$número1 == $número2* e a súa negación. *!($número1 == $número2)* é equivalente a *($número1 != $número2)* .

Unha aplicación práctica de *if* e *else* é, por exemplo, a **solicitude de contrasinal** nun formulario HTML. A continuación, vexamos unha simulación coa axuda dos ficheiros PHP *page1.php* e *page2.php* .

Abre o ficheiro *page1.php* e introduce o seguinte código de formulario:

```none
<form action="page2.php" method="post">
Por favor, introduce tu contraseña: <input type="password" name="contraseña" />
<input type="submit" value="Enviar" />
</form>
```

copiar

A estrutura corresponde ao formulario xa creado. Neste caso, só é necesario un campo de entrada: a solicitude de contrasinal. Como se describe anteriormente, a entrada do usuario comunícase ao script *page2.php* . Pódese adaptar co seguinte código para que a entrada do contrasinal **se compare cun contrasinal xa proporcionado** :

```none
<?php
$contrasena = $_POST["contrasena"];
if($contrasena=="qwertz123")
   {
   echo "La contraseña es correcta";
   }
else
   {
   echo "La contraseña es incorrecta";
   }
?>
```

copiar

O código pódese ler do seguinte xeito: primeiro asignamos un valor á variable *$contrasinal* na liña 2, á que se accede a través do método HTTP POST. A continuación, defínese a seguinte estrutura de control: o construtor *if* na liña 3 debe comprobar se o valor da variable *$contrasinal* coincide coa cadea *qwertz123* . Se é así, obtense a cadea O contrasinal *era correcto* *.* Se o construtor *if* devolve *FALSE, o construtor* *else* entra en xogo na liña 7 e sae a cadea O contrasinal *era* *incorrecto* .

Pódese acceder ao script *page1.php* a través do URL *http:// localhost/ page1.php* *.*

[![Interface web do formulario HTML para a solicitude de contrasinal](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut12.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut12.png)O formulario HTML require que se introduza un contrasinal.

O navegador presenta a vista web do formulario HTML para a solicitude de contrasinal. Aquí respondes á solicitude, introduce o contrasinal *quertz123* definido no script *page2.php* e fai clic no botón enviar.

[![O contrasinal é correcto](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut13.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut13.png)O script confirma que se introduciu o contrasinal correcto.

O navegador redirixe automaticamente á *páxina 2.* *php* . En segundo plano, o construtor *if* compara o contrasinal introducido co gardado e conclúe que " *qwertz123 == qwertz123* é *VERDADEIRO* ". Despois emite a cadea *O contrasinal* era *correcto* .

Vexa por si mesmo o que ocorre cando introduce un contrasinal diferente no campo de entrada.

### Operadores lóxicos

As condicións que se definen coa axuda de operadores de comparación na *expresión* do construtor *if* pódense vincular, se é necesario, a outras condicións da mesma *expresión.* Para iso, PHP baséase nos operadores lóxicos **AND** e **OR.**

**Operadores lóxicos:**

| vínculo estreito | elo débil | Descrición                                                   |
| :--------------- | :-------- | :----------------------------------------------------------- |
| &&               | E         | As dúas condicións vinculadas ao operador deben estar definidas polo valor TRUE. |
| //               | OU        | Unha das condicións vinculadas polo operador ten que ser VERDADEIRA. |

Para vincular as condicións, PHP ten **operadores lóxicos que establecen ligazóns estreitas ou débiles** . Decidir unha opción ou outra non fai ningunha diferenza na práctica. Non obstante, se se combinan, é fácil ver que *OR* e *||* Establecen un vínculo máis estreito que *AND* e *OU.* Ademais, a ligazón creada por *AND* e *&&* é máis estreita que *OU* e *||* . Isto é comparable á xerarquía de operadores, como se coñece polos operadores matemáticos (por exemplo, os operadores de multiplicación e división teñen prioridade sobre a suma e a resta: * *establece* unha ligazón máis estreita que *+* ).

Un exemplo práctico disto é o **indicador de contrasinal** . Os datos de rexistro xeralmente consisten nun contrasinal secreto e un nome de usuario. A inscrición só poderá realizarse naqueles casos nos que tanto un dato como o outro coincidan cos facilitados no sistema.

Neste caso, volvemos abrir o formulario de solicitude de contrasinal en *page1.php* e engadimos un campo de entrada para o nome de usuario:

```none
<form action="page2.php" method="post">
Nombre de usuario: <input type="text" name="username" /><br />
Contraseña: <input type="password" name="password" /><br />
<input type="submit" value="Enviar" />
</form>
```

copiar

No seguinte paso tes que adaptar a estrutura de control do construtor *if* . Para iso, é necesario utilizar o operador lóxico AND e así vincular a condición para a solicitude de contrasinal cunha condición para a solicitude de nome de usuario.

```none
<?php
$username = $_POST["username"];
$password = $_POST["password"];

if($username=="John Doe" AND $password=="qwertz123")
   {
   echo "Bienvenido al área interna " . $username . "!";
   }
else
   {
   echo "Acceso denegado";
   }
?>
```

copiar

O script *page2.php* recibe os valores para *o nome de usuario* e *o contrasinal* e gárdaos nas variables *$username* e *$password.* A *expresión* do construtor *if* contén **dúas condicións** **que están ligadas co operador \*AND\*** lóxico . Só cando se cumpran ambas condicións ( *username=="John Doe"* e *$password=="qwertz123"* ) o construtor *if* devolverá *TRUE* .

Dado que o nome de usuario obtense a través do campo de entrada *do nome de usuario* , pódese usar directamente para publicar o texto mediante *echo* : *Benvido á área interna* vai seguido do valor da variable *$username* . Se non se cumpre unha das dúas condicións, recibirá o texto *Acceso* *denegado* .

[![Solicitude de contrasinal con dúas condicións](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut14.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut14.png)O script só confirmará a entrada do contrasinal cando se cumpran ambas condicións.

Os operadores lóxicos pódense combinar libremente. *Neste sentido ,* pódese considerar que AND ten unha xerarquía de operadores superior a *OR.* Do mesmo xeito que coas ecuacións matemáticas, as parénteses tamén se poden usar en PHP para influír na xerarquía.

## Loops (while, for)

Ás veces é necesario que un script pase varias veces por un determinado segmento de código antes de que se execute o resto do código do programa. Para iso, as linguaxes de programación usan o concepto de bucle. Aquí pódense diferenciar **tres tipos** :

- bucles *mentres*
- bucles *do-while*
- *para* bucles



### bucles while

*Mentres que* os bucles son os bucles máis sinxelos de PHP. A súa **estrutura base** obedece ao seguinte esquema:

```none
while (condición)
    {
    Paso del bucle y otras instrucciones
    }
```

copiar

Os bucles *while* solicitan a PHP que execute instrucións subordinadas sempre que se cumpra a **condición while .** Para iso, o intérprete PHP verifica a condición ao comezo de cada volta do bucle. A execución do código subordinado detense cando xa non se cumpre a condición *while .*

Podes visualizar este principio cun guión sinxelo con números. Abaixo está a versión en castelán:

```none
<?php
$numero = 1;
while ($numero <= 10) {
    echo $numero++ . "<br />";  
    }
  ?>
```

copiar

No apartado anterior “Realización de cálculos con variables” xa se introduciu o principio de incremento. No seguinte script usamos este principio, pero usamos un operador posterior ao incremento para aumentar o valor do número enteiro da variable *$número ($número)* en 1 cada vez que o bucle dá un xiro despois de publicar o texto a través de *echo* . Como condición para o bucle *while* definimos que *$número* é menor/igual a 10. A instrución *echo* repetirase tantas veces como sexa necesario para que *$número* reciba un valor maior que 10.

[![O script conta ata 10 e rompe o bucle](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut14_2.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut14_2.png)O script incrementa a variable $número ata acadar un valor superior a 10. Entón o bucle deixa de executarse

O resultado da execución do script é unha cadea que, cada vez que o bucle dá un xiro, emite o valor da variable *$número* antes de que se incremente. O script conta de 1 a 10 e remata a execución do código en canto non se cumpra a condición *while* .

### bucles do-while

A construción dos bucles *do-while* é semellante á dos bucles *while* . A única diferenza é que a condición non se verifica ao principio de cada ciclo, senón ao final. O **esquema básico dun bucle** ***do-while\*** corresponde ao seguinte exemplo:

```none
do {
    Paso del bucle y otras instrucciones
    } 
   while (Condición)
```

copiar

Cando programas un bucle *do-while* , o script resultante ten o seguinte aspecto:

```none
<?php
$numero = 1;
do {
    echo $numero++ . "<br />";
    }
while ($numero <= 10); 
  ?>
```

copiar

Neste caso, o resultado é o mesmo. O peculiar do bucle *do-while* é que se executa polo menos unha vez, aínda que non se cumpra a condición en ningunha execución do bucle.

### para bucles

Basicamente, os bucles *for* teñen a mesma funcionalidade nun script PHP que os bucles *while* . A diferenza destes, non obstante, **o valor inicial, a condición e a instrución** **anotaranse dentro dunha liña** e non se repartirán en tres ou máis liñas.

A estrutura base do bucle *for* ten o seguinte esquema: 

*for (valor inicial; condición; paso de bucle)*

  *instrucións*

Este exemplo en castelán pódese entender como un bucle *for* dun xeito compacto:

```none
<?php
for($numero = 1; $numero <= 10; $numero++) {
   echo $numero . "<br /> ";
}
?>
```

copiar

En primeiro lugar, defínese o valor 1 para a variable *$numero* . PHP verifica entón se se cumpre a condición *$número <= 10.* Se é correcto, o bucle continúa e execútanse as instrucións debaixo do bucle (neste caso, a instrución *echo* ). Só entón execútase o bucle, caso en que non importa se se escolleu pre-incremento ou post-incremento, xa que esta instrución realízase antes da emisión. Se o paso do bucle completouse, comezará o seguinte bucle.

O valor inicial, a condición ou o paso do bucle son **elementos opcionais** dun bucle *for* . En teoría, incluso son posibles bucles baleiros, aínda que serían redundantes.

Basicamente, tomar unha decisión sobre se os scripts PHP deben incluír bucles *for* ou *while* depende de ti. Non obstante, hai un **argumento de que \*os\* bucles for gañan a partida** : aplicando *bucles,* pode controlar mellor os datos críticos do bucle. Isto axuda a evitar o perigo de escribir un bucle que se executa ata que a memoria do intérprete estea chea. Isto ocorre en referencia ao exemplo mencionado se esquece aumentar o valor da variable *$número.*

No caso de que o bucle teña que funcionar polo menos unha vez independentemente da condición, o bucle *do-while* é o bucle que se debe escoller.

### romper e continuar

Podes influír no transcurso dun *tempo* -, *do-while* ou *for* loop usando as instrucións ***break\*** e ***continue\*** . Usas *break* para romper un bucle en calquera lugar e *continúas* saltando un xiro no bucle. Tanto unha instrución como a outra están conectadas a unha condición mediante o construtor *if* . No seguinte exemplo, tanto o orixinal como a tradución mostran un script numérico cunha *ruptura* :

```none
<?php
for ($numero = 1; $numero <= 10; $numero++) {
    if ($numero== 5) {
      echo "El script se para al llegar a 5";
      break;
    }
echo $numero . "<br /> ";
}
?>
```

copiar

No bucle *for* definimos que o valor da variable *$número ($número)* increméntase en 1 en cada quenda ata que a variable alcance o valor 10. Agora, coa *instrución break,* **o bucle pódese romper de antemán** en canto *$número ($número)* alcanzou o valor 5 *.* O construtor *de eco* só devolve números entre 1 e 4.

[![para bucle con ruptura](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut15.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut15.png)A instrución break rompe o bucle en canto se cumpre a condición if.

Para **omitir a edición da quinta rolda** , pero non interromper todo o curso do bucle, substitúa a instrución *break* por *continue* :

```none
<?php
for ($numero=1; $numero <= 10; $numero++) {
    if ($numero == 5) {
      echo "¡Se omite la 5!<br />";
      continue;
    }
echo $numero . "<br /> ";
}
?>
```

copiar

En lugar do número 5, PHP ofrece a cadea textual definida en *se* *O 5 se omite!* ( *Saltamos o número 5!* )

[![bucle for con instrución continue](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16.png)O bucle for omite un retorno a través da instrución continue.

## Operacións de arquivo

As páxinas web dinámicas baséanse na separación entre contido e presentación, polo que linguaxes de programación como PHP ofrecen diferentes funcionalidades que permiten cargar contidos de fontes de datos externas en ficheiros de modelos centrais. Na práctica, estas fontes de datos son bases de datos que se xestionan coa axuda de sistemas de xestión de contidos como MySQL. Para saber como funciona, visita o noso tutorial de MySQL para principiantes.

Ademais, existe a posibilidade de integrar **datos de ficheiros** . A continuación mostrámosche como podes ler ficheiros como cadea nun script PHP e como podes gardar os textos dos teus scripts en ficheiros.

### Lectura de arquivos

Para ler o contido dun ficheiro, PHP ofrece diferentes funcións, das cales ***file()\*** e ***file_get_contents()\*** son as máis adecuadas para os nosos propósitos. Mentres que a función *file_get_contents()* úsase para ler todo o contido dun ficheiro nunha cadea, a función *file()* garda o contido en forma de matriz. Cada elemento da matriz corresponde a unha liña do ficheiro. Usando *file()* é máis fácil sacar cada liña por separado.

A continuación, demostramos as operacións do ficheiro PHP co ficheiro example.txt que aloxamos no directorio *htdocs* do noso servidor de proba. O contido do ficheiro está formado por catro liñas de texto "Lorem ipsum":

*Lorem ipsum dolor sit amet, consectetuer adipiscing elit.*

*Aenean comodo ligula eget dor. Masa Aenea.*

*Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.*

*Donec* *quam* *felis,* *ultricies* *nec, pellentesque eu, pretium quis, sem.*

O primeiro paso é ler todo o ficheiro como unha cadea. Para iso, debes asignar o nome do ficheiro correspondente como parámetro á función *file_get_contents()* . Isto faise en base ao seguinte esquema:

*file_get_contents('example.txt')*

Agora podemos traballar con esta cadea xa lida, á que podemos, por exemplo, asignarlle unha variable e saíla como texto no navegador web:

```none
<?php
$example = file_get_contents('example.txt');
echo $example;
?>
```

copiar

[![O script le o ficheiro example.txt.](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_2.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_2.png)O ficheiro lido sae como texto no navegador.

Na vista do navegador podes ver o texto devolto sen parágrafos. Non se poden mostrar saltos de liña no ficheiro orixinal, o que está relacionado co feito de que o navegador web interpreta o texto do script como código HTML, polo que pérdense a configuración definida nos editores de texto.

Se queres manter a estrutura orixinal, podes recorrer a diferentes posibilidades. Podes engadir manualmente a codificación HTML para o salto de liña ( *br* ) no ficheiro fonte, etiquetar o contido do ficheiro con *<pre> e asignar a propiedade* *de espazo en branco CSS: pre-envolver* a esta sección, ou podes usar a *función nl2br ( )* para indicarlle a PHP que *as liñas novas* deberían transformarse automaticamente en saltos de liña HTML ( *saltos* ) *.* A función debe utilizarse seguindo o seguinte esquema:

```none
<?php
$example = file_get_contents('example.txt');
echo nl2br($example);
?>
```

copiar

*Se o construtor da linguaxe echo* se usa en combinación con *nl2br()* , PHP insire un salto de liña HTML antes de cada liña.

[![Aplicación da función nl2br().](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_3.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_3.png)A función nl2br() axuda a estruturar os datos lidos.

Para **mostrar as liñas dun ficheiro por separado,** pode usar a función *file()* , que le o ficheiro, numera todas as liñas que comezan por 0 e garda o seu contido como elementos dunha matriz. Trasladado ao noso exemplo, obtense a seguinte clasificación:

[0] = *Lorem ipsum dolor sit amet, consectetuer adipiscing elit.*

[1] = *Aenean commodo ligula eget dolor. Masa Aenea.*

[2] = *Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.*

[3] = *Donec* *quam* *felis,* *ultricies* *nec, pellentesque eu, pretium quis, sem.*

Para emitir o contido correspondente usando o construtor da linguaxe *echo* , é necesario indicar o número de liña desexado. Así, o seguinte script de exemplo entrega a primeira liña do ficheiro *example.txt* ao navegador :

```none
<?php
$example = file("example.txt");
echo $example [0];
?>
```

copiar

[![Aplicación da función file().](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_4.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut16_4.png)Escolla o elemento da matriz que quere publicar.

### Redacción de arquivos

Con PHP non só se poden ler ficheiros, senón que a linguaxe de programación tamén dá a posibilidade de crealos e describilos con contido.

Para iso utilízase a función PHP ***file_put_contents()*** *, que espera **dous parámetros:** o nome do ficheiro que se debe crear ou actualizar e os datos en forma de cadea ou matriz.*

*O seguinte script crea o ficheiro test.txt e escribe a cadea This is a test! (Esta é unha proba!) na primeira liña. O suplemento \r\n produce un salto de liña no ficheiro de destino.* *Imos velo:*

```none
<?php
file_put_contents("test.txt", "This is a test! \r\n");
echo "test.txt was created!";
?> 
```

copiar

[![Operacións de ficheiros: escritura de ficheiros](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut17.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut17.png)O script PHP escribe a cadea Esta é unha proba! no ficheiro test.txt.

Dado que a **función file_put_contents non proporciona ningunha saída ao navegador, engadimos unha instrución de eco que nos indica que acción se vai levar a cabo.**

Se o *cartafol de destino xa contén un ficheiro co mesmo nome, sobrescribirase, o que se evita establecendo o parámetro* *FILE_APPEND* *. Vexamos a tradución da captura de pantalla correspondente ao castelán:*

```none
<?php
file_put_contents("test.txt","The test was successful! \r\n", FILE_APPEND);
echo "test.txt was updated!";
?> 
```

copiar

*Se se usa file_put_contents() co parámetro* *FILE_APPEND* , engadiranse novos contidos aos existentes.

[![Operacións de ficheiros: actualización de ficheiros](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut18.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut18.png)O script PHP engade a cadea A proba foi exitosa! ao ficheiro test.txt.

*O que PHP escribe no ficheiro de destino non ten que estar definido no script. Alternativamente, tamén existe a posibilidade de **transmitir o contido dun ficheiro a outro** . O seguinte script le o contido do ficheiro example.txt e insíreo no ficheiro test.txt:*

```none
<?php
$example= file_get_contents("example.txt");
file_put_contents("test.txt", $example, FILE_APPEND);
echo "test.txt was updated!";
?>
```

copiar

[![Operacións de ficheiros: transmisión do contido dun ficheiro a outro](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut19.png)](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots/EN-php-tut19.png)O script PHP le os datos do ficheiro example.txt e engádeos ao ficheiro test.txt.