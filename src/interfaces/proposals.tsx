export interface IProposals {
  proposals: IProposal[];
}

export interface IProposal {
  public_id: string;
  contratado: boolean;
  data_inicio: string;
  data_fim: string;
  fonte_energia: string;
  submercado: string;
  consumo_total: string;
  valor_proposta: string;
}