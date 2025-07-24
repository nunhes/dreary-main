---
title: Linguaxes de marcado ou de marcas
description: Unha linguaxe de marcas  é unha forma de codificar un documento coa estrutura do texto ou o seu formato de presentación
---



## Que son as linguaxes de marcado

Unha **linguaxe de marcas** é unha forma de codificar (escribir) un documento onde, xunto co texto, se incorporan etiquetas (marcas ou anotacións) con información adicional relacionada coa estrutura do texto ou o seu formato de presentación. As linguaxes de marcado permítenche facer explícita a estrutura dun documento, o seu contido semántico ou calquera outra información lingüística ou extralingüística que queiras aclarar.

Un **exemplo** de linguaxe de marcado sería o seguinte, no que vemos como o texto se encerra entre etiquetas para darlle un significado ou representación:

```
<letra>
	<data>22/11/2006</data>
	<presentation>Estimado cliente:</presentation>
	<content>bla, bla, bla...</content>
	<signatura>D. José Gutiérrez González</signature>
</letra>
```


## Tipos de linguaxes de marcado

As linguaxes de marcado pódense clasificar do seguinte xeito:

- **Idiomas de presentación** : define o formato (aspecto) do texto. Estes adoitan ocultar as etiquetas e mostrar ao usuario só o texto con formato.
- **Linguaxes procedimentais** : Orientadas tamén á presentación, pero ademais, o programa que representa o documento debe interpretar as etiquetas para realizar accións en función delas.
- **Linguaxes descritivas ou semánticas** : Describen as distintas partes nas que se estrutura o documento, é dicir, definen o seu contido, pero sen especificar como deben representarse.
 

## Exemplos de linguaxes de marcado

Algúns exemplos de linguaxes de marcado segundo a clasificación anterior serían: 

**Linguaxes de presentación**

- **RTF** (Rich Text Format): Desenvolvido por Microsoft en 1987. Representa documentos de texto con formato de presentación engadido.

```text
{\rtf1\ansi{\fonttbl\f0\fswiss Helvetica;}\f0\pard
 Este é texto en {\b negra}.\par
 }
```

- **TeX** : Representa fórmulas matemáticas complexas.

```tex
$\sin(\pi)=1$
```

- **Wikitexto** : Permite a creación de páxinas tipo Wiki.

```wiki
''Texto en cursiva''
```


**Linguaxes procesuais**

- **HTML** (Hypertext Markup Language): O seu obxectivo é a creación de documentos cun formato visual interesante para compartir en Internet.

```html
<p>Este é un <strong>texto en negra</strong></p>
```

- **LaTeX** : É un sistema de composición de textos, destinado a crear documentos escritos que presenten unha alta calidade tipográfica.

```latex
\LaTeX{} é un programa para preparar documentos co sistema de tipografía\footnote{%footnote Segundo a Wikipedia, a tipografía é a arte e a técnica de manexar e seleccionar 'no tipo, orixinalmente plomo, para crear traballos de impresión } %end footnote\TeX {}.\nova liña
```


**Linguaxes descritivas**

- **XML** (eXtensible Markup Language): é un metalenguaxe que permite definir outras linguaxes de marcado.

```xml
<letra>
 <data>22/11/2006</data>
 <presentacion>Estimado cliente:</presentacion>
 <contido>bla, bla, bla...</contido>
 <firma>D. José Gutiérrez González</firma>
</letra>
```


## Evolución das linguaxes de marcado

As linguaxes de marcado xurdiron inicialmente como linguaxes constituídas polo conxunto de códigos de formato que os procesadores de textos introducen nos documentos para dirixir o proceso de presentación (impresión) mediante unha impresora. Como no caso das linguaxes de programación, estes códigos de formato estaban inicialmente ligados ás características dunha máquina, programa ou procesador de textos concreto e, inicialmente, non había nada neles que permitise ao programador (formateador de documentos neste caso) abstraerse de as características do procesador de textos e expresar independentemente del a estrutura e a lóxica interna do documento.

Posteriormente, engadíronse como medio de presentación á pantalla. Xa non se usan os códigos de estilo de visualización antigos e utilízanse outros medios de marcado, ademais de incluír manualmente cadeas de formato, agora ese proceso está automatizado e basta con premer unha combinación de teclas, ou premer un botón, para conseguir os resultados desexados. . resultados requiridos. Aínda que isto é só unha abstracción, para uso interno as aplicacións aínda usan o marcado para delimitar aquelas partes de texto que teñen un formato especial.

