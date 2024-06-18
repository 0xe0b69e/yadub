export const toCamelCase = ( str: string ) =>
  str.toLowerCase()
  .replace( /[^a-zA-Z0-9]+(.)/g, ( m, chr ) => chr.toUpperCase() );

export function capitalize ( str: string, ignoreCasing: boolean = true ): string
{
  str = ignoreCasing ? str?.toLowerCase() : str;
  return str?.charAt( 0 )?.toUpperCase() + str?.slice( 1 );
}
