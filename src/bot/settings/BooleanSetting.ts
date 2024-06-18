import Setting from "@/bot/settings/Setting";

export default class BooleanSetting extends Setting<boolean>
{
  constructor ( name: string, description: string | null, defaultValue: boolean, dependency?: Setting<boolean> | null )
  {
    super( name, description, defaultValue, dependency );
  }
  
  public toJSON (): any
  {
  }
}