import { ClientUpdateManyWithoutAgentsInput } from "./ClientUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  clients?: ClientUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
