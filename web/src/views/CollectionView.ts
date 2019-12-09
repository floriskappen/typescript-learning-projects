import { UserEdit } from "./UserEdit";
import { User } from "../models/User";

const user = User.buildUser({ name: 'NAME', age: 20 })

const root = document.getElementById('root')

if (root) {
    const userEdit = new UserEdit(root, user)

    userEdit.render()
}

// import { Collection } from "../models/Collection";

// export abstract class CollectionView<T, K> {
//     constructor(public parent: Element, public collection: Collection<T, K>) {}

//     abstract renderItem(model: T, itemParent: Element): void

//     render(): void {
//         this.parent.innerHTML = ''

//         const templateElement = document.createElement('template')

//         for (let model of this.collection.models) {
//             const itemParent = document.createElement('div')
//             this.renderItem(model, itemParent)
//             templateElement.content.append(itemParent)
//         }

//         this.parent.append(templateElement.content)
//     }
// }