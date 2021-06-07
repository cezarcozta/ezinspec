import { AxiosError } from "axios";
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
};

const MachineContexts = createContext<IMachinesContext>({} as IMachinesContext);

export function MachinesProvider({ children }: IMachinesProviderProps) {
  const [machines, setMachines] = useState<IMachineDTO[]>([]);

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
    if (localStorage.getItem('@ezinspec:jwt_access')) {
      loadMachines();
    }
  }, []);

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
        machineId,
        machineName,
        groupName,
        _id,
        clientId,
        urlConnection,
      } = data as IMachineDTO;

      setMachines([
        ...machines,
        {
          _id,
          machineId,
          machineName,
          groupName,
          clientId,
          urlConnection,
        },
      ]);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log({ error: axiosError });
      alert(axiosError.response?.data.message);
    }
  }
  return (
    <MachineContexts.Provider
      value={{
        machines,
        createMachine,
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
