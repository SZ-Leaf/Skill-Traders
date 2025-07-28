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
    <div className="flex flex-col content-center items-center gap-5 p-5 h-full">
      <h1 className="main-title">Skill Traders</h1>
      <div className="tab-buttons w-4/5 flex flex-col gap-10">

        <div className="dashboard-browse-nav">
          <button onClick={() => setActiveTab("browse")} className={`browse-nav-element ${activeTab === "browse" ? "active-btn" : ""}`} id="browse-btn">Browse</button>
          <button onClick={() => setActiveTab("myListings")} className={`browse-nav-element ${activeTab === "myListings" ? "active-btn" : ""}`}>My Listings</button>
          <button onClick={() => setActiveTab("myRequests")} className={`browse-nav-element ${activeTab === "myRequests" ? "active-btn" : ""}`}>My Requests</button>
        </div>

        {renderTabContent()}
      </div>

    </div>
  );
};

export default Dashboard;
