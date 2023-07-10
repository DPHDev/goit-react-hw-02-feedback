export const Counter = ({ good, neutral, bad, total, approvePercent }) => {
  return (
    <div>
        <label htmlFor=""><span>Good:</span>{good}</label>
        <label htmlFor=""><span>Neutral:</span>{neutral}</label>
        <label htmlFor=""><span>Bad:</span>{bad}</label>
        <label htmlFor=""><span>Total:</span>{total}</label>
        <label htmlFor=""><span>Positive Feedback:</span>{approvePercent}%</label>
    </div>
  );
};