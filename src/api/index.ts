import express, { Express } from "express";
import FeatureManager from "../bot/FeatureManager";
import client from "../bot";
import { User } from "discord.js";

const app: Express = express();
const port: number = 3000;

app.use( ( req, res, next ) =>
{
  // Perform some authentication here
  next();
} );

app.get( "/features", ( _, res ) =>
  res.status( 200 ).json( FeatureManager.instance.features.map( feature => feature.toJSON() ) ),
);

app.get( "/user/:id", ( req, res ) =>
{
  if ( !req.params.id )
    return res.status( 400 ).json( { error: "User ID is required" } );
  
  const user: User | undefined = client.users.cache.get( req.params.id );
  
  if ( !user )
    return res.status( 404 ).json( { error: "User not found" } );
  
  res.status( 200 ).json( user );
} );

app.listen( port, () => console.log( `API is running on port ${port}` ) );