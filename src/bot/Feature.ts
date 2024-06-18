import Setting from "@/bot/settings/Setting";
import BooleanSetting from "@/bot/settings/BooleanSetting";

export default abstract class Feature
{
  readonly name: string;
  readonly description: string;
  private settings: Setting[] = [];
  
  protected constructor ( name: string, description: string )
  {
    this.name = name;
    this.description = description;
    this.addSetting( new BooleanSetting( "Enabled", null, false ) );
  }
  
  toJSON (): any
  {
    return {
      name:        this.name,
      description: this.description,
      settings:    this.settings.map( setting => setting.toJSON() ),
    };
  }
  
  addSetting ( setting: Setting ): void
  {
    setting.setParent( this );
    this.settings.push( setting );
  }
  
  addSettings ( settings: Setting[] ): void
  {
    settings.forEach( setting => setting.setParent( this ) );
    this.settings = settings;
  }
  
  getSetting ( name: string ): Setting | undefined
  { return this.settings.find( setting => setting.name === name ); }
  
  getSettings (): Setting[]
  { return this.settings; }
}