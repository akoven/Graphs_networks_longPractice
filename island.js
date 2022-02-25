function getNeighbors(row, col, graph) {

  let neighbors = []
  // Check top
  if(row - 1 >= 0 && graph[row -1][col] === 1 ){
    neighbors.push([row-1,col])
  }
  // Check bottom
  if(row + 1 < graph.length && graph[row +1][col] === 1 ){
    neighbors.push([row+1,col])
  }
  // Check left
  if(col - 1 >= 0 && graph[row][col -1] === 1 ){
    neighbors.push([row,col-1])
  }
  // Check right
  if( col + 1 < graph[0].length && graph[row][col+1] === 1 ){
    neighbors.push([row,col+1])
  }
  // Return neighbors
 return neighbors

}

// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]
// let graph = matrix
// console.log(getNeighbors(1,1,graph))

function islandSize(row, col, graph) {
  let start = graph[row][col]
  let startStr = `${row},${col}`
  // Create a visited set to store visited nodes
  let visited = new Set().add(startStr)

  // Create a stack, put the starting node in the stack
  let stack = [[row,col]]

  // Put the stringified starting node in visited

  // Initialize size to 0
  let size = 0
  // let neighborList = new Set()

  // While the stack is not empty,
  while(stack.length > 0){

    // Pop the first node
    let currentNode = stack.pop()
    // DO THE THING (increment size by 1)
    let currentRow = currentNode[0]
    let currentCol = currentNode[1]
    size++

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    let neighbors = getNeighbors(currentRow,currentCol,graph);
    for(let neighbor of neighbors){//cycling through neighbors of the starting nodes
      let neighborCoordinate = `${neighbor[0]},${neighbor[1]}`//the neighbors of any one neighbor from the initial start point is checked
      if(!visited.has(neighborCoordinate)){//if the coordinate is not in the visited set, it is added
        stack.push(neighbor);//added to the stack array as a coordinate
        visited.add(neighborCoordinate)//added to the visited set
      }
      // size++
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  return size
  // return neighborList
  // return start
  // return coordinates
  // return stack

  // Your code here
}

matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]
let graph = matrix
console.log(islandSize(1,1,graph))

module.exports = [getNeighbors, islandSize];
