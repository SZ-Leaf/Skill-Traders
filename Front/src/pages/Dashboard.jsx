import { useState, React } from "react";
import ListingGrid from "../components/ListingGrid";
import cardsMock from "../mock/CardsMock";

const Dashboard = () => {
  // const [message, setMessage] = useState(null);
  // const [note, setNote] = useState(null);

  const [activeTab, setActiveTab] = useState("browse");

  const user = "alex";

  const listings = cardsMock.filter((card) => !card.private);
  const myListings = cardsMock.filter(
    (card) => !card.private && card.owner === user
  );
  const requests = cardsMock.filter(
    (card) => card.private && card.designatedTo === user
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "browse":
        return <ListingGrid listings={listings} />;
      case "myListings":
        return <ListingGrid listings={myListings} />;
      case "myRequests":
        return <ListingGrid listings={requests} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("browse")}>Browse</button>
        <button onClick={() => setActiveTab("myListings")}>My Listings</button>
        <button onClick={() => setActiveTab("myRequests")}>My Requests</button>
      </div>

      {renderTabContent()}
    </>
  );
};

export default Dashboard;
