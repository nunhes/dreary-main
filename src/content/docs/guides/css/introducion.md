---
title: Introdución CSS
description: Follas de estilo en cascada...
---


CSS (Cascading Style Sheets) é unha linguaxe de estilos utilizada para describir a presentación dun documento escrito en HTML ou XML (incluíndo vários formatos de XML como SVG ou XHTML). A principal función do CSS é controlar o aspecto visual e o formato do contido das páxinas web, permitindo separar o contido (HTML) da súa presentación (CSS).

### Principais conceptos de CSS:

1. **Seletores:** Permiten apuntar a elementos HTML específicos que desexa estilizar. Pódese seleccionar por etiquetas HTML, clases, identificadores, atributos ou relacións entre elementos.

   Exemplo:
   ```css
   /* Selector de etiqueta */
   p {
       color: blue;
   }

   /* Selector de clase */
   .destacado {
       font-weight: bold;
   }

   /* Selector de identificador */
   #encabezado {
       font-size: 24px;
   }
   ```

2. **Propiedades:** Son os atributos que se lles aplican aos elementos seleccionados. Controlan a aparencia, o formato e o posicionamento dos elementos na páxina.

   Exemplo:
   ```css
   /* Propiedades */
   p {
       color: blue; /* cor do texto */
       font-size: 16px; /* tamaño da letra */
       margin-top: 20px; /* marxe superior */
   }
   ```

3. **Valores:** Son os valores asignados a cada propiedade e poden ser medidas (px, em, %), cores, texto ou outros valores predefinidos.

4. **Modelo de caixas:** Cada elemento HTML é representado como unha caixa (box) que inclúe o contido, o marxe, o preenchido (padding) e os bordos.

5. **Herencia:** Algúns estilos aplicados a un elemento poden ser herdados por elementos fillos.

### Sintaxe básica de CSS:

Unha rexla CSS consta dun selector e un conxunto de propiedades e valores separados por dous puntos (:). O conxunto de propiedade-valor pode ir seguido por un punto e coma (;). As rexlas CSS normalmente son escritas nun arquivo separado coa extensión `.css` ou tamén poden ser incluídas internamente nun documento HTML.

Exemplo de uso interno:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Rexion CSS interna */
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

### Conclusión:

O CSS é unha ferramenta poderosa para controlar a aparencia visual das páxinas web, permitindo unha presentación máis atractiva e unha separación máis clara entre o contido e a súa presentación. É fundamental para a creación de sitios web modernos e responsivos.