export default interface Listenable {
  createListener(): void
  clearListener(): void
}