import { Image } from './image'
import { Link } from './link'

export type Card = {
    title: string,
    image: Image,
    description: string,
    link: Link
}