// Import UserCardComponent, SwipeCardComponent, User type, react state handler and motion - framer library
import UserCardComponent from '../components/UserCardComponent'
import SwipeCardComponent from '../components/SwipeCardComponent'
import type { User } from '../types/User'
import { useState } from "react"
import { motion, AnimatePresence} from "framer-motion";

// Mock/test user data for the swipe page
const userInfo: User[] = [
    { 
        id: 1, 
        name: "Jani", 
        age: 21, 
        school: "ICA", 
        program: "Product selection", 
        year: 3,
        pfp: "/img/jani_pfp.jpg",

        studySubjects: ["Dairy", "Stock/Inventory"],
        studyStyle: "group",
        skillLevel: "intermediate",
        studyGoals: ["Getting married"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Partille",

        languages: ["Afrikans", "Finnish", "Swedish", "English"],
        bio: "Looking for wife at ICA and likes bananas"
    },

    { 
        id: 2, 
        name: "Elin", 
        age: 22, 
        school: "Sahlgrenska", 
        program: "Medicine", 
        year: 1,
        pfp: "/img/elin_pfp.png",

        studySubjects: ["Microscope", "Cells"],
        studyStyle: "solo",
        skillLevel: "beginner",
        studyGoals: ["Make it 'till Friday"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Gothenburg",

        languages: ["English", "Swedish"],
        bio: "Likes to party and took all the family test"
    },

    { 
        id: 3, 
        name: "Jani", 
        age: 21, 
        school: "ICA", 
        program: "Product selection", 
        year: 3,
        pfp: "/img/jani_pfp.jpg",

        studySubjects: ["Dairy", "Stock/Inventory"],
        studyStyle: "group",
        skillLevel: "intermediate",
        studyGoals: ["Getting married"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Partille",

        languages: ["Afrikans", "Finnish", "Swedish", "English"],
        bio: "Looking for wife at ICA and likes bananas"
    },

    { 
        id: 4, 
        name: "Elin", 
        age: 22, 
        school: "Sahlgrenska", 
        program: "Medicine", 
        year: 1,
        pfp: "/img/elin_pfp.png",

        studySubjects: ["Microscope", "Cells"],
        studyStyle: "solo",
        skillLevel: "beginner",
        studyGoals: ["Make it 'till Friday"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Gothenburg",

        languages: ["English", "Swedish"],
        bio: "Likes to party and took all the family test"
    },

    { 
        id: 5, 
        name: "Jani", 
        age: 21, 
        school: "ICA", 
        program: "Product selection", 
        year: 3,
        pfp: "/img/jani_pfp.jpg",

        studySubjects: ["Dairy", "Stock/Inventory"],
        studyStyle: "group",
        skillLevel: "intermediate",
        studyGoals: ["Getting married"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Partille",

        languages: ["Afrikans", "Finnish", "Swedish", "English"],
        bio: "Looking for wife at ICA and likes bananas"
    },

    { 
        id: 6, 
        name: "Elin", 
        age: 22, 
        school: "Sahlgrenska", 
        program: "Medicine", 
        year: 1,
        pfp: "/img/elin_pfp.png",

        studySubjects: ["Microscope", "Cells"],
        studyStyle: "solo",
        skillLevel: "beginner",
        studyGoals: ["Make it 'till Friday"],

        availability: ["Mon-Fri"],
        studyMode: "in-person",
        location: "Gothenburg",

        languages: ["English", "Swedish"],
        bio: "Likes to party and took all the family test"
    },
    
]

// Main SwipePage component
export default function SwipePage() {

  // State: keeps track of cards currently in the deck
  const [cards, setCards] = useState<User[]>(userInfo)

  // Callback passed to SwipeCardComponent
  // Goes of when a card is swiped left or right
  const handleSwiped = (user: User, direction: "left" | "right") => {
    // Log which user was swiped and in which direction
    console.log("Swiped " + direction + " on " + user.name)
    // Remove the top card from the array
    setCards(prev => prev.slice(1))
     // Inspect the full user object after swipe
    console.log("This is the user", user)
  }

   // Limit the number of cards rendered at once
  const MAX_VISIBLE_CARDS = 2

  return (
    // Container: centers the cards on the page
    <div className="flex min-h-screen justify-center items-center bg-sky-50">
        <AnimatePresence>
          {cards.slice(0, MAX_VISIBLE_CARDS).map((user, index) => (
            <motion.div
                key={user.id}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{position: "absolute", zIndex: cards.length - index,}}>
                {index === 0 ? (
                <SwipeCardComponent user={user} onSwiped={handleSwiped}/>
                ) : (
              <UserCardComponent user={user} />
            )}
          </motion.div>
          ))}
        </AnimatePresence>
    </div>
  )
}