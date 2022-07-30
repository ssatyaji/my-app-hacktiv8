import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile-Section';
import NextMeetup from './components/Next-Meetup';
import Member from './components/Member';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <NextMeetup />
      <Member />
    </>
  );
}

export default App;
