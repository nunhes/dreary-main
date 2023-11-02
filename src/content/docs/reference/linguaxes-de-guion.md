---
title: Que son as linguaxes de guión?
description: Coas linguaxes de guión podes programar dun xeito máis directo e con menos código fonte
---

As linguaxes de guión ou *de scripting* son unha familia de linguaxes de programación que se poden empregar para resolver rapidamente as demandas de programación máis comúns. As linguaxes *de script* máis antigas usáronse máis para aplicacións moi específicas ou como *linguaxes de pegamento* , é dicir, para vencellar ou re-unir sistemas xa existentes. Coa aparición da World Wide Web, xa que as linguaxes *de script* simplifican o procesamento de texto, unha serie de linguaxes *de script* foron empregados para o seu uso en servidores web. 

son perfectas para **crear páxinas HTML de forma dinámica** .

Hoxe, as linguaxes de guión representan, [segundo o índice TIOBE](https://www.tiobe.com/tiobe-index/) , arredor dun terzo das linguaxes de programación máis utilizadas no mundo. Mentres **JavaScript** é practicamente a única linguaxe *de script* que se executa principalmente no navegador [- lado do cliente-](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/lenguajes-del-lado-servidor-o-del-cliente-diferencias/) , outras linguaxes PHP, Python, Ruby ou Perl son linguaxes *de script* que se executan do lado do servidor.

## Diferenzas entre as linguaxes de script e as linguaxes de programación

Nas linguaxes de programación convencionais, como **C, C++ ou Java**, o programador escribe texto|código fonte que, nun paso posterior, se convirte en código binario. Logo, o arquivo de texto fonte —sobre o que traballa o programador— debe ser tratado por un [**compilador**](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/compilador-e-interprete/)  que xera un arquivo binario que é o que finalmente se executa directamente no ordenador.

A compilación, transformación do texto fonte en código binario, encargase de compróbar a validez do código fonte: *están definidas todas as variables utilizadas?, coinciden os tipos de argumentos de función coas definicións das funcións?, esqueceuse algún elemento?,...* Cada vez que executamos un programa creado con estas linguaxes se repite esta comprobación para todo o texto|código; e isto leva o seu tempo tempo. O [código binario](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/codigo-binario/) obtido durante a compilación está optimizado, funciona con rapidez e co menor número de erros posibles durante a súa execución. Isto fai que as linguaxes compiladas sexan especialmente útiles para tarefas con alta intensidade de procesamento e grandes sistemas.

A diferenza dos programas creados a partires destas linguaxes de programación, un programa escrito nunha linguaxe de *script* non require compilación. Isto fai que os programas escritos en linguaxes *de script* teñan unha execución xeralmente menos eficiente. Aínda así, esta diminución da eficiencia non é só unha desvantaxe, senón unha elección consciente; pois as linguaxes *de script* **reducen a carga do programador e aumentan a carga do procesador.** As linguaxes *de script* son especialmente axeitadas para programas pequenos e medianos.

**A idea de facilitar o traballo do programador é o fío condutor da arquitectura de moitas linguaxes *de script*.** 

Coas linguaxes *de script* podes programar dun xeito máis directo e con menos texto|código fonte. Se comparas os seguintes exemplos, verás que ambos programas ofrecen o mesmo resultado:

```java
// exemplo "Ola mundo" en Java
class OlaMundo {
  static public void main( String args[] ) {
    System.out.println( "Ola, mundo!" );
  }
}
```

```python
# exemplo "Ola mundo" en Python
print "Ola, mundo!"
```

## Características das linguaxes de guión

Como xa se mencionou, **os programas de linguaxe *de script* non precisan ser transformados en código binario por un compilador antes de ser executados**. En lugar do compilador, úsase un programa **intérprete**. E será o intérprete o que xera e executa o código binario resultante.

> *Imaxina o código fonte como unha partitura musical para unha orquestra. E, o código binario como unha gravación en CD da peza musical. A peza musical en CD pódese reproducir en calquera reprodutor compatible, pero xa non se pode modificar. O intérprete sería á orquestra, que interpreta a peza musical en directo, e pode facer axustes en cada actuación.*

## Como programar con linguaxes de script de forma interactiva por REPL

En moitas linguaxes *de script* é posible executar o intérprete de forma interactiva. Isto denomínase **modo REPL** - *read-eval-print-loop*-, que se pode entender como *un ciclo de lectura, execución e mostra*. O programador transmite o texto fonte ao intérprete, que o *le* e *executa* . A continuación, o intérprete *mostra o resultado e agarda a que a seguinte entrada de datos repita o ciclo.*

Se se produce un fallo no modo REPL, o programador pode ver o contido das variables para localizalo. Ademais, tamén é posible sobrescribir o valor dunha variable e probar parte do texto fonte co novo valor. Deste xeito, é posible compoñer un programa a partir de pequenas pezas xa probadas. **O desenvolvemento e a resolución de erros realízanse dunha soa vez.** O que fai que sexa máis rápido e sinxelo escribir un programa funcional.

### Definir estruturas de datos complexas en linguaxes de script

**O obxectivo das linguaxes *de script* é facilitar o traballo dos programadores.** Estas linguaxes ofrecen unha serie de ferramentas para iso, incluíndo estruturas de datos completas, **como secuencias de caracteres, listas, campos e obxectos** . Estes poden escribirse en linguaxe *de guións* en forma de *literais*. Isto fai posible proxectar estruturas de datos complexas directamente, en lugar de construílas mediante varios comandos. O programador pode expresar as estruturas de datos necesarias con máis facilidade e aforrandose traballo.

```js
// exemplo para un literal de obxecto en JavaScript
client = {
    'nome': "Xián",
    'apelido': "Xove",
    'idade': 40,
    'activo': true,
    'direcions': {
        'privado': {},
        'empresa': {},
    },
}
```

```js
// exemplo para a xeración HTML mediante literal de plantilla en JavaScript
page_title = 'Que son as linguaxes de script?'
h1 = '<h1>${page_title}</h1>'
// return "<h1>Que son as linguaxes de script?</h1>"
```

### Tipado dinámico nas linguaxes de guión

Nos **exemplos anteriores,** quizais teña notado que **non hai ningún tipo** como *string* , *int* ou *bool* . Non obstante, o programa require información de tipo para a súa execución. Entón, de onde se obteñen?

En programación se necesita manexar distintos tipos de datos. Para o que usaremos variables como *almacens* deses datos. Xa que o tipo dunha variable non é fixo e pode variar dependendo do contexto, as linguaxes *de guión* adoitan basearse no **tipado dinámico**, que permite que o intérprete deduce o tipo de dato que conten unha variable do contexto. Por exemplo:

```python
# exemplo de tipado dinámico en Python
# un nome, representado como lista de nome, apelido
nome = ['Xián', 'Xove']
# o tipo da variable "nome" é "list"
type(nome)
# a continuación só necesitamos os nomes
nome = nome[0]
# o tipo da variable "nome" agora é "str"
type(nome)
```

## Aplicación de linguaxes de guión

As linguaxes *de script* clasifícanse segundo o uso e o lugar de uso. Algúns utilízanse na **liña de comandos** para agrupar secuencias de comandos e conseguir así a automatización. [Bash e PowerShell](https://www.ionos.es/digitalguide/servidores/know-how/windows-powershell/) pertencen a este tipo de linguaxe .

VBA e AppleScript realizan unha función similar. Con estes idiomas é posible **automatizar procesos** a nivel de aplicación.

PHP, Perl, Ruby, Python e JavaScript úsanse no **servidor web** para conseguir aplicacións web e sitios web dinámicos. JavaScript segue sendo a única linguaxe *de scripts* para navegadores web. Inicialmente só estaba pensado para programar elementos interactivos, pero hoxe en día aplicacións web enteiras están escritas en JavaScript.

As linguaxes *de scripting* tamén se usan nos campos da **estatística e da ciencia**, onde se usan principalmente R e Python.