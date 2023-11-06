export interface Advert {
  id: string
  user: User
  name: string
  description: string
  isActive: string
  imagesIds: string[]
  cost: string
  email: string
  phone: string
  location: string
  createdAt: string
  category: Category
}

// export interface CreateAdvert {
//   id: string
//   mame: string
//   location: string
//   Images: []
//   Cost: string
//   Email: string
//   Phone: string
//   CategoryId: string
// }

export interface ShortAdvert {
  id: string
  name: string
  location: string
  createdAt: string
  isActive: string
  imagesIds: string[]
  cost: string
}

export interface AdvertSearch {
  search: string
  showNonActive: string
  category: string
}

//==================================
export interface User {
  id: string
  name: string
  role: string
  adverts: Advert[]
  registeredTime: string
}

export interface CreateUser {
  name: string
  login: string
  password: string
}

export interface LoginUser {
  login: string
  password: string
  //======
}

export interface ShortUser {
  id: string
  name: string
}

//==================================
export interface Category {
  id: string
  name: string
  parentId: string
}

export interface ImportCategory {
  id: string
  name: string
  parentId: string
}

export interface CategoryTree {
  id: string;
  name: string;
  parentId: string;
  children: CategoryTree[];
}

//==================================
export interface Comment {
  id: string
  text: string
  created: string
  parentId: string
  user: User
}

export interface UpdateComment {
  text: string
}

//==================================
export interface ShortImage {
  id: string
}

export interface Encoding {
  Id: string
  Name: string
  Location: string
  Images: []
  Cost: string
  Email: string
  Phone: string
  CategoryId: string
}

export interface Breadcrumb {
  label: string
  id: string
}

