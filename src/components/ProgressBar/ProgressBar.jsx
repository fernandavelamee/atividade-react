import { useId } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ value, label = "Progresso" }) {
  const labelId = useId();
  const percentage = Number.isFinite(value)
    ? Math.min(100, Math.max(0, value))
    : 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles.labels}>
        <span id={labelId}>{label}</span>
        <strong>{percentage}%</strong>
      </div>
      <div
        role="progressbar"
        aria-labelledby={labelId}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        className={styles.track}
      >
        <div className={styles.fill} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
