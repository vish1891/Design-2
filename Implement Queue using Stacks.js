// Time Complexity : O(1)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes

// Any problem you faced while coding this : 
/*  
After submission on leetcode I got the message below: 
"Runtime: 56 ms, faster than 53.88% of JavaScript online submissions for Implement Queue using Stacks."
I was unable to understand why this is better <below link>
https://leetcode.com/problems/implement-queue-using-stacks/discuss/210955/JavaScript-amortized-O(1)-time-O(n)-space-two-stacks
*/

// Your code here along with comments explaining your approach
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1= [];
    this.s2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.s2.length){
        this.transfer(this.s1,this.s2);
    }
    return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     if(!this.s2.length){
        this.transfer(this.s1,this.s2);
    }
    return this.s2[this.s2.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (!this.s2.length && !this.s1.length);
};

MyQueue.prototype.transfer = function(){
    while(this.s1.length){
        this.s2.push(this.s1.pop());
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
