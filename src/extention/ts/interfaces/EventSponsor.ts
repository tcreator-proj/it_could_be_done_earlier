export default interface EventSponsor {
    addEvent(event: string, handler: EventListener): void;
}
