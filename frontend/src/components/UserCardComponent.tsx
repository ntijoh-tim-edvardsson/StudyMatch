// Import the User type
import type { User } from "../types/User"

// Props definition for the user card
type UserCardProps = {
  user: User
}

// UserCardComponent displays a user's profile information
export default function UserCardComponent({ user }: UserCardProps) {
  return (
    // Card container
    <div className="w-80 rounded-2xl overflow-hidden bg-white">
        {/* User pfp */}
        <img
            src={user.pfp}
            alt={user.name}
            draggable={false}
            className="w-full h-56 object-cover"
        />
        {/* Card content */}
        <div className="p-4 space-y-3">
            {/* Name, age and location */}
            <div>
                <h2 className="text-xl font-bold">
                    {user.name}, {user.age}
                </h2>
                <p className="text-sm text-gray-500">
                    {user.location}
                </p>
            </div>
            {/* School and program */}
            <div className="text-sm text-gray-700">
                <p>
                    <span className="font-medium">School:</span> {user.school}
                </p>
                <p>
                    <span className="font-medium">Program:</span> {user.program} · Year {user.year}
                </p>
            </div>
            {/* Subjects and classes */}
            <div className="flex flex-wrap gap-2">
                {user.studySubjects.map(subject => (
                    <span
                        key={subject}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                        {subject}
                    </span>
                ))}
            </div>
            {/* Preferred study methods */}
            <p className="text-sm text-gray-600">
                Prefers: <span className="font-medium capitalize">{user.studyStyle}</span> study
            </p>
            {/* Bio */}
            <p className="text-sm text-gray-700 line-clamp-3">
                {user.bio}
            </p>

        </div>
    </div>
  )
}