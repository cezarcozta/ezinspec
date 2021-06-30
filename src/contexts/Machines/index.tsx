import { AxiosError } from "axios";
import { IMessageStructure, useSubscription } from "mqtt-react-hooks";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IMachineDTO } from "../../dtos/Machine";
import { api } from "../../services/api";

// type IMachine = {
//   id: string;
//   machineName: string;
//   machineId: string;
//   groupName?: string;
// };

type IMachineData = Pick<
  IMachineDTO,
  "machineName" | "machineId" | "groupName"
>;

type IMachinesProviderProps = {
  children: ReactNode;
};

type IMachinesContext = {
  machines: IMachineDTO[];
  createMachine: (transaction: IMachineData) => Promise<void>;
  deleteMachine: (machineId: string) => Promise<void>;
  findMachineById(machineId: string): IMachineDTO;
  messages: IMessageStructure;
  staticMessages: any[];
};

const MachineContexts = createContext<IMachinesContext>({} as IMachinesContext);

export function MachinesProvider({ children }: IMachinesProviderProps) {
  const [machines, setMachines] = useState<IMachineDTO[]>([]);
  const [messages, setMessages] = useState<any>([]);
  const [staticMessages, setStaticMessages] = useState<any>([]);

  const { message } = useSubscription([
    "portal/6094c301bfe6e9001fda9f2a/0000001/latest",
    "portal/6094c301bfe6e9001fda9f2a/0000001/state",
    // "portal/6094c301bfe6e9001fda9f2a/0000001/production",
    // "portal/6094c301bfe6e9001fda9f2a/0000001/historic",
    // "portal/6094c301bfe6e9001fda9f2a/0000001/times",
    // "portal/6094c301bfe6e9001fda9f2a/0000002/latest",
    // "portal/6094c301bfe6e9001fda9f2a/0000002/state",
  ]);

  useEffect(() => {
    async function loadMachines() {
      try {
        const { data } = await api.get("/machines");
        setMachines(data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.log({
          error: axiosError,
        });
        alert(axiosError.response?.data.message);
      }
    }

    const jwtToken = localStorage.getItem("@ezinspec:jwt_access");

    if (jwtToken) {
      loadMachines();

      if (message) {
        setMessages(message);
        setStaticMessages((msgs: any) => [...msgs, message]);
      }
    }
  }, [message]);

  async function createMachine({
    machineId,
    machineName,
    groupName,
  }: IMachineData) {
    const dataNewMachine = {
      machineId,
      machineName,
      groupName,
    };

    try {
      const { data } = await api.post("/machines/register", dataNewMachine);

      const {
        _id,
        machineId,
        machineName,
        groupName,
        clientId,
        urlConnectionHistoric,
        urlConnectionLatest,
        urlConnectionProduction,
        urlConnectionState,
        urlConnectionTimes,
      } = data as IMachineDTO;

      console.log({ data: data });

      setMachines([
        ...machines,
        {
          _id,
          machineId,
          machineName,
          groupName,
          clientId,
          urlConnectionHistoric,
          urlConnectionLatest,
          urlConnectionProduction,
          urlConnectionState,
          urlConnectionTimes,
        },
      ]);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log({ error: axiosError });
      alert(axiosError.response?.data.message);
    }
  }

  async function deleteMachine(machineId: string) {
    try {
      await api.delete(`/machines/${machineId}`);
      setMachines(machines.filter((machine) => machine._id !== machineId));
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log({
        error: axiosError,
      });
      alert(axiosError.response?.data.message);
    }
  }

  function findMachineById(machineId: string): IMachineDTO {
    const machine = machines.find((machine) => machine._id === machineId);
    if (!machine) return {} as IMachineDTO;
    return machine;
  }

  return (
    <MachineContexts.Provider
      value={{
        machines,
        createMachine,
        deleteMachine,
        findMachineById,
        messages,
        staticMessages,
      }}
    >
      {children}
    </MachineContexts.Provider>
  );
}

export function useMachine() {
  const context = useContext(MachineContexts);

  return context;
}
