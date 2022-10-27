export default function parseToHTMLElement(HTMLString: string): HTMLElement {
    const pareseToDoc: Document = new DOMParser().parseFromString(HTMLString, 'text/html');
    return <HTMLElement> pareseToDoc.body.firstChild;
}