import { Two_Pointers } from "./Aglorithm/2_Pointers/Easy/Easy_Problems";
import { Easy_Problems } from "./Aglorithm/Arrays and String/Easy/Easy_Problems";
import { Medium_Problems } from "./Aglorithm/Arrays and String/Medium/Medium_Problems";
import { Hash_And_HashSet } from "./Aglorithm/Hash and HashSet/Easy/Easy_Problems";
import { Linked_List } from "./Aglorithm/Linked List/Easy/Easy_Problems";
import { DataStructure } from "./Data Structure/LinkedList";
import { Models } from "./Models/User";
// let response:Easy_Problems.B7.Summary_Ranges = new Easy_Problems.B7.Summary_Ranges([1,3,2,10,9,11,2,1])
// console.log(response.summary_ranges());

//Testing out Alogrithm => Arrays and Strings / Medium / product of array except self.
// let response: Medium_Problems.Product_Of_Array_Except_Self = new Medium_Problems.Product_Of_Array_Except_Self([-1,1,0,-3,3]);
// console.log(response.product_of_array_except_self())

//Testing out Alogrithm => Arrays and Strings / Medium / Merge intervals.
// let response: Medium_Problems.Merge_Intervals = new Medium_Problems.Merge_Intervals([[2,4],[1,2],[9,8],[3,4]])
// console.log(response.sort_array_of_array_numbers())

//Testing out Alogrithm => Hash and hasSet / Easy / Jewels and stones
// let response: Hash_And_HashSet.Easy_Problems.Jewels_And_Stones = new Hash_And_HashSet.Easy_Problems.Jewels_And_Stones('aA', 'aAAabbbbb');
// console.log(response.jewels_and_stone_hash_set());

//Testing out Algrithm => Hash and HasSet / Easy / Contains Dublicate

// let response: Hash_And_HashSet.Easy_Problems.Contains_Dublicate = new Hash_And_HashSet.Easy_Problems.Contains_Dublicate([1,2,2,3,4,5,6])
// console.log(response.contains_dublicate_has_set())

//Testing out Alogrithm => Two Pointers / Easy / Sqyare of a sorted array
// let response:Two_Pointers.Square_Of_A_Sorted_Array = new Two_Pointers.Square_Of_A_Sorted_Array([-7,-3,2,3,11])
// console.log(response.square_of_a_sorted_array())

//Testing out Alogrithm => Two Pointer / Easy / Reverse String
// let response : Two_Pointers.Reverse_String = new Two_Pointers.Reverse_String("anhtien");
// response.reverse_string()

// Testing Data Structure Linked List
let user1 = new Models.User({
  Name: "Tran Anh Tien",
  Age: 21,
  Description: "Love playing basketball",
  Salary: 3000,
});
let user2 = new Models.User({
  Name: "Tran Thanh Binh",
  Age: 21,
  Description: "Love playing Football",
  Salary: 3000,
});
let user3 = new Models.User({
  Name: "Tran Phuc Nam",
  Age: 21,
  Description: "Have a hobby about playing Gundam models",
  Salary: 3000,
});
let user4 = new Models.User({
  Name: "Le Cong Khanh",
  Age: 21,
  Description: "rat",
  Salary: 3000,
});

let user5 = new Models.User({
  Name: "Le Cong Khanh",
  Age: 21,
  Description: "rat",
  Salary: 3000,
});
let node1 = new DataStructure.Node(user1);
let node2 = new DataStructure.Node(user2);
let node3 = new DataStructure.Node(user3);
let node4 = new DataStructure.Node(user4);
let node5 = new DataStructure.Node(user5);

let linkedList = new DataStructure.Linked_List<Models.User>();
linkedList.insertInBegin(user1);
linkedList.insertAtEnd(user2);
linkedList.insertAtEnd(user3);
linkedList.insertAtEnd(user4);
linkedList.insertAtEnd(user5);

let response = new Linked_List.Easy_Problems.Remove_Duplicate(linkedList);
response.remove_duplicate();
