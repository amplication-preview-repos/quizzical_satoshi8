import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Client = {
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
