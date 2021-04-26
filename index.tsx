import { Flex, Box } from 'reflexbox'

import {counter,increase} from './store'
import Child from './child'

export default function Home() {

  const count = counter.use()

  return (
    <div>
      <Flex>
  <Box
    p={3}
    width={1/2}
    color='black'
    bg='blue'
    textAlign='center'>
    Flex
  </Box>
  <Box
    p={3}
    width={1/2}
    color='black'
    bg='red'
    textAlign='center'
    >
    Box
  </Box>
</Flex>
    <h1>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
    <div>{count}</div>

      <button onClick={() =>counter.set(counter.get() + 1)}> + </button> 
      {/* <button onClick={() =>increase(1)}> + </button>  */}
      <Child/>
    </div>
    
  );
}
