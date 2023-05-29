import { ServerRespond } from './DataStreamer';

export interface Row {
  /*row interface similiar set up to the old schema, and since the updated one is in place now, 
  we must update this interface to match the current schema.
  */
  price_abc: number,
  price_def: number,
  ratio: number, 
  timestamp: Date,
  upper_bound: number, 
  lower_bound: number,
  trigger_alert: number | undefined, 
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    return serverResponds.map((el: any) => {
      return {
        stock: el.stock,
        top_ask_price: el.top_ask && el.top_ask.price || 0,
        timestamp: el.timestamp,
      };
    })
  }
}
