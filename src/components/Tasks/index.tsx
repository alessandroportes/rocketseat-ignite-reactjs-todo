import clipboard from "../../assets/clipboard.png";
import { TaskCard } from "../TaskCard";

import styles from "./Tasks.module.css";

interface TasksProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  }[];
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function Tasks(props: TasksProps) {
  const { task, handleCompleteTask, handleDeleteTask } = props;

  const totalTask = task.length;
  const completedTask = task.filter((data) => data.isCompleted).length;

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas </strong>
          <p>{totalTask}</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>{completedTask}</p>
        </div>
      </header>
      <div className={styles.containerTasks}>
        {task.length > 0 ? (
          task.map((item) => (
            <TaskCard
              key={item.id}
              task={item}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="Sem tarefas" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
