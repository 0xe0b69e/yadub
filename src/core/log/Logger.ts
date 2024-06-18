import * as fs from "fs";
import dayjs from "dayjs";

export default class Logger
{
  private fileDescriptor: number;
  
  constructor ()
  {
    this.fileDescriptor = fs.openSync( `logs/${dayjs().format("YYYY-MM-DD-HH-mm")}.log`, "w" );
  }
}