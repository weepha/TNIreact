import { AxiosResponse } from "axios";
import { http } from "./http-service";

export async function findAllProduct(): Promise<AxiosResponse<any>> {
  try {
    const response = await http.get<any>(
      "https://api.codingthailand.com/api/course"
    );
    return response;
  } catch (error) {
    throw error;
  }
}

// เพิ่ม service เฉพาะ
export async function findProducbyId(id: number): Promise<AxiosResponse<any>> {
  try {
    const response = await http.get<any>(
      "https://api.codingthailand.com/api/course/" + id,
    );
    return response;
  } catch (error) {
    throw error;
  }
}
