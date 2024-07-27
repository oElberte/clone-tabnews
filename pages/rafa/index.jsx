import React from "react";
import styles from "./styles.module.css";

export default function Rafa() {
  return (
    <div className={styles.page}>
      <style jsx global>{`
        html,
        body {
          margin: 0px;
          padding: 0px;
          height: 100%;
          width: 100%;
        }
      `}</style>

      <div className={styles.card}>
        <img className={styles.image} src="/static/aniversario.jpeg" />
        <h1 className={styles.heading}>Feliz Aniversário, Rafa!</h1>
        <p className={styles.message}>
          Eu jamais conseguiria imaginar que em tão pouco tempo uma pessoa seria
          tão importante na minha vida, você me faz muito feliz e sou muito
          grato a Deus por ter colocado você ao meu lado. Que seu dia seja tão
          especial quanto você é para mim e que Deus te abençoe hoje e sempre,
          meu amor.
        </p>
        <p className={styles.messagebold}>Gosto muito de você!</p>
        <p className={styles.heart}>❤️</p>
      </div>
    </div>
  );
}
