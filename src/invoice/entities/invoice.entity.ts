export class Invoice {
  service: string;
  startDate: string;
  endDate: string;
  hours: number;
  rate: number;
  //TODO: NEXT I have to create new DAO for customer
  customer: string;
}
