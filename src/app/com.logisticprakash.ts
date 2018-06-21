import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.logisticprakash{
   export enum producetype {
      rice,
      sugar,
   }
   export enum usertype {
      farmer,
      procurement,
      transporter,
      storage,
      distributer,
      fps,
      consumer,
   }
   export class produce extends Asset {
      produceid: string;
      type: producetype;
      quantity: number;
      owner: user;
   }
   export class Address {
      street: string;
      city: string;
      state: string;
      zip: string;
   }
   export abstract class user extends Participant {
      participantKey: string;
      name: string;
      address: Address;
      type: usertype;
   }
   export class farmer extends user {
   }
   export class procurement extends user {
   }
   export class transporter extends user {
   }
   export class storage extends user {
   }
   export class distributer extends user {
   }
   export class fps extends user {
   }
   export class consumer extends user {
   }
   export class transferprocudeownership extends Transaction {
      produceid: string;
      newownerparticipantKey: string;
      newownerusertype: usertype;
   }
// }
