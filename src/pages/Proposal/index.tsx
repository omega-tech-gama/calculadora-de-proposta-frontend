import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TrashIcon, PlusIcon } from "@heroicons/react/outline";
import { AuthContext } from "../../context/AuthContext";

import { formatDate } from "../../utils/format-date";
import { BaseLayout } from "../../components/BaseLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Form/Input";
import { Modal } from "../../components/Modal";
import { api } from "../../api";
import { calculateProposal } from "../../utils/calculate-price";

interface IProposalData {
  data_inicio: string;
  data_fim: string;
  fonte_energia: string;
  submercado: string;
  contratado: boolean;
  consumo_kwh: number;
}

interface ICharge {
  nome_empresa: string;
  consumo_kwh: number;
}

export const Proposal = () => {
  const [modalIsOpen, setModalUIsOpen] = useState(false);
  const [proposalData, setProposalData] = useState<IProposalData>();
  const [charge, setCharge] = useState<ICharge[]>();

  const { data } = useContext(AuthContext);
  const history = useHistory();

  const Schema = yup.object().shape({
    initialDate: yup
      .date()
      .min(new Date())
      .required(`Data inicial necessita ser informada`),

    endDate: yup
      .date()
      .min(new Date())
      .required(`Data final necessita ser informada`),

    powerSupply: yup.string().required(),
    market: yup.string().required(),
    companyName: yup.string().required(),
    charge: yup.string().required(),
  });

  const { register, handleSubmit, formState, getValues } = useForm({
    //resolver: yupResolver(Schema),
  });

  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTYyOTU0MTE2MCwiZXhwIjoxNjI5NjI3NTYwfQ.17l-UwLdI8BanltY_1c1jBjHNRTnvvRaqTc3LopFE3I";

  const body = {
    data_inicio: proposalData?.data_inicio,
    data_fim: proposalData?.data_fim,
    cargas: [
      {
        ...charge,
      },
    ],
    fonte_energia: proposalData?.fonte_energia,
    submercado: proposalData?.submercado,
    contratado: true,
  };

  const proposalCreate = async () => {
    const response = await api("propostas", {
      method: "POST",
      headers: {
        Authorization: key,
      },

      data: body,
    });
  };

  const { errors } = formState;

  const submitForm: SubmitHandler<IProposalData> = async (values) => {
    proposalCreate();
  };

  const handleFormValues = () => {
    const dataValues = getValues([
      "endDate",
      "initialDate",
      "powerSupply",
      "market",
      "charge",
      "companyName",
    ]);

    const [
      data_fim,
      data_inicio,
      fonte_energia,
      submercado,
      consumo_kwh,
      nome_empresa,
    ] = dataValues;

    const dataInicio = data_inicio;
    const dataFim = data_fim;
    const consumo = Number(consumo_kwh);
    const contratado = false;

    setCharge([
      {
        consumo_kwh: consumo,
        nome_empresa,
        ...charge,
      },
    ]);

    setProposalData({
      data_inicio: dataInicio,
      data_fim: dataFim,
      fonte_energia,
      submercado,
      contratado,
      consumo_kwh: consumo,
    });
  };

  return (
    <BaseLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-5">
        <div className="mt-0 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="shadow overflow-hidden rounded-md">
              {/* Container branco */}
              <div className="px-auto py-5 grid grid-cols-1 lg:grid-cols-2 bg-withe gap-2 ">
                {/*Container form*/}
                <div className="grid grid-cols-12 gap-2 m-2">
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="initial-date"
                      className="text-darkblue-omega font-medium"
                    >
                      Início
                    </label>
                    <Input
                      type="date"
                      className="input rounded-sm text-sm text-gray-placeholder"
                      {...register("initialDate")}
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="end-date"
                      className="text-darkblue-omega font-medium"
                    >
                      Fim
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      className="input rounded-md text-sm text-gray-placeholder"
                      {...register("endDate")}
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="powerSupply"
                      className=" text-darkblue-omega font-medium "
                    >
                      Fonte de Energia
                    </label>
                    <select
                      id="powerSupply"
                      className="input text-sm text-gray-placeholder"
                      {...register("powerSupply")}
                    >
                      <option>RENOVAVEL</option>
                      <option>CONVENCIONAL</option>
                    </select>
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="country"
                      className=" text-darkblue-omega font-medium"
                    >
                      Submercado
                    </label>
                    <select
                      id="market"
                      className="input text-sm text-gray-placeholder"
                      {...register("market")}
                    >
                      <option>NORTE</option>
                      <option>NORDESTE</option>
                      <option>SUDESTE</option>
                    </select>
                  </div>
                </div>

                {/*---------  Propostas ----------------*/}
                <div className="grid grid-cols-12 gap-2 m-2 grid-rows-2 py-5 h-auto">
                  <button
                    onClick={() => setModalUIsOpen(true)}
                    className="flex 
                  flex-wrap 
                  content-center 
                  justify-center 
                  border-dashed 
                  border-2 
                  row-span-1 
                  col-span-12 
                  px-2 py-2 
                  md:col-span-6 
                  bg-white 
                  rounded-lg"
                  >
                    <PlusIcon className="text-gray-placeholder h-7 w-7" />
                    <span className="text-gray-placeholder">Carga</span>
                  </button>

                  {!!charge &&
                    charge.map((data) => (
                      <div className="block border-1 row-span-1 col-span-12 px-2 py-2 md:col-span-6 bg-white shadow-sm shadow rounded-lg">
                        <h3 className="leading-4 text-darkblue-omega font-bold">
                          Empresa
                        </h3>
                        <p className="mt-1 text-gray-500 text-sm">
                          {data.nome_empresa}
                        </p>
                        <h3 className="mt-1 leading-6  text-darkblue-omega font-bold">
                          Consumo
                        </h3>
                        <p className=" max-w-2xl text-sm text-gray-500">
                          {data.consumo_kwh}
                        </p>

                        <div className=" flex flex-row-reverse space-x-4 space-x-reverse">
                          <TrashIcon className="h-5 w-5 text-warn" />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-basic col-span-12 md:col-span-2 md:col-start-2 row-start-2">
                  <Button icon={false} style={"primary  w-auto"}>
                    Criar proposta
                  </Button>
                </div>
                {/**------------- Fim Proposta --------------------------------*/}
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white shadow-sm rounded-xl p-4 mb-4 mt-10 md:mt-0">
          {/******** Resumo lateral ******************************/}
          <span className="text-center text-darkblue-omega text-4xl block">
            Resumo
          </span>

          <div className="border-b border-gray-200 pt-4">
            <span className="font-medium text-gray-900 block">Período</span>
            <span className="mt-2 text-sm text-gray-500 block">
              {proposalData?.data_fim && proposalData?.data_inicio
                ? `${formatDate(proposalData.data_inicio)} até ${formatDate(
                    proposalData.data_fim
                  )}`
                : `período de contrato`}
            </span>
          </div>
          <div className="border-b border-gray-200 pt-4">
            <span className="font-medium text-gray-900 block">
              Fonte de energia
            </span>
            <span className="mt-2 text-sm text-gray-500 block">
              {`${
                proposalData?.fonte_energia
                  ? proposalData?.fonte_energia
                  : "Fonte"
              }`}
            </span>
          </div>
          <div className="border-b border-gray-200 pt-4">
            <span className="font-medium text-gray-900 block">Sub mercado</span>
            <span className="mt-2 text-sm text-gray-500 block">{`${
              proposalData?.submercado
                ? proposalData?.submercado
                : "Sub mercado"
            }`}</span>
          </div>
          <div className="border-b border-gray-200 pt-4">
            <span className="font-medium text-gray-900 block">
              Consumo total
            </span>
            <span className="mt-2 text-sm text-gray-500 block">"Consumo"</span>
          </div>
          <div className="flex justify-between border-gray-200 pt-2">
            <span className=" font-medium text-gray-900 ">Total</span>
            <span className="text-center font-light text-4xl block mt-8">
              Valor Total
            </span>
          </div>
          {/* /End replace */}
        </div>
      </div>

      <Modal isOpen={modalIsOpen}>
        <div className="text-center">
          <h3 className="title2 mb-2">Cargas</h3>

          <Input
            id="companyName"
            className="input h-8"
            labelName="Nome da Empresa"
            placeholder="Nome da Empresa"
            {...register("companyName")}
          />
          <div
            className="flex flex-center flex-wrap 
                  content-center 
                  justify-center mt-2"
          >
            <Input
              id="charge"
              className="input rounded-l-xl rounded-r-sm h-8 w-40"
              type="number"
              min="0"
              labelName="Carga"
              placeholder="200"
              {...register("charge")}
            />
            <span className="mt-auto h-8 w-10 bg-gray-placeholder text-darkblue-omega rounded-r-xl">
              kWs
            </span>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            <Button style="outlined" onClick={() => handleFormValues()}>
              Adicionar
            </Button>
            <Button style="warn" onClick={() => setModalUIsOpen(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </BaseLayout>
  );
};
