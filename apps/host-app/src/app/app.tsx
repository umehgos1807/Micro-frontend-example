import { lazy, Suspense } from 'react';

//@ts-ignore
const Cart = lazy(() => import('cart/Cart'));

export function App() {
  return (
    <div>
      <h1>This is Host app</h1>
      <Suspense fallback="Loading Cart data">
        <Cart context="Host app" />
      </Suspense>
    </div>
  );
}

export default App;
