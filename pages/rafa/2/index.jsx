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
          Te desejo tudo de bom e de melhor na sua vida e que seu dia seja tão
          especial quanto você é, e que Deus te abençoe hoje e sempre. Mesmo
          neste momento em que estamos dessa forma, eu jamais poderia imaginar o
          quanto você se tornaria uma pessoa tão importante na minha vida. Você
          continua sendo uma parte especial de mim, e sou muito grato a Deus por
          ter colocado você no meu caminho.
        </p>
        <p className={styles.messagebold}>Eu gosto muito de você!</p>
        <p className={styles.heart}>❤️</p>
      </div>
    </div>
  );
}
