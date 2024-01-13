---
title: Introdución a Markdown
description: Markdown é unha linguaxe de marcado sinxelo e poderoso
---

Markdown é unha linguaxe de marcado con sintaxis en texto plano deseñada para xerar textos con formato.

A denominación se refire tanto a

1. unha maneira de formatar arquivos de texto, como a 
2. unha utilidade da linguaxe de programación Perl para converter arquivos Markdown en HTML.

Nesta lección centrarémonos na primeira acepción e aprenderemos a escribir arquivos utilizando a sintaxis Markdown.

Os arquivos de texto plano teñen moitas vantaxes sobre outros formatos. Por unha banda, pódense ler practicamente en tódolos dispositivos. Tamén resisten o paso do tempo mellor que outro tipo de arquivos -p.ex. é fácil atopar problemas para abrir documentos gardados nun formato de procesador de textos herdado, ou incluso entre distintos procesadores-.

Ao empregar a sintaxe Markdown, os arquivos xerados poden ser lidos como texto plano ao tempo que quedan listos para ser formatados noutras plataformas. Moitos xeradores de bitácoras e de sitios estáticos, así como sitios como GitHub, tamén aceptan Markdown e traducen eses arquivos a HTML para a súa visualización na web. Ademáis, ferramentas como Pandoc poden converter arquivos a Markdown ou desde Markdown.

### Que é Markdown?

