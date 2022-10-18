import "./Counter.css";
function Counter(props) {
  console.log(props);
  return (
    <div className="counter">
      <h2>{props.count}</h2>
      <div className="btnwrap">
        <button className="inc" onClick={props.increment}>+</button>
        <button className="dec" onClick={props.decrrement}>-</button>
      </div>
    </div>
  );
}
export default Counter;
