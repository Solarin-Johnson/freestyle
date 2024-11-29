const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

const quotes = [
  {
    tag: "inspiration",
    body: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    dp: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
  },
  {
    tag: "life",
    body: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    dp: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
  },
  {
    tag: "wisdom",
    body: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    dp: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
  },
  {
    tag: "motivation",
    body: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    dp: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
  },
  {
    tag: "happiness",
    body: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    dp: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
  },
  {
    tag: "success",
    body: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    dp: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
  },
  {
    tag: "perseverance",
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    dp: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
  },
  {
    tag: "dreams",
    body: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    dp: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
  },
  {
    tag: "courage",
    body: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    dp: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
  },
  {
    tag: "kindness",
    body: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop",
    dp: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
  },
];

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

const AuthorDpCluster = () => {
  return (
    <div className="author-dp-cluster">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="author-dp">
          <img
            src={`https://randomuser.me/api/portraits/thumb/${
              Math.random() < 0.5 ? "men" : "women"
            }/${index + 1}.jpg`}
            alt={`Author ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <h1 id="serif">
          Discover the quotes that will touch <span>your life</span>
        </h1>
        <span>
          Get lost in the magical world of quotes, the expressions of every
          feeling and thought is waiting for you here
        </span>
      </div>
      <div className="search">
        <div className="search-box">
          <SearchIcon />
          <input type="search" placeholder="Search for authors or quotes..." />
          <button>Search</button>
        </div>
      </div>
      <div className="author-list">
        <span id="serif">Popular authors</span>
        <AuthorDpCluster />
      </div>
    </div>
  );
};

const QuoteCard = ({ index, ex, max, hide, tag, body, dp, author }) => {
  return (
    <div
      className={`quote-card ${hide ? "hide" : ""}`}
      id={ex ? "ex" : ""}
      style={{
        "--z": index,
        "--rotate": `${index === max - 1 ? 0 : index <= max - 3 ? 8 : 4}deg`,
      }}
    >
      <div className="quote-card-tag">{tag}</div>
      <div className="quote-card-body">
        <div className="quote-card-body-text">{body}</div>
      </div>
      <div className="quote-card-header">
        <div className="quote-card-dp">
          <img src={dp} alt={author} />
        </div>
        <div className="quote-card-body-author">{author}</div>
      </div>
    </div>
  );
};

const Quotes = () => {
  const [config, setConfig] = useState({
    length: 3,
  });
  const [current, setCurrent] = useState(null);

  function setupTweakpane() {
    const pane = new Tweakpane.Pane({ title: "Config", expanded: true });
    pane
      .addInput(config, "length", { label: "Length", step: 1, min: 3, max: 10 })
      .on("change", ({ value }) => {
        setConfig((prevConfig) => ({ ...prevConfig, length: value }));
      });
  }

  useEffect(() => {
    setupTweakpane();
  }, []);

  useEffect(() => {
    setCurrent(0);
  }, [config.length]);

  return (
    <div className="quotes">
      {/* <h2>Quotes {config.length}</h2> */}
      <div className="quote">
        {quotes.slice(0, config.length).map((quote, i) => {
          let index = (current + config.length - i - 1) % config.length;

          return (
            <QuoteCard
              key={i}
              {...quote}
              index={index}
              max={config.length}
              ex={current && !index}
              hide={index < config.length - 3}
            />
          );
        })}
      </div>
      <button onClick={() => setCurrent((prev) => prev + 1)}>
        <span>Next</span>
        <ArrowIcon />
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Body />
      <Quotes />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(<App />);
