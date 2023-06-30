import "./Parallax.css"

function Parallax({para, index}) {
  return (
    <div className={`parallax para-${index}`}>
      <div className="para-title">
        <h3 className="title-text">{para.title}</h3>
      </div>
    </div>
  );
}

export default Parallax;
