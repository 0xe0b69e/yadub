export default abstract class Setting
{
  readonly name: string;
  readonly description: string;
  
  protected constructor ( name: string, description: string )
  {
    this.name = name;
    this.description = description;
  }
  
  abstract toJSON (): any;
}