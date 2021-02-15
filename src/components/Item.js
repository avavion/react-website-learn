import ItemImage from "./ItemImage";

const Item = ({ item, image }) => {
  return (
    <li className='collection-item'>
      {image.src > 0 && <ItemImage image={image} />}
      <h1 className='collection-item__title'>{item.name}</h1>
      <p className='collection-item__description'>{item.content}</p>
      <button className='button button--primary collection-item__button'>
        От {item.price} ₽
      </button>
    </li>
  );
};

export default Item;
