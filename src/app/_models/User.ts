import { Review } from "./Review";

export interface User {
    userRole: number
    email: string
    username: string
    socialProvider: string
    avatarUrl: string
    backgroundImageUrl: string
    reviewCount: number
    lastActive: Date
    reviews?: any
}