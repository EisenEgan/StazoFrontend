import { User } from "./User";
import { Location } from "./Location";
import { Product } from "./Product";

export interface Review {
    user: User
    location: Location
    product: Product
    text: string
    starScore: number
    createdAt: Date
    photos: string[]
    likes: number
}