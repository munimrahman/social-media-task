import BirthdayCard from "../../components/BirthdayCard/BirthdayCard";
import SuggestFriend from "../../components/SuggestedFriend/SuggestFriend";

const RightSide = () => {
  return (
    <>
      <div className="mb-6">
        <SuggestFriend />
      </div>
      <div className="mb-6">
        <BirthdayCard />
      </div>
    </>
  );
};

export default RightSide;
