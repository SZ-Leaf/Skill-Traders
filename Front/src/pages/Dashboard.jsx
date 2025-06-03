import { useState, React } from "react";


const Dashboard = () =>{

   const [message, setMessage] = useState(null);
   const [note, setNote] = useState(null);

   const [activeTab, setActiveTab] = useState('browse');

   const renderTabContent= (tab) =>{
      switch(tab){
         case 'browse':
            return <ListingGrid listings={listings} />;
         case 'myListings':
            return <ListingGrid listings={myListings} />;
         case 'myRequests':
            return <RequestList requests={requests} />;
         default:
            return null;
      }
   };

   return(
      <main>
         
         <div className="tab-buttons">
            <button onClick={() => setActiveTab('browse')}>Browse</button>
            <button onClick={() => setActiveTab('myListings')}>My Listings</button>
            <button onClick={() => setActiveTab('myRequests')}>My Requests</button>
         </div>

         {renderTabContent()}

      </main>
   )
}

export default Dashboard;