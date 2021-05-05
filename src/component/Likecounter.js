// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  function increase() {
      set_numLikes(numLikes => numLikes+1)
  };
  function decrease() {
    if (numLikes !==0){
      set_numLikes( numLikes => numLikes-1)
    }
  };
  function reset(){
    set_numLikes (initial_numLikes)
  }


  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}