import styles from "./styles.module.css";

export default function Maisla() {
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
        <p className={styles.messagebold}>Maisla,</p>

        <p className={styles.message}>
          Ainda parece que foi ontem que trocamos aquela simples curtida, mas,
          em tão pouco tempo, você se tornou alguém muito especial na minha
          vida.
        </p>

        <p className={styles.message}>
          Tudo entre nós fluiu de uma forma tão natural e rápida que parece que
          estávamos destinados a nos encontrar exatamente agora. Cada conversa,
          cada risada e todos os momentos juntos só reforçam o quanto nos
          conectamos e nos entendemos profundamente.
        </p>

        <p className={styles.message}>
          Por tudo isso, mesmo que já tenhamos assumido isso para nós mesmos,
          quero te perguntar algo muito especial e oficializar com todas as
          palavras, para que possamos seguir juntos, construindo algo bonito e
          verdadeiro, como temos feito até agora em cada um dos nossos momentos.
        </p>

        <button
          onClick={() => {
            const messageElement = document.querySelector(
              `.${styles.messageblur}`,
            );
            if (messageElement) {
              messageElement.className = styles.messagebold;
            }
          }}
          className={styles.heart}
        >
          ❤️
        </button>
        <p className={styles.messageblur}>Você aceita namorar comigo?</p>
      </div>
    </div>
  );
}
