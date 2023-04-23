// Tabela de pagamentos previstos por empresa
const tabela = [
  [1, 1, 0, 0], // Empresa A
  [0, 0, 0, 1], // Empresa B
  [1, 0, 1, 1], // Empresa C
  [0, 1, 0, 1], // Empresa F
  [1, 0, 1, 1]  // Empresa I
];

// Calcular a média de pagamentos por empresa
const media = tabela.map(emp => emp.reduce((a, b) => a + b) / emp.length);

// Classificar as empresas em ordem decrescente de bom pagador
for (let i = 0; i < media.length; i++) {
  for (let j = 0; j < media.length - i - 1; j++) {
    if (media[j] < media[j + 1]) {
      // Trocar de posição
      const temp = media[j];
      media[j] = media[j + 1];
      media[j + 1] = temp;

      const tempEmp = tabela[j];
      tabela[j] = tabela[j + 1];
      tabela[j + 1] = tempEmp;
    }
  }
}

// Imprimir o ranking das empresas
console.log("Ranking de bons pagadores:");
for (let i = 0; i < media.length; i++) {
  console.log(`#${i+1} Empresa ${String.fromCharCode(65 + i)} - Média: ${media[i].toFixed(2)}`);
}
