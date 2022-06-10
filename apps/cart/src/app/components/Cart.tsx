interface CartProps {
  context?: string;
}

const Cart: React.FunctionComponent<CartProps> = (props) => {
  return (
    <div>
      <h1>This is cart component</h1>
      <h3>Page context - {props.context}</h3>
    </div>
  );
};

export default Cart;
