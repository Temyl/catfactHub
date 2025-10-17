import axios, { AxiosInstance } from "axios";
import { DURATION } from "../interface/interface";


export class CatFactService {
  private readonly cat: AxiosInstance;

  constructor() {
    this.cat = axios.create({
      baseURL: "https://catfact.ninja",
      timeout: 5 * DURATION.SECONDS,
    });
  }

  public async get(): Promise<string> {
    try {
      const response = await this.cat.get<{ fact: string }>("/fact");
      return response.data.fact;
    } catch (err) {
        console.error("Failed to fetch cat fact:", err);
        throw new Error("Error fetching cat fact");
      }
  }
}
