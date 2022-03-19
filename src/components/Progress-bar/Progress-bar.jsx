import "./Progress-bar.css";

const Progressbar = ({ progressStyle, fillerStyle }) => {
  return (
    <div style={{ ...progressStyle }}>
      <div style={{ ...fillerStyle }} className="filler"></div>
    </div>
  );
};

export default Progressbar;
