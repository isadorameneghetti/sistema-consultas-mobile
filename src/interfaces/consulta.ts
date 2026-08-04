import { StatusConsulta } from "../types/statusConsulta";
import { Especialidade } from "../types";

export interface Consulta {
  id: number;
  pacienteId: number;
  pacienteNome: string;
  medicoId: number;
  medicoNome: string;
  especialidade: Especialidade;
  usuarioId: number; // ID do usuário que agendou a consulta
  data: string;
  horario: string;
  status: StatusConsulta;
  observacoes?: string;
  valor?: number;
}
