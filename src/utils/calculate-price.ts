interface IProposalData {
  data_inicio: string;
  data_fim: string;
  fonte_energia: string;
  submercado: string;
  contratado: boolean;
  consumo_kwh: number;
}
export function calculateProposal(proposal: IProposalData) {
  const { data_inicio, data_fim, fonte_energia, submercado } = proposal;
  const { consumo_kwh } = proposal;

  let price = 0;
  let sourcePrice = 0;

  switch (submercado) {
    case "NORTE":
      price = 2;
      break;
    case "NORDESTE":
      price = -1;
      break;
    case "SUL":
      price = 3.5;
      break;
    case "SUDESTE":
      price = 1.5;
      break;
  }

  switch (fonte_energia) {
    case "CONVENCIONAL":
      sourcePrice = 5;
      break;
    case "RENOVAVEL":
      sourcePrice = -2;
      break;
  }

  const kwh_price = 10;
  const region_price = price;
  const source_price = sourcePrice;

  //transforma as datas de string para objeto Date
  const begin = new Date(data_inicio) as any,
    end = new Date(data_fim) as any;

  //calcula o período da proposta em milissegundos
  const milliseconds = end - begin;

  //converte milissegundos para horas
  const period_hours = milliseconds / (1000 * 60 * 60);

  //calcula o valor da proposta
  return consumo_kwh * period_hours * (kwh_price + region_price + source_price);
}
