// Arrays, objetos
let meta = {
  value: "ler um livro todo mes",
  address: 2,
  checked: false,
  log: (info) => {
    console.log(info);
  },
};

meta.value = "nao leio livro kkk";
meta.log(meta.value);

// Arrow function
const criarMeta = () => {};

// Function simples: function criarMeta() {}
