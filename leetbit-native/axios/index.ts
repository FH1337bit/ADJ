import axios, { AxiosResponse } from 'axios';

export default async function getCats(): Promise<AxiosResponse<string>> {
  return (await axios.get('https://catfact.ninja/fact')).data.fact;
}
