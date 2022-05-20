function length(head) {
  let length = 0;

  while (head !== null) {
    head = head.next;
    length++;
  }

  return length;
}
