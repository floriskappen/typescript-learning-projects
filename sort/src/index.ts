import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
console.log('Numbers Collection Unsorted: ' + numbersCollection.data)
numbersCollection.sort()
console.log('Numbers Collection Sorted: ' + numbersCollection.data)
console.log(' ')
console.log(' ')

const charactersCollection = new CharactersCollection('Xaayb')
console.log('Numbers Collection Unsorted: ' + charactersCollection.data)
charactersCollection.sort()
console.log('Numbers Collection Sorted: ' + charactersCollection.data)
console.log(' ')
console.log(' ')

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
console.log('Linked List Unsorted: ')
linkedList.print()

console.log(' ')
linkedList.sort()
console.log('Linked List Sorted: ')
linkedList.print()