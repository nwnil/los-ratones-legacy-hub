import { PlayerCard } from "./PlayerCard";

const players = [
  {
    name: "Andrei Dragomir",
    ign: "113",
    role: "Top Laner",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Lucjan Krezel",
    ign: "Lucker",
    role: "Jungler",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Adam Maanane",
    ign: "LIDER",
    role: "Mid Laner",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Patrick Hájek",
    ign: "Patrik",
    role: "Bot Laner",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Mads Brock-Pedersen",
    ign: "Doss",
    role: "Support",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

export const Roster = () => {
  return (
    <section className="py-20 bg-rat-dark">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold text-rat text-center mb-12">
          Current Roster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.ign} {...player} />
          ))}
        </div>
      </div>
    </section>
  );
};