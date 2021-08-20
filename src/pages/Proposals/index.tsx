import { BaseLayout } from "../../components/BaseLayout";
import { Button } from "../../components/Button";
import { Table } from '../../components/Table';
import { PlusIcon } from '@heroicons/react/outline';
import notFound from '../../assets/not-found.svg';
import { useEffect, useState } from "react";
import { IProposal } from '../../interfaces/proposals';
import axios from 'axios';

export const Proposals = () => {

  const [proposals, setProposals] = useState<IProposal[]>([]);
  // const proposals = [
  //   {
  //     public_id: "123",
  //     contratado: true,
  //     data_inicio: "2021-08-20",
  //     data_fim: "2022-08-20",
  //     fonte_energia: "RENOVAVEL",
  //     submercado: "NORTE",
  //     consumo_total: "10",
  //     valor_proposta: "300000"
  //   },
  //   {
  //     public_id: "asd",
  //     contratado: false,
  //     data_inicio: "2021-08-20",
  //     data_fim: "2023-08-20",
  //     fonte_energia: "CONVENCIONAL",
  //     submercado: "SUL",
  //     consumo_total: "20",
  //     valor_proposta: "500000"
  //   },
  // ]

  useEffect(() => {
		axios.get<IProposal[]>('http://localhost:3000/propostas').then(response => {
			setProposals(response.data);
		})
	}, [])

  return (
    <BaseLayout>
      {proposals.length > 0 ?
        <>
          <div className="flex justify-between items-end mb-6">
            <h1 className="title2">
              Propostas
            </h1>
            <Button style="primary" href="propostas/nova">
              <PlusIcon className="w-4 mr-1" />
              Proposta
            </Button>
          </div>

          <Table proposals={proposals} />
        </>

        :

        <div className="flex flex-col justify-center items-center">
          <img src={notFound} alt="Proposta não encontrada" />
          <h2 className="title2 mb-6">Nenhuma proposta encontrada</h2>
          <Button style="primary" href="propostas/nova">
            <PlusIcon className="w-4 mr-1" />
            Proposta
          </Button>
        </div>
      }
    </BaseLayout>
  )
}

