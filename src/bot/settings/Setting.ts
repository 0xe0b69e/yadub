import { Primitive } from "@/lib/definitions";
import Feature from "@/bot/Feature";

export default abstract class Setting<T extends Primitive = any>
{
  readonly name: string;
  readonly description: string | null;
  readonly defaultValue: T;
  readonly dependency?: Setting<boolean> | null;
  parent?: Feature;
  
  /**
   * @param {string} name - The name of the setting
   * @param {string} description - The description of the setting
   * @param {T} defaultValue - The default value for the setting
   * @param {Setting<boolean>} dependency - The setting that this setting depends on
   * @protected
   */
  protected constructor ( name: string, description: string | null, defaultValue: T, dependency?: Setting<boolean> | null)
  {
    this.name = name;
    this.description = description;
    this.defaultValue = defaultValue;
    this.dependency = dependency;
  }
  
  setParent ( parent: Feature ): void
  { this.parent = parent; }
  
  abstract toJSON (): any;
}