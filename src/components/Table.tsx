import { CheckCircleIcon, TrashIcon } from "@heroicons/react/outline";
import { Button } from "./Button";
import { formatDate } from '../utils/format-date';
import { formatCurrency } from '../utils/format-currency';
import { Modal } from "./Modal";
import { useState } from 'react'
import { IProposals, IProposal } from '../interfaces/proposals';
import axios from "axios";
import api from "../api";

export const Table: React.FC<IProposals> = ({ proposals }) => {

  const [selectedProposal, setSelectedProposal] = useState<IProposal>({
    public_id: "",
    contratado: false,
    data_inicio: "",
    data_fim: "",
    fonte_energia: "",
    submercado: "",
    consumo_total: "",
    valor_proposta: ""
  });
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function handleHireButton(proposal: IProposal) {
    setSelectedProposal(proposal);
    setIsHireModalOpen(true);
  }
  function handleDeleteButton(proposal: IProposal) {
    setSelectedProposal(proposal);
    setIsDeleteModalOpen(true);
  }

  async function hireProposal(id: string) {
    let message: string = "";

    try {
      await api.patch(`/propostas/${id}`);
      message = "Proposta contratada com sucesso!";
    } catch (error) {
      message = "Erro ao contratar proposta.";
    }

    setIsHireModalOpen(false);
    alert(message);
  }
  async function deleteProposal(id: string) {
    let message: string = "";

    try {
      await api.delete(`/propostas/${id}`);
      message = "Proposta excluída com sucesso!";
    } catch (error) {
      message = "Erro ao excluir proposta.";
    }
    
    setIsDeleteModalOpen(false);
    alert(message);
  }


  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Início
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Fim
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Fonte de energia
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Submercado
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Consumo total
                    </th>
                    <th className="px-6 py-4 text-left text-xs text font-semibold uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="relative px-6 py-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {proposals.map((proposal) => (
                    <tr key={proposal.public_id}>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <span className={proposal.contratado ? "status-label-success" : "status-label"}>
                          {proposal.contratado ? "Contratada" : "Criada"}
                        </span>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap text">{formatDate(proposal.data_inicio)}</td>
                      <td className="px-6 py-2 whitespace-nowrap text">{formatDate(proposal.data_fim)}</td>
                      <td className="px-6 py-2 whitespace-nowrap text">{proposal.fonte_energia}</td>
                      <td className="px-6 py-2 whitespace-nowrap text">{proposal.submercado}</td>
                      <td className="px-6 py-2 whitespace-nowrap text">{proposal.consumo_total} kWh</td>
                      <td className="px-6 py-2 whitespace-nowrap text font-medium text-darkblue-omega">{formatCurrency(proposal.valor_proposta)}</td>
                      <td className="px-6 py-2 whitespace-nowrap space-x-2 inline-flex">
                        {!proposal.contratado &&
                          <>
                            <Button style="outlined" icon={true} onClick={() => handleHireButton(proposal)}>
                              <CheckCircleIcon className="w-6 success" />
                            </Button>

                            <Button style="outlined" icon={true} onClick={() => handleDeleteButton(proposal)}>
                              <TrashIcon className="w-6 warn" />
                            </Button>
                          </>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isHireModalOpen}>
        <div className="text-center">
          <h3 className="title2 mb-2">Confirmar</h3>
          <p className="text">Deseja realmente contratar essa proposta?</p>
          <div className="flex justify-center space-x-2 mt-6">
            <Button style="outlined" onClick={() => setIsHireModalOpen(false)}>
              Cancelar
            </Button>
            <Button style="primary" onClick={() => hireProposal(selectedProposal.public_id)}>
              Contratar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isDeleteModalOpen}>
        <div className="text-center">
          <h3 className="title2 mb-2">Confirmar</h3>
          <p className="text">Deseja realmente excluir essa proposta?</p>
          <div className="flex justify-center space-x-2 mt-6">
            <Button style="outlined" onClick={() => setIsDeleteModalOpen(false)}>
              Cancelar
            </Button>
            <Button style="warn" onClick={() => deleteProposal(selectedProposal.public_id)}>
              Excluir
            </Button>
          </div>
        </div>
      </Modal>

    </>
  )
}