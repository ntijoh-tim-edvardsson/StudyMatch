// Import the User type, motion-frame library and UserCardComponent
import type { User } from "../types/User";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import UserCardComponent from "./UserCardComponent";

// // SwipeCardComponent handles dragging, swipe detection, and exit animations
// Props:
// user, the user currently being shown
// onSwiped, function callback to handle swiped
export default function SwipeCardComponent({user, onSwiped,}: { user: User, onSwiped: (user: User, direction: "left" | "right") => void}) {

    // Animation controller used to start animations
    const controls = useAnimation()
    // Motion value tracking horizontal drag position
    const x = useMotionValue(0)
    // Rotate the card based on horizontal movement
    const rotate = useTransform(x, [-200, 200], [-20, 20])
    // Called when user releases the card after dragging
    const handleDragEnd = async (_: any, info: any) => {
    // Minimum distance required to count as a swipe
    const threshold = 120
    // Swiped right
    if (info.offset.x > threshold) {
        await controls.start({
            x: 500,
            rotate: 20,
            opacity: 0,
            transition: { duration: 0.4 },
        })
        // Notify parent that this user was swiped right
        onSwiped(user, "right")
    } 
    // Swiped left
    else if (info.offset.x < -threshold) {
        await controls.start({
            x: -500,
            rotate: -20,
            opacity: 0,
            transition: { duration: 0.4 },
        })
        // Notify parent that this user was swiped left
        onSwiped(user, "left")
    } 
    // // Not far enough, snap back to center
    else {
        controls.start({
            x: 0,
            rotate: 0,
            transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            },
        })
    }
    }
    return (
        <motion.div
            drag="x"
            style={{ x, rotate }}
            onDragEnd={handleDragEnd}
            animate={controls}
            dragElastic={0.2}
            dragConstraints={{ left: -300, right: 300 }}
            className="flex w-80 cursor-grab active:cursor-grabbing">
            <UserCardComponent user={user}/>
        </motion.div>
    )
}