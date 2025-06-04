const Card = ({card}) => {
   return(
      <div className="listingCard">
         <h3>{card.offeredSkill} for {card.requestedSkill}</h3>
         <p>{card.description}</p>
         <p><strong>Posted by:</strong> {card.owner}</p>
         <p>{card.private ? "Private" : "Public"}</p>
         {card.designatedTo && <p><strong>To:</strong> {card.designatedTo}</p>}
      </div>
   );
};

export default Card;