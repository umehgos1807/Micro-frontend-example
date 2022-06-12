import { getMockCartList } from '../utils/CartListUtilty';

interface CartProps {
  context?: string;
}

const Cart: React.FunctionComponent<CartProps> = (props) => {
  const cartList = getMockCartList();
  return (
    <div>
      <h1>This is cart component</h1>
      <h3>Page context - {props.context}</h3>
      <ul>
        {cartList.map((item) => (
          <li>
            <div>Sno - {item.id}</div>
            <div>Name - {item.itemName}</div>
            <p>Details - {item.descripttion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
