---
id: interface
title: interface
sidebar: sidebarIntro
sidebar_position: 3
---

# Interface

---

Esse módulo trata dos elementos visuais e funcionais com os quais o jogador interage diretamente — como menus, mapas, botões, painéis, inventários, barras de progresso, ícones e sistemas de navegação.

A proposta do módulo **CF-Interface** é aplicar conceitos básicos de UX Writting para tornar a comunicação da interface intuitiva, clara e acolhedora para jogadores casuais.

O estilo adotado é direto e moderno, com tom sério e técnico apenas quando necessário. Evita jargões e prioriza termos simples e conhecidos, garantindo leitura fluida e compreensão imediata.

Essa abordagem promove consistência em rótulos, descrições, categorias e demais elementos, tornando menus e textos intuitivos mesmo para quem não tem familiaridade com o conteúdo original.

Os rótulos devem ser declarativos quanto à sua função, mas também intuitivos e de fácil leitura.

O equilíbrio entre informalidade e precisão permite que a tradução soe natural, mantendo a experiência alinhada com a expectativa do público casual.

# Diretrizes técnicas

---

## Regras gerais

---

- Evitar traduções literais que não fazem sentido no contexto
- Manter consistência entre termos semelhantes (ex.: iniciar vs. começar)

## Rótulos de menu

---

> O **rótulo** é o texto principal da opção no menu - o que o jogador vê e clica. Deve ser direto, funcional e intuitivo.
 

### Tipos comuns de menus:

:::caution

Menus podem variar de aparência e apresentação visual entre diferentes jogos, mas suas funcionalidades principais costumam seguir padrões recorrentes. Por isso, as diretrizes abaixo se aplicam independentemente do estilo visual adotado pelo jogo.

:::

- **Enable/Disable**: Ativa ou desativa uma função ou comportamento
- **Sliders (deslizante)**: Ajustam valores contínuos, como volume ou sensibilidade
- **MultiOptions**: Apresentam várias opções para escolher uma
- **Hotkeys**: Permitem selecionar ou configurar atalhos
- **Informativo**: Exibem informações diretas ou descrições ao passar o mouse

### Diretrizes para rótulos

---

- Verbos no infinitivo (ex.: Ocultar, Travar) **somente quando indicarem ações diretas e claras**
- Evitar rótulos com verbos no infinitivo, exceto comandos diretos
- Para comportamentos, estados ou configurações, preferir rótulos com substantivos
- Para comportamentos condicionais, adotar a estrutura: **[Substantivo (comportamento)] + [condição ou alvo]**

| Substantivo - Comportamento | Condição ou Alvo |
| --- | --- |
| Rotação para Mira | ao Atacar |
| Inclinação | de NPCs |
- Usar ‘ao [ação]’ quando o comportamento ocorre sob certa condição (ex.: atacar, defender)
- Quando o menu controla comportamento, melhorias de experiência ou ocultações, **não** use ‘Ativar’ no rótulo
- Usar ‘**Ativar**’ no rótulo **apenas** quando o foco é ligar/desligar uma função

| Estrutura | Exemplo de rótulo | Quando usar | Observações |
| --- | --- | --- | --- |
| Verbo no infinitivo
(ação direta) | Ocultar HUD | Quando a opção executa uma ação clara e imediata | Usar apenas para comandos diretos e intuitivos |
| Substantivo (comportamento ou estado) | Sensibilidade da Câmera | Quando representa uma configuração ou estado ajustável | Evita verbos, foca no conceito |
| Substantivo + condição/alvo | Rotação para Mira ao Atacar | Quando o comportamento depende de uma ação ou contexto | Segue a estrutura definida na doc: [comportamento] + [condição] |
| Substantivo simples (informativo) | Dano crítico | Quando o menu apenas exibe informação | Não há ação envolvida, apenas leitura |

### Exemplos a evitar

---

> Estes exemplos mostram rótulos que não seguem as diretrizes **CF-Interface. Servem para ilustrar erros comuns e reforçar boas práticas.**
> 

| Tipo de menu | Rótulo inadequado | Motivo |
| --- | --- | --- |
| Enable/Disable | Ativar Ocultar HUD | Contradição entre ação e comportamento |
| MultiOptions | Escolher Mira | Verbo genérico, não descreve o tipo de mira |
| Informativo | Mostrar Dano | Verbo desnecessário para informação passiva |

## Descrições de menu

---

> A descrição aparece ao passar o mouse sobre o rótulo e explica o que a opção faz. Deve ser clara, objetiva e evitar termos técnicos desnecessários.
> 
- Usar ‘**Ajusta**’ no início da descrição para menus **deslizantes**
- Usar ‘**Define**’ para menus com **múltiplas opções**
- Usar ‘**Ativa**’ para menus **enable/disable**, quando o título não usa ‘Ativar’

## Regras adicionais para descrições

---

- Para opções relacionadas a ‘ocultar’, ‘parar’ ou comportamentos semelhantes, **não usar ‘Ativar’** na descrição, mesmo sendo um menu enable/disable
- Nesses casos, reescrever a descrição para focar no efeito ou comportamento, sem usar ‘Ativar’
- Use verbos diretos no presente (como: ‘Permite’, ‘Oculta’, ‘Remove’, ‘Impede’, ‘Faz com que’, ‘Interrompe’, ‘Gira’, etc) para descrever efeitos ou comportamentos

## Exemplo de rótulo + descrição conforme tipo de menu

| Tipo de menu | Rótulo | Descrição |
| --- | --- | --- |
| Enable/Disable
(função clara) | Ativar Vibração | Ativa a vibração do controle durante o jogo |
| Enable/Disable
Comportamento ou ocultação | Ocultar HUD | Oculta os elementos visuais da interface. |
| Sliders (Deslizantes) | Sensibilidade da Câmera | Ajusta a velocidade de rotação da câmera. |
| MultiOptions | Estilo de Mira | Define o tipo de mira exibido na tela. |
| Hotkey | Recarregar arma | Permite configurar uma tecla para recarregar a arma. |
| Informativo | Dano crítico | Exibe a chance de causar dano crítico com cada arma. |

---
