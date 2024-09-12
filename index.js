// Arrays, objetos
/*let meta = {
  value: "ler um livro todo mes",
  address: 2,
  checked: false,
  log: (info) => {
    console.log(info);
  },
};

meta.value = "nao leio livro kkk";
meta.log(meta.value);
*/
/*
let meta = {
  value: "Ler um livro",
  checked: true
}

let metas = [
  meta,
  {
    value: "Caminhar 30 minutos todos os dias",
    checked: false,
  },
];

console.log(metas[1].value)
*/

/*
// Arrow function
const criarMeta = () => {};

// Function simples: function criarMeta() {}
*/

const start = () => {
  while (true) {
    let opcao = "Sair";
    switch (opcao) {
      case "Cadastrar":
        console.log("vamos cadastrar");
        break;
      case "Listar":
        console.log("vamos listar");
        break;
      case "Sair":
        return;
    }
  }
};

start();
