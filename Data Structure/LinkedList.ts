export namespace DataStructure {
  export interface ILinkedList<T> {
    insertInBegin(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(node: Node<T>): void;
    printLinkedList(): void;
    traverse(): T[];
    size(): number;
    serach(comparator: (data: T) => boolean): Node<T> | null;
  }
  export interface HasName {
    Name: string;
  }
  export class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;

    constructor(public data: T) {}

    public toString(): string {
      return `${this.data}`;
    }
  }

  export class Linked_List<T extends HasName> implements ILinkedList<T> {
    private head: Node<T> | null = null;

    public insertInBegin(data: T): Node<T> {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      return node;
    }

    insertAtEnd(data: T): Node<T> {
      const node = new Node(data);
      //Nếu danh sách rỗng thì add vào vị trí head
      if (this.head == null) {
        this.head = node;
        return node;
      }
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = node;
      node.prev = currNode;
      return node;
    }
    deleteNode(node: Node<T>): void {
      throw new Error("Method not implemented.");
    }
    traverse(): T[] {
      throw new Error("Method not implemented.");
    }
    size(): number {
      throw new Error("Method not implemented.");
    }
    serach(comparator: (data: T) => boolean): Node<T> | null {
      throw new Error("Method not implemented.");
    }
    public printLinkedList(): void {
      let result: string = "";
      let currentNode = this.head;
      while (currentNode) {
        result += `${currentNode.data.Name} -> `;
        currentNode = currentNode.next;
      }
      result += "null";
      console.log(result);
    }
  }
}
