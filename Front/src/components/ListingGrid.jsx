import Card from "./Card"

const ListingGrid = (props) => {
   return(
      <div>
         <h2>Test Grid</h2>
         {props.listings.map((card) => {
            return <Card key={card.id} card={card} />
         })}
      </div>
   )
}

export default ListingGrid;