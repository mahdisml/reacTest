
import {counter,increase} from './store'

export default function Child() {

  const count = counter.use()

  return (
    <div>
    <div>{count}</div>
    <button onClick={() =>increase(1)}> + </button> 
    </div>
    
  );
}
