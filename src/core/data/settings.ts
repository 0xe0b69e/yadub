import Setting from "@/bot/settings/Setting";
import { Snowflake } from "discord-api-types/globals";
import { Primitive } from "@/lib/definitions";
import redis from "@/core/data/redis/redis";
import { capitalize, toCamelCase } from "@/lib/string";

export async function getValue<T extends Primitive = any>(setting: Setting<T>, guildId: string | Snowflake): Promise<T>
{
  const value: string | undefined = await redis.hGet(
    guildId,
    `${capitalize(toCamelCase(setting.parent?.name ?? ""))}::${capitalize(toCamelCase(setting.name))}`
  );
  
  if (!value)
    return setting.defaultValue;
  
  return JSON.parse(value);
}