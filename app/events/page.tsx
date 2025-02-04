import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample upcoming events
const events = [
  {
    title: "Code N' Coffee Podcast",
    date: "Ongoing LIVE on YouTube",
    description: "Code N' Coffee, is a series of byte-sized tech content aimed at Computer Science students presented to you by The Mozilla Campus Club of SLIIT. Don't miss out on the Tech insights and the latest of the tech and privacy world.",
    location: "Youtube - @sliitmozilla",
    time: "Every Week",
  },
  {
    title: "Open Source Contribution Day",
    date: "July 1, 2024",
    description: "Join us for a day of contributing to open source projects",
    location: "SLIIT - Computer Labs",
    time: "10:00 AM - 4:00 PM",
  },
  /*{
    title: "Tech Talk: Future of Web",
    date: "July 15, 2024",
    description: "Industry experts discuss the future of web technologies",
    location: "SLIIT - Conference Hall",
    time: "2:00 PM - 4:00 PM",
  },*/
]

// Sample past events data
const pastEvents = [
  {
    title: "Bashaway 2024",
    image: "/assets/past-event-1.jpg",
    description:
      "Bashaway is a Inter-University Scripting competition organized by the SLIIT FOSS Community in collaboration with Mozilla Campus Club of SLIIT, SLIIT Women in FOSS, and Software Engineering Student Community.",
  },
  {
    title: "Intro to Assemby Programming",
    image: "/assets/past-event-2.jpg",
    description:
      "The 3rd live tech session conducted by Seniru Pasan. Dive into the world of low-level programming! Exploring the fundamentals that power your devices, demystifying how software speaks to hardware.",
  },
  {
    title: "Utilizing AntDesign for quick UI Development",
    image: "/assets/past-event-3.jpg",
    description:
      "The 2nd live tech session conducted by Russell Peiris. A session focusing on frontend and building clean and neat UIs",
  },
  {
    title: "Intro to Swift & SwiftUI",
    image: "/assets/past-event-3.jpg",
    description:
      "The 1st live tech session conducted by Nowen Kottage. Dive into iOS Development with the Introduction to Swift & SwiftUI: A sneak peek into UIKit!",
  },
]

export default function Events() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Upcoming Events Section */}
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>📍 {event.location}</p>
                  <p>🕒 {event.time}</p>
                </div>
                <Button className="w-full mt-4">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Events Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((pastEvent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Event Image */}
                <img
                  src={pastEvent.image}
                  alt={pastEvent.title}
                  className="w-full h-48 object-cover"
                />
                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pastEvent.title}</h3>
                  <p className="text-gray-600">{pastEvent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
