// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Cart from './components/Cart';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <h1>This is Cart Micro-frontend</h1>
      <Cart />
    </div>
  );
}

export default App;
