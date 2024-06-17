import Setting from "./settings/Setting";

export default abstract class Feature
{
  readonly name: string;
  readonly description: string;
  private settings: Setting[] = [];
  
  protected constructor ( name: string, description: string )
  {
    this.name = name;
    this.description = description;
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
  { this.settings.push( setting ); }
  
  addSettings ( settings: Setting[] ): void
  { this.settings = settings; }
  
  getSetting ( name: string ): Setting | undefined
  { return this.settings.find( setting => setting.name === name ); }
  
  getSettings (): Setting[]
  { return this.settings; }
}