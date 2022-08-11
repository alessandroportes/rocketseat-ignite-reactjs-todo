import { useState } from "react";

import styles from "./TaskCard.module.css";
import { Checkbox } from "../Checkbox";
import { Trash } from "phosphor-react";

interface TaskCardProps {
  task: {
    id: string;
    isCompleted: boolean;
    title: string;
  };
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function TaskCard(props: TaskCardProps) {
  const [hover, setHover] = useState(false);
  const { id, isCompleted, title } = props.task;

  const { handleCompleteTask, handleDeleteTask } = props;

  function handleMouseIn() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div className={styles.card}>
      <Checkbox
        id={id}
        isCompleted={isCompleted}
        handleCompleteTask={handleCompleteTask}
      />
      <p className={`${isCompleted && styles.activeTask}`}>{title}</p>
      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
