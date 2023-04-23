// Matriz com os consumos mensais dos anos 2010-2019, onde cada linha representa um ano de 2010-2019 e cada coluna um mes de cada ano (total de 12 meses)
const consumo = [
    [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
    [95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205],
    [105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215],
    [110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220],
    [120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230],
    [130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240],
    [140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250],
    [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260],
    [160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270],
    [170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280]
  ];
  
  // Cálculo do consumo médio em cada mês
  const consumoMedioMes = [];
  for (let mes = 0; mes < 12; mes++) {
    let totalMes = 0;
    for (let ano = 0; ano < 10; ano++) {
      totalMes += consumo[ano][mes];
    }
    consumoMedioMes.push(totalMes / 10);
  }
  
  // Identificação do mês/ano com maior consumo
  let maiorConsumo = consumo[0][0];
  let mesMaiorConsumo = 0;
  let anoMaiorConsumo = 0;
  for (let ano = 0; ano < 10; ano++) {
    for (let mes = 0; mes < 12; mes++) {
      if (consumo[ano][mes] > maiorConsumo) {
        maiorConsumo = consumo[ano][mes];
        mesMaiorConsumo = mes;
        anoMaiorConsumo = ano;
      }
    }
  }
  
  console.log("Consumo médio em cada mês:", consumoMedioMes);
  console.log("Mês/ano com maior consumo:", mesMaiorConsumo + 1, "/", anoMaiorConsumo + 2010);
  