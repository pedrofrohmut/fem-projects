export type Product = {
  id: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

export type Item = {
  id: number
  name: string
  amount: number
  price: number
}

export type Cart = {
  amount: number
  items: Array<Item>
}
