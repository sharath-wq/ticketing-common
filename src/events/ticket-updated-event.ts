import { Sujbects } from './subjects';

export interface TicketUpdatedEvent {
    subject: Sujbects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}
