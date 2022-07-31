import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile-Section';
import AboutMeetup from './components/About-Meetup';
import NextMeetup from './components/Next-Meetup';
import Member from './components/Member';
import PastMeetupCard from './components/Past-Meetup-Card';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <NextMeetup />
      <AboutMeetup />
      <Member />
      <PastMeetupCard />
    </>
  );
}

export default App;
