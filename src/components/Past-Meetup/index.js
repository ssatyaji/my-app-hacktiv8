import PastMeetupCard from "../Past-Meetup-Card";

const PastMeetup = () => {
  return (
    <div class="section past-meetup">
      <div class="header-members">
        <h1>Past Meetup</h1>
        <p>
          <a href="/#">See All</a>
        </p>
      </div>
      <div class="card-container">
        <PastMeetupCard />
        <PastMeetupCard />
        <PastMeetupCard />
      </div>
      <p class="underline"></p>
    </div>
  );
};

export default PastMeetup;
