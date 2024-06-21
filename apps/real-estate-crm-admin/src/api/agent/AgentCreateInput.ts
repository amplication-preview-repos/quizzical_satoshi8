import { ClientCreateNestedManyWithoutAgentsInput } from "./ClientCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  clients?: ClientCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
