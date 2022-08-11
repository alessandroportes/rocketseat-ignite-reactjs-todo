import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Tasks } from "./components/Tasks";

import "./styles/global.css";
import styles from "./App.module.css";

interface Tasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleCreateTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        isCompleted: false,
        title: task,
      },
    ]);
  }

  function handleDeleteTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );
  }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Input handleCreateTask={handleCreateTask} />
        <Tasks
          task={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;

//https://github.com/enricomadeu/ignite-todo-reactjs-ts
