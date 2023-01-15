import Item from "./item";

function itemList(props) {
  return (
    <div>
      
        <div className="productos__center">
          {props.products.map((item) => (
            <Item
              image={item.image}
              price={item.price}
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              stock={item.stock}
            />
          ))}
        </div>
      
    </div>
  );
}

export default itemList;
