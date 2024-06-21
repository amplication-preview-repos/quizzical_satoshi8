/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AgentService } from "../agent.service";
import { AgentCreateInput } from "./AgentCreateInput";
import { Agent } from "./Agent";
import { AgentFindManyArgs } from "./AgentFindManyArgs";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";
import { AgentUpdateInput } from "./AgentUpdateInput";
import { ClientFindManyArgs } from "../../client/base/ClientFindManyArgs";
import { Client } from "../../client/base/Client";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { PropertyFindManyArgs } from "../../property/base/PropertyFindManyArgs";
import { Property } from "../../property/base/Property";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";

export class AgentControllerBase {
  constructor(protected readonly service: AgentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agent })
  async createAgent(@common.Body() data: AgentCreateInput): Promise<Agent> {
    return await this.service.createAgent({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Agent] })
  @ApiNestedQuery(AgentFindManyArgs)
  async agents(@common.Req() request: Request): Promise<Agent[]> {
    const args = plainToClass(AgentFindManyArgs, request.query);
    return this.service.agents({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    const result = await this.service.agent({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAgent(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() data: AgentUpdateInput
  ): Promise<Agent | null> {
    try {
      return await this.service.updateAgent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    try {
      return await this.service.deleteAgent({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/clients")
  @ApiNestedQuery(ClientFindManyArgs)
  async findClients(
    @common.Req() request: Request,
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Client[]> {
    const query = plainToClass(ClientFindManyArgs, request.query);
    const results = await this.service.findClients(params.id, {
      ...query,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/clients")
  async connectClients(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        connect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/clients")
  async updateClients(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        set: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/clients")
  async disconnectClients(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        disconnect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/properties")
  @ApiNestedQuery(PropertyFindManyArgs)
  async findProperties(
    @common.Req() request: Request,
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Property[]> {
    const query = plainToClass(PropertyFindManyArgs, request.query);
    const results = await this.service.findProperties(params.id, {
      ...query,
      select: {
        address: true,

        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/properties")
  async connectProperties(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: PropertyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      properties: {
        connect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/properties")
  async updateProperties(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: PropertyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      properties: {
        set: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/properties")
  async disconnectProperties(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: PropertyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      properties: {
        disconnect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
