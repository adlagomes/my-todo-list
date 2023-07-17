# To-Do List
To-do list desenvolvido como prática do curso CJRM para fixar os assuntos estudados.

### ~ :gear: Tecnologias <a name="-tecnologias"></a>
  - JavaScrip
  - HTML5
  - CSS

### ~ :clipboard: Projeto <a name="-projeto"></a>
O projeto é um to-do list básico onde é possível inserir, excluir e até mesmo buscar uma tarefa existente.

Basicamente peguei a referência de três elementos do html que são o formulário para inserir a tarefa, o formulário para fazer a busca por uma tarefa e a lista de tarefas existente.
Para todos eles foi encadeado um addEventListener para que a partir de um evento funções sejam executadas.

Para adicionar uma tarefa peguei o valor do input, verifiquei se era um valor válido usando a condicional if e passei para a lista de tarefas através da manipulação da DOM, uma string contendo uma li com seus demais conteúdos, como class, styles, span, img etc.
Após a inserção desse elemento na lista de tarefas, o método reset() encadeado ao form é executado para que o input seja limpado.

Para deletar uma tarefa encadeei ao elemento ul (onde as tarefas são adicionadas) o addEventListener que irá ouvir caso um click seja disparado. A função irá detectar onde ocorreu o click e caso tenha sido no icone da lixeira a tarefa será excluída.
Por desafio do professor, utilizei o atributo dataset para fazer essa exclusão, uma vez que é importante conhecer outros métodos para quando a manipulação da DOM utilizando ancestralidade para esse fim não seja a melhor escolha.
Adicionei as lis existentes e a string que adiciona as novas, o atributo dataset que recebe como valor o mesmo valor do input. E adicionei o atributo também ao ícone da lixeira, pois é importante que ambos tenham o mesmo valor e quando a lixeira com atributo X for clicado, a li com o mesmo valor será excluída.
Em seguinda uso a condicional if para verificar se o click ocorreu no icone da lixeira e caso essa condição seja verdadeira o elemento li é removido. Apenas passei o caminho desse elemento pegando como referência o atributo dataset e usando o método remove().

Por fim, para fazer a busca por uma tarefa, capturo o conteúdo inserido no input e verifico através do método includes() se existe alguma tarefa naquela lista que possua aquele valor. Após acessar a lista de tarefas como um array, encadeio o método forEach, onde pego apenas o conteúdo textual de cada li e passo para uma constante o texto que possui incluso um trecho do valor inserido no input.
Em seguida encadeio a li a propriedade classList junto com o método toggle que irá adicionar ou remover a class "hidden". Essa class está configurada no css como recebendo um display: none; fazendo assim com que a li que não deu match (!isMatch é passada como segundo argumento ao método toggle), receba a classe hidden.
