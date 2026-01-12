// Rating interface represents product rating info
export interface Rating {
    rate: number      // average rating
    count: number     // total number of ratings
}

// Product interface represents a single product object
export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}
