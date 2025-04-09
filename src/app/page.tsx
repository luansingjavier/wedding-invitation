import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Events />
      <Gallery />
      <RSVP />
    </main>
  );
}
