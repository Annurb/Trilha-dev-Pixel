
 import { useCart } from "./context/CartContext";


const TabelaProduto = ({item, onRemove,addCart, subCart, totalItem}) => {

  return (
    <tr>
      <td>
        <div className='produto'>
          <img src={item.image} alt='' />
          <div className='info'>
            <div className='name'>{item.name}</div>
            <div className='category'>{item.autor}</div>
          </div>
        </div>
      </td>
      <td>{item.price}</td>
      <td>
        <div className='qty'>
          <button onClick={() => subCart(item)}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{item.quantity}</span>
          <button onClick = {()=>addCart(item)}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{totalItem.toFixed(2)}</td>
      <td>
        <button className='remover' onClick={() =>onRemove(item.id)}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TabelaProduto;