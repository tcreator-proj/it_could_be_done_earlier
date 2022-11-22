export default interface Observable {
  createObservers(): void
  clearObservers(): void
}