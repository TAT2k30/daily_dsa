import { DataStructure } from "../../../Data Structure/LinkedList";
import { Models } from "../../../Models/ModleClass";

export namespace Linked_List {
  export namespace Easy_Problems {
    export class Remove_Duplicate {
      private node: DataStructure.Linked_List<Models.User>;

      constructor(input: DataStructure.Linked_List<Models.User>) {
        this.node = input;
      }

      public remove_duplicate = () => {
        let currNode = this.node.getHead();

        while (currNode !== null) {
          let nextNode = currNode.next;

          while (nextNode !== null) {
            if (currNode.data.Name == nextNode.data.Name) {
              // Xóa nextNode khỏi danh sách
              currNode.next = nextNode.next;
              if (nextNode.next) {
                nextNode.next.prev = currNode;
              }
            } else {
              nextNode = nextNode.next;
            }
          }

          currNode = currNode.next!;
        }

        this.node.printLinkedList();
      };
    }
  }
}
