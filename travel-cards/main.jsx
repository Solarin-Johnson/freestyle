const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

const DATA_LIST = [
  {
    name: "Santorini",
    country: "Greece",
    image: "Oia,_Santorini_HDR_sunset.webp",
    description:
      "Known for stunning sunsets, white houses, and waters, Santorini is a destination for romance and relaxation.",
    tags: [
      "beaches",
      "sunset",
      "romantic",
      "island",
      "architecture",
      "Mediterranean",
    ],
    bookmark: false,
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image: "Machu_Picchu,_Peru.webp",
    description:
      "A Heritage Site and Wonder of the World, Machu Picchu shows the ancient Incan civilization.",
    tags: [
      "history",
      "hiking",
      "mountains",
      "UNESCO",
      "adventure",
      "archaeology",
    ],
    bookmark: false,
  },
  {
    name: "Bells Beach",
    country: "Australia",
    image: "Bells_Beach_Australia.webp",
    description:
      "Bells Beach is renowned for powerful waves and the Rip Curl Pro competition.",
    tags: ["beach", "surfing", "waves", "cliffs", "Australia", "outdoors"],
    bookmark: false,
  },
];

const IMAGE_ROOT = "";

function Card({ name, country, image, description, tags, bookmark }) {
  return (
    <div className="card">
      <div className="image">
        <img src={`${IMAGE_ROOT}${image}`} alt={name} />
      </div>
      <div className="card-body">
        <h2>
          <div>
            {name}
            <span>{country}</span>
          </div>
          <button className={bookmark ? "Bookmarked" : "Bookmark"}>
            <i data-lucide="plus" />
          </button>
        </h2>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

const BgImage = ({ top, under }) => {
  return (
    <div className="bg-image" key={top}>
      <img src={`${IMAGE_ROOT}${top}`} alt="" className="top" />
      <img src={`${IMAGE_ROOT}${under}`} alt="" className="under" />
    </div>
  );
};

const IndicatorDots = ({ total, currentIndex, setIndex = () => {} }) => {
  return (
    <div className="indicator-dots">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={index === currentIndex ? "active" : ""}
          onClick={() => setIndex(index)}
        ></span>
      ))}
    </div>
  );
};

const CardContainer = ({ data }) => {
  const cardContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPeekaboo, setIsPeekaboo] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [images, setImages] = useState({
    current: data[0].image,
    prev: null,
  });

  const updateImages = (index) => {
    setImages({
      current: data[index].image,
      prev: data[currentIndex].image,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!cardContainerRef.current) return;
      const { scrollTop, clientHeight } = cardContainerRef.current;
      const newIndex = Math.round(scrollTop / clientHeight);
      if (newIndex !== currentIndex && !isJumping) {
        setCurrentIndex(newIndex);
        updateImages(newIndex);
      }
    };

    const container = cardContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [currentIndex, isJumping, data]);

  const scrollToIndex = (index) => {
    if (!cardContainerRef.current) return;
    setIsJumping(true);
    const targetScroll = index * cardContainerRef.current.clientHeight;
    cardContainerRef.current.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
    setCurrentIndex(index);
    updateImages(index);

    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  return (
    <>
      <BgImage top={images.current} under={images.prev} />
      <div className="content">
        <button onClick={() => setIsPeekaboo(!isPeekaboo)}>
          <i data-lucide="maximize-2" />
          <i data-lucide="minimize" />
        </button>
        <div
          className={`card-container ${isPeekaboo ? "peekaboo" : "normal"}`}
          ref={cardContainerRef}
        >
          {data.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </div>
        <IndicatorDots
          total={data.length}
          currentIndex={currentIndex}
          setIndex={scrollToIndex}
        />
      </div>
    </>
  );
};

function App() {
  useEffect(() => {
    lucide.createIcons();
  }, []);
  return (
    <div className="container">
      <CardContainer data={DATA_LIST} />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(<App />);
