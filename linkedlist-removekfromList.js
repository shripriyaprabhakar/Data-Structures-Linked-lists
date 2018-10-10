/* LinkedList */

function removeKFromList(l, k) {
    var prev = null;
    var head = l;
     var curr = head;

    while(curr !== null) { 
        if (curr.value === k) {
          if (curr === head) {
             head = curr.next;
              curr = curr.next;
          } else {
              prev.next = curr.next;
              curr = curr.next;
          }
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
}
