// DADOS COMPLEXOS, OBJETO

// Crie um objeto que receba ao menos três propriedades sobre você.

let info = {
  nome: "Romulo",
  idade: 43,
  cidade: "Barra Mansa",
};

// Adicione uma nova propriedade sem alterar seu objeto inicial.

info.signo = "áries";

// Remova uma propriedade desse objeto.

delete info.cidade;
console.log(info);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.

let cadastro = [
  {
    nome: "Falula",
    idade: 35,
    telefone: 987650987,
    amigos: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe"],
  },
  {
    nome: "Falula",
    idade: 35,
    telefone: 987650987,
    amigos: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe"],
  },
  {
    nome: "Falula",
    idade: 35,
    telefone: 987650987,
    amigos: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe"],
  },
  {
    nome: "Falula",
    idade: 35,
    telefone: 987650987,
    amigos: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe"],
  },
  {
    nome: "Falula",
    idade: 35,
    telefone: 987650987,
    amigos: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe"],
  },
];

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.

//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

cadastro[0].amigos = [1];
cadastro[1].amigos = [0];
cadastro[2].amigos = [3];
cadastro[3].amigos = [4];
cadastro[4].amigos = [2];
