import env from '../utils/validateEnv'
import { fetchData } from "./fetchData";

const API_URI = env.REACT_APP_REST_API + "/parsers";


export interface QueryParserInput {
  query?: string,
}

export const queryParser = async (query: QueryParserInput) => {
  const res = await fetchData(API_URI,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    }
  );

  return res.json();
}