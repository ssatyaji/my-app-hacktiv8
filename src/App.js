import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile-Section";
import AboutMeetup from "./components/About-Meetup";
import NextMeetup from "./components/Next-Meetup";
import Member from "./components/Member";
import PastMeetup from "./components/Past-Meetup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div class="main">
        <Navbar />
        <Profile />
        <NextMeetup />
        <AboutMeetup />
        <Member />
        <PastMeetup />
        <Footer />
      </div>
    </>
  );
}

export default App;
