---
title: Unified Modeling Language
description: Introducion a UML
---

# UML

UML é unha linguaxe gráfica que serve para **visualizar**, **especificar**, **construír** e **documentar** un sistema. UML ofrece un estándar para describir un "plano" ou modelo do sistema , incluíndo aspectos conceptuais tales como procesos, funcións do sistema, e aspectos concretos como expresións de linguaxes de programación, esquemas de bases de datos e compostos reciclados.

*É a linguaxe na que se describe un modelo.*

Mentres que a programación estruturada é unha forma de programar, UML non é programación, só o medio no que se diagrama a realidade dun uso nun requirimento.

UML permite construír distintos tipos de diagramas, que poden mostrar diferentes aspectos dun sistema.



UML, ou Modelado Unificado de Lenguaje (por sus siglas en inglés, Unified Modeling Language), é un estándar para a [notación gráfica de modelos](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/uml-lenguaje-unificado-de-modelado-orientado-a-objetos/) en linguaxe de programación orientada a obxectos. Este proporciona unha forma estandarizada de representar os elementos dun sistema e as súas relacións, o que facilita a comprensión, a comunicación e a documentación do deseño dun sistema de software.

## Tipos de diagramas

Os diagramas UML son ferramentas poderosas para os deseñadores e desenvolvedores de software, axudándolles a visualizar e comunicar a estrutura e o comportamento dun sistema. Algunhas das principais diagramas UML inclúen:

1. **[Diagrama de Clases](https://miro.com/es/diagrama/que-es-diagrama-clases-uml/):** Representa as clases no sistema, así como as súas relacións e propiedades. [2](https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-clases/)
2. **[Diagrama de Obxectos](https://miro.com/es/diagrama/que-es-diagrama-objetos-uml/):** Mostra instancias específicas de clases e as súas relacións nun punto dado do tempo.
3. **[Diagrama de Casos de Uso](https://es.venngage.com/blog/diagramas-de-casos-de-uso/):** Describe as funcións ou características que proporciona un sistema desde o punto de vista do usuario.
4. **[Diagrama de Secuencia](https://miro.com/es/diagrama/que-es-diagrama-secuencia-uml/):** Representa a interacción entre os obxectos nun escenario específico.
5. **[Diagrama de Estado](https://www.edrawsoft.com/es/uml/uml-state-diagram.html):** Modela os distintos estados dun obxecto e as transicións entre eles.
6. **[Diagrama de Actividade](https://miro.com/es/diagrama/que-es-diagrama-actividades-uml/):** Describe o fluxo de control dun proceso ou algoritmo.

Para trasladar UML á programación real, podes seguir os seguintes pasos:

1. **Tradución a Código:** Utiliza os conceptos de UML para escribir código en linguaxe de programación. Por exemplo, os diagramas de clase poden axudarte a crear as clases e as súas relacións no teu código.
2. **Descomposición de Módulos:** Cada clase ou módulo no teu diagrama pode ser traducido nunha unidade independente de código. Dividir o sistema en módulos fai que sexa máis manexable e comprensible.
3. **Aplicación de Patróns de Deseño:** Os diagramas UML tamén son útiles para aplicar patróns de deseño. Podes implementar eses patróns no teu código para resolver problemas comúns de deseño.
4. **Desenvolvemento Iterativo:** Podes utilizar UML nun proceso de desenvolvemento iterativo, onde cada iteración reflicte unha mellora incremental no teu código.
5. **Mantenemento e Actualización:** Despois de implementar o código, os diagramas UML tamén poden ser actualizados para reflectir cambios no deseño ou na implementación.
6. **Documentación:** Os diagramas UML tamén serven como unha forma de documentación para o teu código. Axudan a entender a estrutura do sistema e as súas relacións sen ter que mergullarse directamente no código fonte.

En resumo, UML é unha ferramenta poderosa para o deseño de software que pode ser traducida a código real mediante un proceso de interpretación e implementación. Facilita a comunicación entre os membros do equipo e axuda a manter un deseño consistente ao longo do ciclo de vida do proxecto.



## Software que facilite o transito de UML a código PHP OOP

Hai varias ferramentas de modelado UML que permiten xerar código directamente a partir dos diagramas UML, facilitando así o tránsito de UML a código en PHP orientado a obxectos (OOP). Algúns exemplos de ferramentas que podes explorar inclúen:

1. **[Enterprise Architect:](https://sparxsystems.com/products/ea/)** Esta ferramenta permite crear diagramas UML e xerar código en varias linguaxes, incluíndo PHP. Ofrece funcionalidades avanzadas de modelado e soporte para OOP.
2. **[Visual Paradigm](https://www.visual-paradigm.com):** Visual Paradigm é unha suite de modelado UML con capacidades de xeración de código para múltiples linguaxes, incluíndo PHP. Tamén pode integrarse con varios entornos de desenvolvemento.
3. **[Astah](https://astah.net):** Antigo "JUDE", Astah é unha ferramenta de modelado UML que tamén pode xerar código en PHP. Ofrece unha interface de usuario intuitiva e funcionalidades de xeración de código.
4. **[GenMyModel](https://www.coursera.org/projects/uml-genmymodel):** Esta é unha ferramenta de modelado en liña que permite crear diagramas UML e xerar código en varias linguaxes, incluíndo PHP. Podes traballar colaborativamente en proxectos en liña.
5. **[PhpStorm](https://www.jetbrains.com/es-es/phpstorm/):** Aínda que non é unha ferramenta de modelado UML en si mesma, PhpStorm é un potente entorno de desenvolvemento para PHP que pode integrarse con diferentes ferramentas de modelado UML. Podes crear diagramas UML noutras ferramentas e despois usar PhpStorm para xerar código a partir deles.

Lembre que a calidade do código xerado dependerá en gran medida da calidade dos teus diagramas UML iniciais. É importante revisar e adaptar o código xerado para asegurar unha implementación correcta e eficiente. Ademais, a elección da ferramenta dependerá tamén das túas preferencias e das características específicas que estás a buscar no proceso de xeración de código.

:eye: **Non debes xerar o modelo UML a partir do código, senón o código a partir do modelo UML!**