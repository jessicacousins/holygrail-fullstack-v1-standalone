function PlusMinus(props) {
  function handle(e) {
    if (e.target.id.includes("minus")) {
      props.handle({ name: props.section, value: -1 });
    } else {
      props.handle({ name: props.section, value: 1 });
    }
  }

  return (
    <>
      <img
        src={`icons/${props.section}_plus.png`}
        id="plus"
        onClick={(e) => handle(e)}
        alt=""
      />
      <img
        src={`icons/${props.section}_minus.png`}
        id="minus"
        onClick={(e) => handle(e)}
        alt=""
      />
    </>
  );
}

function Data(props) {
  return (
    <div>
      Header: {props.data.header}, Left: {props.data.left}, Article:
      {props.data.article}, Right: {props.data.right}, Footer:
      {props.data.footer}
    </div>
  );
}

function App() {
  const [data, setData] = React.useState({
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0,
  });

  function handle(section) {
    console.log("Pong", section);
    const value = data[section.name] + section.value;
    const object = { [section.name]: value };
    setData({ ...data, ...object });
  }

  return (
    <div className="grid">
      <PlusMinus section="header" handle={handle} />
      <PlusMinus section="left" handle={handle} />
      <PlusMinus section="article" handle={handle} />
      <PlusMinus section="right" handle={handle} />
      <PlusMinus section="footer" handle={handle} />
      <Data data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
