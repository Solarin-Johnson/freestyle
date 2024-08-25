const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard:", text);
  } catch (err) {
    console.error("Failed to copy text:", err);
  }
};

const CardName = ({ value, className, children }) => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      setTimeout(() => {
        setCopied(false);
      }, 300);
    };

    const container = containerRef.current;

    container.addEventListener("mouseleave", handleMouseOut);

    return () => {
      container.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <label className={className}>{children ? children : value}</label>
      <div
        className="pop"
        onClick={() => {
          copyToClipboard(value);
          setCopied(true);
        }}
      >
        <div>
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
            class="lucide lucide-copy"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
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
            class="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <span>{copied ? "Copied" : "Copy"}</span>
      </div>
    </div>
  );
};

function App() {
  const [config, setConfig] = useState({
    cardNumber: "1298 3408 3248 3249",
    cardName: "Solarin Johnson",
    expireDate: "12/27",
    cvv: 123,
  });

  function setupTweakpane() {
    const pane = new Tweakpane.Pane({ title: "Config", expanded: true });
    pane
      .addInput(config, "cardNumber", { label: "Number" })
      .on("change", ({ value }) => {
        setConfig((prevConfig) => ({ ...prevConfig, cardNumber: value }));
      });
    pane
      .addInput(config, "cardName", { label: "Name" })
      .on("change", ({ value }) => {
        setConfig((prevConfig) => ({ ...prevConfig, cardName: value }));
      });
    pane
      .addInput(config, "expireDate", { label: "Date" })
      .on("change", ({ value }) => {
        const [month, year] = value.split("/");
        const formattedDate = `${month.padStart(2, "0")}/${year.slice(-2)}`;
        setConfig((prevConfig) => ({
          ...prevConfig,
          expireDate: formattedDate,
        }));
      });
    pane
      .addInput(config, "cvv", {
        label: "CVV/CVC",
        step: 1,
        min: 100,
        max: 9999,
      })
      .on("change", ({ value }) => {
        console.log("yo", value);
        setConfig((prevConfig) => ({ ...prevConfig, cvv: value }));
      });
  }

  useEffect(() => {
    setupTweakpane();
  }, []);

  return (
    <div className="card">
      <div className="card-head">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="177"
          height="255"
          fill="none"
          viewBox="0 0 177 255"
        >
          <path
            fill="rgb(var(--text-color))"
            fill-rule="evenodd"
            d="M47.72 95.408c-17.73 0-32.102 14.368-32.102 32.092 0 17.724 14.373 32.092 32.103 32.092h32.97V95.408h-32.97Zm80.692-15.612h.867c17.73 0 32.103-14.368 32.103-32.092 0-17.724-14.373-32.092-32.103-32.092h-32.97v64.184h32.103Zm27.036 7.806C168.429 79.076 177 64.391 177 47.704 177 21.358 155.635 0 129.279 0H47.721C21.365 0 0 21.358 0 47.704c0 16.687 8.57 31.372 21.552 39.898C8.57 96.128 0 110.813 0 127.5c0 16.687 8.57 31.372 21.552 39.898C8.57 175.923 0 190.609 0 207.296 0 233.697 21.636 255 47.936 255c26.54 0 48.373-21.497 48.373-48.138v-44.066c8.476 7.709 19.741 12.408 32.103 12.408h.867c26.356 0 47.721-21.358 47.721-47.704 0-16.687-8.571-31.372-21.552-39.898Zm-26.169 7.806h-.867c-17.73 0-32.103 14.368-32.103 32.092 0 17.724 14.373 32.092 32.103 32.092h.867c17.73 0 32.103-14.368 32.103-32.092 0-17.724-14.373-32.092-32.103-32.092ZM15.618 207.296c0-17.724 14.373-32.092 32.103-32.092h32.97v31.658c0 17.909-14.73 32.526-32.755 32.526-17.785 0-32.318-14.423-32.318-32.092Zm65.073-127.5h-32.97c-17.73 0-32.103-14.368-32.103-32.092 0-17.724 14.373-32.092 32.103-32.092h32.97v64.184Z"
            clip-rule="evenodd"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="42"
          fill="none"
          viewBox="0 0 67 42"
        >
          <g clip-path="url(#a)">
            <path
              fill="rgb(var(--text-color))"
              d="M47 2.1c9.926 0 18 8.478 18 18.9 0 10.422-8.074 18.9-18 18.9S29 31.422 29 21c0-10.422 8.074-18.9 18-18.9ZM47 0C35.954 0 27 9.402 27 21s8.954 21 20 21 20-9.402 20-21S58.046 0 47 0Z"
            />
            <path
              fill="rgb(var(--text-color))"
              d="M20 2.1c9.926 0 18 8.478 18 18.9 0 10.422-8.074 18.9-18 18.9S2 31.422 2 21C2 10.578 10.074 2.1 20 2.1ZM20 0C8.954 0 0 9.402 0 21s8.954 21 20 21 20-9.402 20-21S31.046 0 20 0Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="rgb(var(--fg-color))" d="M0 0h67v42H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="card-body">
        <section>
          <CardName className="card-number" value={config.cardNumber} />
          <CardName className="card-expire" value={config.expireDate} />
        </section>
        <section>
          <CardName className="card-name" value={config.cardName} />
          <CardName className="card-cvv" value={config.cvv}>
            <span data-text="•••">{config.cvv}</span>
          </CardName>
        </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(<App />);
