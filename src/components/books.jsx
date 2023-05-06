import { createSignal } from "solid-js"
import Nav from "../nav"
import Book from "./book"

const Books = () => {
    const data = [
        {
            "title": "The Reason I Jump",
            "author": "Naoki Higashida",
            "genre": "Memoir",
            "description": "This book is a first-hand account of what it's like to live with autism. Naoki Higashida, a thirteen-year-old boy with severe autism, provides insight into his thought processes and experiences that can help neurotypical readers better understand the condition.",
            "image_url": "https://m.media-amazon.com/images/I/61-DFd9JeXL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
        },
        {
            "title": "All Cats Have Asperger Syndrome",
            "author": "Kathy Hoopmann",
            "genre": "Picture Book",
            "description": "This picture book uses cats as a metaphor for people with Asperger syndrome, a form of autism. The book provides a fun and relatable way for children to learn about the condition and understand that being different is okay.",
            "image_url": "https://m.media-amazon.com/images/I/41yvSu9GjhL._SY346_.jpg"
        },
        {
            "title": "The Curious Incident of the Dog in the Night-Time",
            "author": "Mark Haddon",
            "genre": "Mystery",
            "description": "This novel is told from the perspective of a fifteen-year-old boy with autism named Christopher. After discovering his neighbor's dog dead, Christopher sets out to solve the mystery of who killed it. The book provides insight into the mind of someone with autism while also offering an engaging mystery plot.",
            "image_url": "https://m.media-amazon.com/images/I/51MRUMyXH8L._SY346_.jpg"
        },
        {
            "title": "Uniquely Human: A Different Way of Seeing Autism",
            "author": "Barry M. Prizant",
            "genre": "Non-fiction",
            "description": "This book challenges common assumptions about autism and provides a more positive and empowering perspective on the condition. The author, a clinical psychologist, draws on his experience working with individuals with autism to offer practical advice and insights into how to better support and understand people with the condition.",
            "image_url": "https://m.media-amazon.com/images/I/41gQ7zn7QBL._SY346_.jpg"
        },
        {
            "title": "The Autism Acceptance Book: Being a Friend to Someone with Autism",
            "author": "Ellen Sabin",
            "genre": "Children's Book",
            "description": "This interactive children's book helps young readers learn about autism and how to be a friend to someone with the condition. The book includes activities and exercises that encourage empathy, understanding, and acceptance.",
            "image_url": "https://m.media-amazon.com/images/I/515FhHVHh4L._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        }
    ]

    const [books, setBooks] = createSignal(data)

    return (
        <>
            <Nav />
            <br />
            <br />
            <p class=" pl-2 txt-disabled">
                {data.length} Results

            </p>
            <ul class="grid ">

                <For each={books()}>{(b, i) =>
                    <Book b={b} />
                }

                </For>


            </ul>

        </>
    )
}

export default Books
