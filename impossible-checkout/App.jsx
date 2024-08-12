const { useState } = React;
const { createRoot } = ReactDOM;

const suggestion = {
  image: "./nike.png",
  name: "Figma Forces",
  thumb: "./figma.svg",
  price: "$425",
  desc: "Men shoes",
};

const CloseBtn = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

const Header = ({ onHover, onClick, ...props }) => {
  return (
    <header className="product-head">
      <h2>We think you'll like this</h2>
      <button
        className="close-btn"
        onMouseOver={() => onHover(true)}
        onClick={() => onClick(true)}
      >
        <CloseBtn />
      </button>
    </header>
  );
};

const PreviewImg = ({ ...props }) => {
  return (
    <div className="product-img">
      <img src={suggestion.image} alt="Suggested product" {...props} />
    </div>
  );
};

const ProductContent = ({ ...props }) => {
  return (
    <div className="product-content">
      <div>
        <img src={suggestion.thumb} alt="Product thumbnail" />
        <h2>{suggestion.name}</h2>
        <span className="price">{suggestion.price}</span>
      </div>
      <span className="desc">{suggestion.desc}</span>
    </div>
  );
};

const Button = ({ _try, purchase, ...props }) => {
  return (
    <div
      className={`product-button ${_try ? "try" : ""} ${
        purchase ? "done" : ""
      }`}
      {...props}
    >
      <button className="primary">
        <span>Buy Now</span>
      </button>
      <button className="secondary">Not interested</button>
    </div>
  );
};

const Purchase = ({ ...props }) => {
  return (
    <div className="purchase">
      <Check />
      <h2>Thank you for your purchase</h2>
    </div>
  );
};

function App() {
  const [_try, _setTry] = useState(false);
  const [purchase, setPurchase] = useState(false);

  return (
    <>
      <div className="container">
        <Header onHover={_setTry} onClick={setPurchase} />
        <PreviewImg width={200} />
        <ProductContent />
        <Button _try={_try} purchase={purchase} onClick={setPurchase} />
      </div>
      {purchase && <Purchase />}
    </>
  );
}

const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(<App />);