Markdown foi desenvolvido en 2004 por [John Gruber](http://daringfireball.net/projects/markdown/) e refírese tanto a (1) unha forma de formar arquivos de texto como (2) a unha utilidade de linguaxe de programación Perl para converter arquivos de Markdown a HTML. Nesta lección centrarémonos no primeiro significado e aprenderemos a escribir arquivos usando a sintaxe de Markdown.

Os arquivos de texto simple teñen moitas vantaxes sobre outros tipos de formatos. Por unha banda, pódense ler en practicamente todos os dispositivos. Tamén resistiron a proba do tempo mellor que outros tipos de arquivos; se algunha vez intentou abrir un documento gardado nun formato [de procesamento de textos herdado](https://es.wikipedia.org/wiki/Sistema_heredado) , estará familiarizado cos problemas de compatibilidade que implica.

Ao usar a sintaxe de Markdown, poderás producir arquivos que se poden ler como texto simple e que tamén están listos para ser formados noutras plataformas. Moitos xeradores de blogs e sitios estáticos, así como sitios como GitHub, tamén aceptan Markdown e traducen estes arquivos a HTML para velos na web. Ademais, ferramentas como Pandoc poden converter arquivos a ou desde Markdown. Para obter máis información sobre Pandoc podes consultar a lección sobre [escritura sostible usando Pandoc e Markdown](https://programminghistorian.org/es/lecciones/escritura-sostenible-usando-pandoc-y-markdown) de Dennise Tenen e Grant Wythoff.

### Sintaxe en Markdown

Os arquivos en Markdown gárdanse coa extensión `.md`e pódense abrir nun editor de texto como TextEdit, Notepad, Sublime Text ou Vim. Moitos sitios web ou plataformas de publicación tamén ofrecen editores e/ou extensións baseados na web para introducir texto mediante a sintaxe de Markdown.

Tamén se pode practicar a sintaxe de Markdown no navegador usando algún dos moitos editores en liña. P.ex. [StackEdit](https://stackedit.io/) . Poderás introducir texto formado en Markdown á esquerda e ver inmediatamente a versión interpretada ao seu carón á dereita.

~~Dado que todas as leccións *de The Programming Historian* están escritas en Markdown, tamén podemos examinar os seus arquivos en StackEdit. Copia o texto en formato de rebaixa da lección [Introdución á liña de comandos en Bash](https://programminghistorian.org/es/lecciones/introduccion-a-bash) na seguinte ligazón:~~
~~https://raw.githubusercontent.com/programminghistorian/jekyll/gh-pages/es/lecciones/introduccion-a-bash.md~~

~~Accede ao [editor de StackEdit](https://stackedit.io/) facendo clic en "comezar a escribir" na parte superior da páxina e pega o texto da lección.~~

~~Verás que mentres o panel da dereita presenta unha presentación máis elegante do texto, o arquivo Markdown da esquerda aínda é bastante lexible.~~

~~Imos mergullar agora na lección escribindo a nosa propia sintaxe de Markdown. Crea un novo documento en StackEdit facendo clic na icona do cartafol na esquina superior dereita e seleccionando "Novo documento". Debes nomear o documento na caixa de texto na parte superior da páxina.~~

#### Cabeceiras

Markdown ten catro niveis de cabeceiras definidos polo número `#`anterior ao texto da cabeceira. Pega os seguintes exemplos na caixa de texto da esquerda:

```
# Primer nivel de encabezado
## Segundo nivel de encabezado
### Terceiro nivel de encabezado
#### Cuarto nivel de encabezado
```

As cabeceiras de primeiro e segundo nivel tamén se poden escribir do seguinte xeito:

```
Primer nivel de encabezado
==========================

Segundo nivel de encabezado
--------------------------
```

Estes estarán representados como:

# Cabeceira de primeiro nivel

## Cabeceira de segundo nivel

### Cabeceira de terceiro nivel

#### Cabeceira de cuarto nivel

# Cabeceira de primeiro nivel

## Segundo nivel de epígrafe

Teña en conta que a sintaxe de Markdown aínda é comprensible mesmo na versión de texto sinxelo.

#### Parágrafos e saltos de liña

Escribe a seguinte frase no cadro de texto:

```
¡Bienvenidos a *The Programming Historian en español*!

Hoy aprenderemos la sintaxis de Mardown.
Esta frase está separada de la anterior por un solo salto de línea.
```

**Isto represéntase como:**

Benvido a *The Programming Historian en español* !

Hoxe aprenderemos a sintaxe de Markdown. Esta frase está separada da anterior por un único salto de liña.

Os parágrafos deben estar separados por unha liña baleira. Deixa unha liña entre o que contén `Markdown.`e `Ésta`así podes ver como funciona. Os saltos de liña simples deben indicarse con dous espazos en branco nalgunhas implementacións de Markdown. Isto non é necesario na [variante Flavored Markdown de GitHub](https://help.github.com/articles/github-flavored-markdown/) , que é o que usa StackEdit por defecto.

#### Engadir énfase

O texto pódese poñer en cursiva encerrándoo entre os símbolos `*`ou `-`. Do mesmo xeito, o texto en negra escríbese encerrando a palabra en `**`ou `__`.

Engade énfase a unha frase usando estes métodos:

```
¡Estoy **muy** entusiasmado con los tutoriales de _The Programming Historian en español_!
```

Que se representa así:

Estou **moi** entusiasmado cos tutoriais de *The Programming Historian* en español !

#### Listados

Markdown admite a creación de listas ordenadas e non ordenadas. Escribe a seguinte lista dentro do cadro de texto:

```
Lista de compras
---------------
* Frutas
  * Manzanas
  * Naranjas
  * Uvas
* Lácteos
  * Leche
  * Queso
```

A sangría `*`permítelle crear listas aniñadas.

**Isto desenvólvese así:**

## Lista da compra

- Froita
  - Mazás
  - Laranxas
  - Uvas
- Lácteos
  - Leite
  - Queixo

As listas ordenadas escríbense numerando cada liña. Unha vez máis, o obxectivo de Markdown é producir documentos que sexan lexibles como texto simple e aínda se poidan traducir a outros formatos.

```
Lista de pendientes
------------------
1. Terminar el tutorial de Markdown
2. Ir a la tienda de abarrotes
3. Preparar el almuerzo
```

Que se mostra do seguinte xeito:

## Lista de pendentes

1. Finaliza o tutorial de Markdown
2. Vaia ao supermercado
3. Prepara o xantar

#### *Fragmentos* de código

Representar fragmentos de código de forma diferente ao resto do documento é unha boa práctica que o fai máis lexible. A escritura de código xeralmente represéntase nun só espazo. Dado que Markdown non distingue as fontes implicadas, representamos fragmentos de código encerrados entre dous signos de acento grave ```. Por exemplo: ``<br/>``. Cando queremos representar un bloque completo de código debemos encerralo entre dúas liñas de tres acentos graves. Na xanela de vista previa de StackEdit representarase como un cadro de texto sombreado e espazado.

Escribe o seguinte no cadro de texto:

````
```html
<html>
    <head>
        <title>Título del sitio Web</title>
    </head>
    <body>
    </body>
</html>
```
````

**E representarase así:**

```
    <html>
        <head>
            <title>Título del sitio Web</title>
        </head>
        <body>
        </body>
    </html>
```

Observe como se representa o bloque de código a continuación.

#### Bloque de citas

Escriba o seguinte texto na caixa de texto:

```
> Hola. Éste es un párrafo de texto incluido en un bloque de cita. Fíjate que tengo una sangría con respecto al margen izquierdo.
```

Que estarán representados:

> Ola. Este é un parágrafo de texto incluído como bloque de citas no texto. Teña en conta que teño unha sangría con respecto á marxe esquerda.

#### Ligazóns a Internet

As ligazóns a Internet pódense escribir de dúas formas.

O título da ligazón encóntrase primeiro entre corchetes e despois o enderezo URL completo entre parénteses.

```
Para más tutoriales visita la página [The Programming Historian en español](/es).
```

**Que se representa así:**

Para obter máis titoriais, visite a páxina [The Programming Historian](https://programminghistorian.org/es) en español .

As ligazóns tamén se usan para crear notas ao pé e son útiles porque tamén axudan a que o teu documento de texto sinxelo sexa máis organizado. As notas a pé de páxina están escritas cun par adicional de corchetes co número de referencia para establecer a ligazón que identifica a etiqueta.

```
Un ejemplo es el sitio *[The Programming Historian en español][1]*
```

Despois pode incluír o URL noutro lugar do documento:

```
[1]: http://programminghistorian.org/
```

Que se desprega do seguinte xeito:

Un exemplo é o sitio *[The Programming Historian en castelán](http://programminghistorian.org/)*

#### Imaxes

As imaxes pódense referenciar usando `!`, seguido de texto alternativo entre corchetes, seguido do URL da imaxe e un título opcional entre comiñas. Isto non se mostrará como texto no teu documento, pero permitirache incluír a imaxe na visualización dunha páxina HTML.

```
![Logo de Wikipedia](https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg "Wikipedia logo")
```

**Isto aparece como:**

![Logotipo da Wikipedia](./assets/Wikipedia-logo-v2.svg)

#### Regras e liñas horizontais

Podes incluír liñas horizontais se escribes na mesma liña algún dos tres signos seguintes: `-`. `*`ou `_`, independentemente dos espazos que deixes entre eles. Calquera destas combinacións xerará unha liña horizontal:

```
___
* * *
- - - - - -
```

É dicir:

------

------

------

#### Táboas

A versión básica de Markdown non inclúe táboas; Non obstante, algúns sitios web e aplicacións usan variantes de Markdown que poden incluír táboas e outras funcións especiais. [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/) é unha destas variantes e úsase para ver arquivos `.md`no navegador do sitio GitHub.

Para crear unha táboa en GitHub, usa barras verticais `|`para separar columnas e guións entre as cabeceiras e o resto do contido da táboa. Dado que as barras verticais só son estrictamente necesarias entre as columnas, podes usalas nos extremos da táboa para darlle unha vista máis acabada. As celas poden conter contido de calquera lonxitude e as barras verticais non precisan estar aliñadas verticalmente entre si.

```
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| --------- | --------- | --------- |
| renglón 1, columna 1 | renglón 1, columna 2 | renglón 1, columna 3|
| renglón 2, columna 1 | renglón 2, columna 2 | renglón 2, columna 3|
| renglón 3, columna 1 | renglón 3, columna 2 | renglón 3, columna 3|
```

**Isto parece isto:**

| Título 1          | Título 2          | Título 3          |
| :---------------- | :---------------- | :---------------- |
| fila 1, columna 1 | fila 1, columna 2 | fila 1, columna 3 |
| fila 2, columna 1 | fila 2, columna 2 | fila 2, columna 3 |
| fila 3, columna 1 | fila 3, columna 2 | fila 3, columna 3 |

Para especificar o aliñamento do contido de cada columna, pódense engadir dous puntos `:`á fila de cabeceira do seguinte xeito:

```
| Alineado-izquierda | Centrado | Alineado-derecha |
| :-------- | :-------: | --------: |
| Manzanas | rojo | 5000 |
| Plátanos | amarillo | 75 |
```

Que se representa deste xeito:

| aliñado á esquerda | Centrado | Aliñado á dereita |
| :----------------- | :------: | ----------------: |
| Mazás              | vermello |              5000 |
| Plátanos           | amarelo  |                75 |

### Limitacións de Markdown

Aínda que Markdown é cada vez máis popular, especialmente para os documentos con formato que se poden ver na web, moitas persoas e editores aínda solicitan arquivos tradicionais en Word, PDF e outros formatos. Isto pódese solucionar en parte usando ferramentas de conversión en liña como [Pandoc](http://johnmacfarlane.net/pandoc/) . Non obstante, algunhas funcións do procesador de textos, como o seguimento dos cambios, aínda non son compatibles. Para obter máis información sobre Pandoc, visite a lección de Historiador da programación en español sobre [a escritura sostible en texto plano usando Pandoc e Markdown .](https://programminghistorian.org/es/lecciones/escritura-sostenible-usando-pandoc-y-markdown)

### Conclusións

Markdown é unha vía intermedia útil entre arquivos de texto simple sen estilo e documentos de procesadores de textos legados. A súa sintaxe sinxela apréndese rapidamente e é moi lexible no mesmo documento e cando se transforma en HTML ou noutro tipo de documentos. En conclusión, escribir os teus documentos en Markdown significa que poderán ser usados e lidos a longo prazo.

---

__ref: https://programminghistorian.org/es/lecciones/_
