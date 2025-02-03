---
title: Atallos Markdown
description: Trucos de como escribir Markdown e como se visualiza interpretado
---

Esta folla de trucos de Markdown ofrece unha visión xeral rápida de todos os elementos de sintaxe de Markdown. Non pode cubrir todos os casos extremos, polo que se precisa máis información sobre algún destes elementos, consulte as guías de referencia para [sintaxe básica](https://www.markdownguide.org/basic-syntax/) e [sintaxe estendida](https://www.markdownguide.org/extended-syntax/).

## Sintaxe básica

Estes son os elementos descritos no documento de deseño orixinal de John Gruber. Desde o seu nacemento Markdown adoptou [distintos estilos](https://github.github.com/gfm/) de renderizado vinculados a programas de edición e|ou plataforms de soporte. Todas as aplicacións Markdown admiten estes elementos.

### Cabeceiras

```md
# H1
## H2
### H3
```

# H1

## H2

### H3

### Enfasé en negriña

```md
**texto reslatado en negriña**
```

**texto reslatado en negriña**

### Enfasé en cursiva

```md
*texto en cursiva/italica*
```

*texto en cursiva/italica*

### Bloque de cita

```md
> Un bloque destacado
```

> Un bloque destacado

### Listas ordeadas

```md
1. Primeiro item
2. Segundo item
3. Terceiro item
```

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista desordeada

```md
- Primeiro item
- Segundo item
- Terceiro item
```

- Primeiro item
- Segundo item
- Terceiro item

### Citas de código en liña

```md
citar `código` en liña
```

citar `código` en liña

### División horizontal

```md
---
```

---

### Ligazón

```md
[Guía Markdown](https://www.markdownguide.org)
```

[Guía Markdown](https://www.markdownguide.org)

### Imaxe

```md
![alt text](./assets/Wikipedia-logo-v2.svg.png)
```

![alt text](./assets/Wikipedia-logo-v2.svg.png)

## Sintaxe extendida

Estes elementos extenden a sintaxe básica engadindo funcións adicionais. Non todos os editores de Markdown soportan estes elementos.

### Táboa

```md
| Sintaxe | Descrición |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```

| Sintaxe | Descrición |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Bloque de código cercado

````md
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Notas ao pé

```md
Esta é unha sentenza con unha nota ao pé. [^1]

[^1]: Esta é a nota ao pé.
```

Esta é unha sentenza con unha nota ao pé. [^1]

[^1]: Esta é a nota ao pé.

### Cabeceira con ID

```md
### Un gran titular {#titular-id}
```

### Un gran titular {#titular-id}

### Lista de definición

```md
- termo1

  - : Descrición do termo1

- `termo2`

  - : Descrición do termo2

    Pode conter varios parágrafos e tamén bloques de código:

    ```js
    const thing = 1;
    ```
```

- termo1

  - : Descrición do termo1

- `termo2`

  - : Descrición do termo2

    Pode conter varios parágrafos e tamén bloques de código:

    ```js
    const thing = 1;
    ```

### Riscado

```md
~~Riscar este texto.~~
```

~~Riscar este texto.~~

### Lista de tarefas

```md
- [x] Escribir novos artigos
- [ ] Actualizar website
- [ ] Contactar co medio
```

- [x] Escribir novos artigos
- [ ] Actualizar website
- [ ] Contactar co medio

### Emoji

```md
Isto pode ser divertido! :joy:
```

Isto pode ser divertido! :joy:

(Ver tamén [Copiar e Pegar Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

```md
Se necesitas destacar algunhas ==palabras moi importantes==.
```

Se necesitas destacar algunhas <mark>palabras moi importantes</mark>.

### Subscript

```md
H~2~O
```

H<sub>2</sub>O

### Superscript

```md
X^2^
```

X<sup>2</sup>

### HTML

Markdown tamén admite elementos HTML en liña co marcado e etiquetas propio da linguaxe de hipertexto.

Isto pode ser útil para inserir entidades HTML como  `&rarr;`, `&euro;`,  `&copy;`, `&mldr;`

Isto pode ser útil para inserir entidades HTML como  &rarr;,  &euro;,  &copy; …

Ou presentar unha información difícil de codificar con markdown:

```html
<center><small>Ou presentar unha información difícil de codificar con markdown.</small></center>
```

<center><small>Ou presentar unha información difícil de codificar con markdown.</small></center>

### ...

---

*_ref:*

- *[Daring Fireball: Markdown](https://daringfireball.net/projects/markdown/)*
- *[MDN Cómo escribir en Markdown](https://developer.mozilla.org/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)*
- *[Markdown Guide](https://www.markdownguide.org/)*
- *[Markdown and Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)*
- *[Markdown style guide](https://docs.gruntwork.io/guides/style/markdown-style-guide/)*

---
##### NOTAS:
