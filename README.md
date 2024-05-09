# JAVSCRIPTDATA

1º FUNÇÃO:

- Primeiramente, a função recebe dois parâmetros do tipo DATA e realiza um operador ternário para verificar qual data é a maior, usando a expressão " date1 > date 2"
caso retorn TRUE, sabemos que data1 é a maior, então retornamos ela, caso a expressão resulte em FALSE retornamos a variável data2.

2º FUNÇÂO:

- Mormente, é necessário realizar uma verificação, se a 1º data inserida é maior(mais antiga/vem antes) do que a 2º data inserida. Dessa forma, caso não seja maior,
o programa irá retornar uma mensagem simulando uma exeção, dizendo que a primeira data precis ser mais antiga que a segunda.
  O método getTime() retorna o número de milissegundos passados até aquela data desde 1 de janeiro de 1970. "const diff" recebe a diferença entre a data antiga e a nova em milissegundos.
  Portanto o código "const diasDeIntervalo = Math.floor(diff / umDiaEmMs)" divide diff pelo número de milissegundos em um dia, representado pela constante "umDiaEmMS", assim conseguimos o número de dias
  , então a função Math Floor irá retornar o número de dias, de forma formatada.

  3º Função:
Esta função é responsável por retornar a data atual em um formato específico, que inclui a hora, minuto, dia, mês e ano, todos separados por ":" e "/".

Lógica:
- Primeiramente a função começa criando um novo objeto Date, que representa a data e hora atuais do sistema.
  Em seguida, são utilizados os métodos getHours(), getMinutes(), getDate(), getMonth() e getFullYear() para obter, respectivamente, a hora, minuto, dia, mês e ano da data atual.
  Para garantir que todos os valores tenham dois dígitos, é utilizado o método padStart(), que adiciona um zero à esquerda, se necessário.
  Por fim, a função retorna uma string formatada seguindo o padrão "hora:minuto - dia/mês/ano".
  
