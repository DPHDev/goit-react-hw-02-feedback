
export const ChoiseBtns = ({increment}) => {

    return (  
    <div>
        <button onClick={() => increment("good")}>Good</button>      
        <button onClick={() => increment("neutral")}>Neutral</button>      
        <button onClick={() => increment("bad")}>Bad</button>      
    </div>
  );
};