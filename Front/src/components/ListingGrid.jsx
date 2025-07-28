import Card from "./Card"

const ListingGrid = (props) => {
   return(
      <div className="flex justify-between">
         {props.listings.map((card) => {
            return <Card key={card.id} card={card} />
         })}
      </div>
   )
}

export default ListingGrid;