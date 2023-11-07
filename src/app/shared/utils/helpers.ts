import {Category, CategoryTree} from "../../interfaces";

export function buildCategoryTree(data: Category[]): CategoryTree[] {

  let map: { [key: string]: number; } = {}, node: CategoryTree, roots: CategoryTree[] = [], i;
  let dataWithChildren: CategoryTree[] = data.map((item, index) => {
    map[item.id] = index
    return {...item, children: [], $ref: ''}
  })

  for (i = 0; i < dataWithChildren.length; i += 1) {
    node = dataWithChildren[i]
    if (node.parentId !== null && node.parentId !== '00000000-0000-0000-0000-000000000000') {
      dataWithChildren[map[node.parentId]].children.push(node)
    } else {
      roots.push(node)
    }
  }

  return roots
}
