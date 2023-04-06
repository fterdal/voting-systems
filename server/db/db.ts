import { Client } from "pg";

export async function createClient() {
  const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "voting_systems",
  });

  await client.connect();
  return client;
}

let client: Client;
export async function getClient() {
  return client ? client : createClient();
}

export async function query(sqlQuery: string) {
  const client = await getClient();
  const result = await client.query(sqlQuery);
  return result.rows;
}
