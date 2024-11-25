import useSWR from "swr";

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>

      <UpdatedAt />

      <Dependencies>
        <DatabaseInfo />
      </Dependencies>
    </>
  );
}

async function fetchApi(key) {
  const response = await fetch(key);
  return await response.json();
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      Atualizado em: {new Date(data.updated_at).toLocaleString("pt-BR")}
    </div>
  );
}

function Dependencies({ children }) {
  return (
    <div>
      <h2>Dependências</h2>
      {children}
    </div>
  );
}

function DatabaseInfo() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Banco de dados</h3>
      <div>Versão: {data.dependencies.database.version}</div>
      <div>
        Máximo de conexões: {data.dependencies.database.max_connections}
      </div>
      <div>
        Conexões abertas: {data.dependencies.database.opened_connections}
      </div>
    </div>
  );
}
