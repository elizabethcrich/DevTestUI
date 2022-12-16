import { Email } from "./email";
import { Phone } from "./phone";

export class Person {
  id?: number;
  organizationId?: number;
  externalPersonId = "";
  suffix = "";
  firstName = "";
  middle = "";
  lastName = "";
  organization?: {};
  personEmails?: Email[];
  personPhones?: Phone[];
}