export namespace DataStructure {
  export interface ILinkedList<T> {
    insertInBegin(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(node: Node<T>): void;
    printLinkedList(): void;
    traverse(): T[];
    getSize(): number;
    serach(comparator: (data: T) => boolean): Node<T> | null;
    reverseLinkedList(): Node<T> | null;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
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
    private tail: Node<T> | null = null;
    private size: number = 0;

    public insertInBegin(data: T): Node<T> {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.tail = node.next;
      }
      this.size = 1;
      return node;
    }

    public getTail(): Node<T> | null {
      return this.tail;
    }

    public getHead(): Node<T> | null {
      return this.head;
    }

    public insertAtEnd(data: T): Node<T> {
      const node = new Node(data);
      //Nếu danh sách rỗng thì add vào vị trí head
      if (this.head == null) {
        this.head = node;
        this.size = 1;
        return node;
      }
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = node;
      node.prev = currNode;
      this.size += 1;
      return node;
    }
    deleteNode(node: Node<T>): void {
      throw new Error("Method not implemented.");
    }
    traverse(): T[] {
      throw new Error("Method not implemented.");
    }
    public getSize(): number {
      return this.size;
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

    public reverseLinkedList(): Node<T> | null {
      if ((this.size = 0)) {
        return null;
      }

      let current: Node<T> | null = this.head;
      let prev: Node<T> | null = null;

      while (current) {
        const next = current.next;
        current.prev = next;
        current.next = prev;

        prev = current;
        current = next;
      }

      this.head = prev;

      return this.head;
    }

    public isCycleLinkedList(): boolean {
      let slow = this.head;
      let fast = this.head;

      while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) return true;
      }

      return false;
    }
  }
}
