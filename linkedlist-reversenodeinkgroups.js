/* LinkedList */

function reverse(head)
{

if(head === null) return;


if(head.next === null) return;


reverse(head.next);

head.next.next = head;
head.next = null;

}

function reverseNodesInKGroups(l, k) {
  //swap the linked list in group size = k
  var p = l; 
  var cnt = 1;
  var q;
  var new_start;
  var temp;

  while(cnt !== k) {    // go to the 'K'th node
    if(p.next === null) {
      return l;
    }
    p = p.next;
    cnt++;
  }
  
  new_start = p; //the new start    
  q = new_start;  
  while(p) {
    p = l;
    temp = q.next;
    if(temp === null) { // if total number of nodes is divisible by K (multiple of K)
      reverse(p);
      return new_start;
    }
    
    q.next = null;
    q = temp;
    l = temp;
    cnt = 1;
    //in the last outside while loop , if remainder is non-zero number of nodes
    while(cnt != k) 
    {
      if(temp.next === null) {
          reverse(p); 
          p.next = q;
          return new_start;
        }   
      temp = temp.next;
      cnt++;
    }
    
    reverse(p);
    p.next = temp;
    q = temp;
  }

return new_start;
}
