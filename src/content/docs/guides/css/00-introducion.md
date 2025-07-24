---
title: Introdución CSS
description: Follas de estilo en cascada...
---


CSS (Cascading Style Sheets) é unha linguaxe de estilos utilizada para describir a presentación dun documento escrito en HTML ou XML (incluíndo vários formatos de XML como SVG ou XHTML). A principal función do CSS é controlar o aspecto visual e o formato do contido das páxinas web, permitindo separar o contido (HTML) da súa presentación (CSS).

### Principais conceptos de CSS

1. **[Selectores](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors):** Permiten apuntar elementos HTML específicos e aplicarlles estilos. Pódese seleccionar por **[etiquetas HTML](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)**, **[clases](https://developer.mozilla.org/es/docs/Web/CSS/Class_selectors)**, **[identificadores](https://developer.mozilla.org/es/docs/Web/CSS/ID_selectors)**, **[atributos](https://developer.mozilla.org/es/docs/Web/CSS/Attribute_selectors)** ou **[relacións entre elementos](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)**.

   Exemplo:
   ```css
   /* selector de etiqueta */
   p {
       color: blue;
   }
   
   /* selector de clase */
   .destacado {
       font-weight: bold;
   }
   
   /* selector de identificador */
   #encabezado {
       font-size: 24px;
   }
   
   /* selector de elementos <a> co atributo title */
   a[title] {
     color: purple;
   }
   
   /* selector de elementos <a> cun href que coincida con "https://example.org" */
   a[href="https://example.org"]
   {
     color: green;
   }
   ```

2. **[Propiedades](https://developer.mozilla.org/es/docs/Web/CSS/Reference):** Son os atributos que se lles aplican aos elementos seleccionados. Controlan a aparencia, o formato e a posición dos elementos na páxina.

   Exemplo:
   ```css
   /* propiedades */
   p {
       color: blue; /* cor do texto */
       font-size: 16px; /* tamaño da letra */
       margin-top: 20px; /* marxe superior */
   }
   ```

3. **[Valores](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units):** Son os valores asignados a cada propiedade e poden ser medidas (px, em, %), cores, texto ou outros valores predefinidos.

4. **[Modelo de caixa](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model):** Cada elemento HTML é representado como unha caixa (box) que inclúe o contido, o marxe, o preenchido (padding) e os bordos.

5. **[Herdanza](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance):** Algúns estilos aplicados a un elemento poden ser herdados por elementos fillos.

### Sintaxe básica de CSS

Unha regra CSS consta dun selector e un conxunto de propiedades e valores separados por dous puntos (:). O conxunto de propiedade-valor vai seguido por un punto e coma (;). As regras CSS normalmente son escritas nun arquivo separado coa extensión `.css` ou tamén poden ser incluídas internamente nun documento HTML.

Exemplo de uso interno:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* rexión CSS interna */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Exemplo de CSS</h1>
    <p>Este é un parágrafo co estilo aplicado.</p>
</body>
</html>
```

Exemplo de uso externo:
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Exemplo de CSS</h1>
    <p>Este é un parágrafo co estilo aplicado.</p>
</body>
</html>
```

### Conclusión

O CSS é unha ferramenta poderosa para controlar a aparencia visual das páxinas web, permitindo unha presentación máis atractiva e unha separación máis clara entre o contido e a súa presentación. É fundamental para a creación de sitios web modernos e responsivos.