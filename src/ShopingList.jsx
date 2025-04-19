function ShopingList({ items }) {
  return (
    <ul>
        {items.map((j) => (
            <li 
            key={j.id}
            >
                {j.items}-{j.quantity}
            </li>
        ))}
    </ul>
  );
}

export default ShopingList;