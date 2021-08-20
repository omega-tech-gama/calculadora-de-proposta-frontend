import { BaseLayout } from "../../components/BaseLayout";
import { Button } from "../../components/Button";
import { Table } from '../../components/Table';
import { PlusIcon } from '@heroicons/react/outline';
import notFound from '../../assets/not-found.svg';
import { useEffect, useState } from "react";
import { IProposal } from '../../interfaces/proposals';
import axios from 'axios';
import { Loading } from "../../components/Loading";

export const Proposals = () => {
  const [proposals, setProposals] = useState<IProposal[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getProposals() {
    setIsLoading(true);
    try {
      let response = await axios.get<IProposal[]>('http://localhost:3000/propostas');
      setProposals(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getProposals()
	}, [])

  return (
    <BaseLayout>
      {isLoading ?
      
      <Loading/>
      
      : proposals.length > 0 ?
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

