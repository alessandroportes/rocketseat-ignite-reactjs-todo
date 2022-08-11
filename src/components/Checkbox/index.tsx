import styles from "./Checkbox.module.css";
import { Check } from "phosphor-react";

interface CheckboxProps {
  id: string;
  isCompleted: boolean;
  handleCompleteTask: (id: string) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { id, isCompleted, handleCompleteTask } = props;

  return (
    <button
      className={`${styles.checkbox} ${isCompleted && styles.isCompleted}`}
      onClick={() => handleCompleteTask(id)}
    >
      {isCompleted && <Check weight="bold" color="var(--gray-100)" size={12} />}
    </button>
  );
}
