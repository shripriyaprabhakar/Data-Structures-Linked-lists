/* LinkedList */

function mergeTwoLinkedLists(l1, l2) {
  var p = l1;
  var q = l2; 
  var s;
  var head = null;
  if ( p === null) return q;
  if ( q === null) return p;
  
  if(p&&q) {
    if (p.value <= q.value) {
      s = p;
      p = s.next;
    } else{
      s = q;
      q = s.next;
    }
  }
  head = s;
  while (p&&q) {
    if (p.value < q.value) {
      s.next = p;
      s = p;
      p = s.next;
    } else {
      s.next = q;
      s = q;
      q = s.next;
    }
    
  }
  if (p === null) s.next = q;
  if (q === null) s.next = p;
  
  return head;
}