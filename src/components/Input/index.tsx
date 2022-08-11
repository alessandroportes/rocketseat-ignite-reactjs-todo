import { useState } from "react";
import styles from "./Input.module.css";
import { PlusCircle } from "phosphor-react";

interface InputProps {
  handleCreateTask: (task: string) => void;
}

export function Input(props: InputProps) {
  const [newTask, setNewTask] = useState("");

  const { handleCreateTask } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newTask.trim() && handleCreateTask(newTask);
    setNewTask("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className={`${styles.createTask} ${
          !newTask.trim() && styles.disableCreateTask
        }`}
        type="submit"
      >
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