Este marcado orientouse exclusivamente á presentación da información, aínda que pronto se decataron das posibilidades de marcado e lle deron novos usos que resolvían unha gran variedade de necesidades, apareceu o formato xeneralizado.

 

### GML (Linguaxe de Marcado Xeral)

Un dos problemas que se coñecen dende hai décadas na informática é a falta de estandarización dos formatos de información empregados polos diferentes programas.

Para solucionar este problema, na década de 1960 IBM encargou a Charles F. Goldfab a construción dun sistema para editar, almacenar e buscar documentos legais. Despois de analizar o funcionamento da empresa, chegaron á conclusión de que, para procesar correctamente os documentos mediante ordenador, cómpre establecer un formato normalizado para todos os documentos que manexa a empresa. Isto permitiu xestionar calquera documento en calquera departamento e con calquera aplicación, sen ter en conta onde nin con que se xerou o documento. Este formato tiña que ser válido para os distintos tipos de documentos legais empregados pola empresa, polo que debía ser flexible para poder axustarse ás diferentes situacións.

O formato de documento que se creou como resultado deste traballo foi GML, cuxo obxectivo era describir documentos de forma que o resultado fose independente da plataforma e da aplicación utilizada.

 

### SGML (Standard Generalized Markup Language).

O formato GML evolucionou ata 1986, cando deu lugar ao estándar ISO 8879, que se chamou SGML. Esta era unha linguaxe moi complexa e requiría ferramentas de software caras. Por este motivo, o seu uso quedou relegado a grandes aplicacións industriais.

 

### HTML (Linguaxe de marcado de hipertexto).

En 1989/90 Tim Berners-Lee creou a World Wide Web e atopouse ante a necesidade de organizar, vincular e compatibilizar unha gran cantidade de información de varios sistemas. Para resolver este problema, creou unha linguaxe de descrición do documento chamada HTML, que en realidade era unha combinación de dous estándares existentes:

- ASCII: é unha codificación de caracteres que calquera procesador de textos pode recoñecer e almacenar. Polo tanto, permite a transferencia de datos entre distintos ordenadores.
- SGML: Linguaxe que permite estruturar texto, destacando títulos ou aplicando varios formatos ao texto.

HTML é unha versión simplificada de SGML, xa que só se utilizaron as instrucións absolutamente esenciais. Era tan fácil de entender que axiña gañou unha aceptación xeneralizada, logrando o que SGML non puido. HTML converteuse nun estándar xeral para crear páxinas web. Ademais, tanto as ferramentas de software como os navegadores que permiten ver páxinas HTML son cada vez mellores.

A pesar de todas estas vantaxes, HTML non é unha linguaxe perfecta. As súas principais desvantaxes son:

- Non admite tarefas de impresión e deseño.
- O idioma non é flexible, xa que as etiquetas son limitadas.
- Non permite mostrar contido dinámico.
- No documento mestúranse estrutura e deseño.

 

### XML (Linguaxe de marcado extensible)

Para resolver estes problemas de HTML, o W3C estableceu, en 1998, o estándar internacional XML, unha linguaxe de marcado puramente estrutural que **non inclúe ningunha información relacionada co deseño** . Estase a converter rapidamente no estándar para o intercambio de datos na web. A diferenza do HTML, as etiquetas indican o significado dos datos en lugar do formato no que se mostrarán.

XML é unha metalinguaxe caracterizada por:

- Permite definir etiquetas propias.
- Permitir asignar atributos ás etiquetas.
- Use un esquema para definir con precisión etiquetas e atributos.
- A estrutura e o deseño son independentes.

 

### XHTML (Linguaxe de marcado de hipertexto extensible)

XHTML xurdiu en 2000, basicamente para expresar a linguaxe HTML como unha linguaxe XML válida, e para convertela dunha linguaxe de marcado procedimental a unha linguaxe de marcado descritivo.

Aínda que apenas se utiliza no desenvolvemento de sitios web, podemos ver como HTML5 e versións posteriores se foron desenvolvendo neste camiño, centrándonos na descrición do contido e non na súa presentación.

---

XAN 2025