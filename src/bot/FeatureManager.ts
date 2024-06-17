import Feature from "./Feature";
import AutoRole from "./features/utility/AutoRole";

export default class FeatureManager
{
  static readonly instance: FeatureManager = new FeatureManager();
  features: Feature[] = [];
  
  private constructor ()
  {
    this.addFeatures();
  }
  
  private addFeatures (): void
  {
    // Add features here
    //this.features.push( new NameExtendsFeature() );
    this.features.push( new AutoRole() );
  }
}