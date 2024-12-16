import { Calendar } from "lucide-react";

const matches = [
  {
    opponent: "Team BDS",
    date: "March 9, 2024",
    time: "18:00 CET",
    tournament: "LEC Spring 2024",
  },
  {
    opponent: "SK Gaming",
    date: "March 10, 2024",
    time: "19:00 CET",
    tournament: "LEC Spring 2024",
  },
];

export const UpcomingMatches = () => {
  return (
    <section className="py-20 bg-rat-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold text-rat text-center mb-12">
          Upcoming Matches
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {matches.map((match, index) => (
            <div 
              key={index}
              className="bg-rat-dark p-6 rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="text-rat text-xl font-heading mb-2">
                  vs {match.opponent}
                </h3>
                <p className="text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {match.date} - {match.time}
                </p>
                <p className="text-gray-400">{match.tournament}</p>
              </div>
              <div className="hidden md:block">
                <button className="bg-rat hover:bg-rat/80 text-rat-dark font-bold py-2 px-6 rounded transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};