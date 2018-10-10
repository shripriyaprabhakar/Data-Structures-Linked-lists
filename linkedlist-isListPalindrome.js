/* LinkedList */

function isListPalindrome(l) {
      
    if (!l || l.next == null) {
        return true;
    }
    
    // Find center
    var head = l;
    var fast = l;
    var slow = l;
    
    while(fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var center  = slow;
    
    //[1, 2, 2, 2, 1, 1]
    
    // Reverse list
    /*  1-> 2 -> 3 -> 4

        null<-1 -> 2 -> 3 -> 4
        null<-1 <- 2 -> 3 -> 4
        null<-1 <- 2 <- 3 -> 4
        null<-1 <- 2 <- 3 <- 4
    
    */
    var current = head;
    var previous = null;
    var temp = null;
    
    center = center.next;
    
    while(current != center) {         
            temp = current.next;
            current.next = previous;        
            previous = current;
            current = temp;                         
    }     
     
    // If even number  - take previous, if odd - remove the first element
    if  (fast.next) {
     current = previous;
    }
    else {
        current = previous.next;
    }    
    
    // Compare 2 halfs of list
    while(center != null && current != null) {
        
        if (center.value != current.value) {
            
            return false;
        }
        center = center.next;
        current = current.next;
    }    
    return true;
}

