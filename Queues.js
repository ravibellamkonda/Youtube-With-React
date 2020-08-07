const queue = [];

// Queues in Javascript ==< FIFO 

// cretate a factor metods it will return obeject 
function createQueue() {
  return {
    // add or enqueue
    // remove or dequeue
    // peek
    // length
    //isEmpty 
    
    enqueue (item){
       queue.unshift(item)
    },
    
    dequeue(){
      return queue.pop()
    },
    
    peek() {
      return queue[queue.length-1]
    },
  
  get length() {
    return queue.length
  },
    
    isEmpty() {
      return queue.length === 0
    }
    
    
  }
}

const q = createQueue()

console.log(q.isEmpty())

q.enqueue('Make an js lesson')
q.enqueue('Help others to learn')
q.enqueue('Be positive')
q.enqueue('Be optimestic')

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.isEmpty())
