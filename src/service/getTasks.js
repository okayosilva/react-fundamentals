import { BASE_URL } from "./api";

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}?_limit=10`);
  const data = await response.json();
  return data;
};
