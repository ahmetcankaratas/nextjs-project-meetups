import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A_meeting_between_a_man_and_a_woman.jpg/1280px-A_meeting_between_a_man_and_a_woman.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
     },
     {
       params: {
         meetupId: 'm2',
       },
     },
    ],
  };
}

export async function getStaticProps(context){
  //Fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A_meeting_between_a_man_and_a_woman.jpg/1280px-A_meeting_between_a_man_and_a_woman.jpg",
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup'
      }
    }
  }
}

export default MeetupDetails;
