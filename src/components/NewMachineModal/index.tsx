import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import { useMachine } from "../../contexts/Machines";
import { Container } from "./styles";

interface INewMachineModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewMachineModal({
  isOpen,
  onRequestClose,
}: INewMachineModalProps) {
  const { createMachine } = useMachine();

  const [machineName, setMachineName] = useState("");
  const [machineId, setMachineId] = useState("");
  const [groupName, setGroupName] = useState("");

  async function handleNewCreateMachine(event: FormEvent) {
    event.preventDefault();

    await createMachine({
      machineName,
      machineId,
      groupName,
    });

    setMachineName("");
    setMachineId("");
    setGroupName("");

    onRequestClose();
  }

  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close" />
      </button>
      <h2>Cadatrar Máquina</h2>
      <form onSubmit={handleNewCreateMachine}>
        <input
          placeholder="Nome"
          value={machineName}
          onChange={(e) => {
            setMachineName(e.target.value);
          }}
        />
        <input
          placeholder="ID"
          value={machineId}
          onChange={(e) => {
            setMachineId(e.target.value);
          }}
        />

        <input
          placeholder="Grupo"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}
