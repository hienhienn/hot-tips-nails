import Service from "../Service";

function Menu({ name, detail }) {
  return (
    <div className="Menu px-[15px] flex-1">
      <div className="title-text text-[42px] text-left mb-[20px]">{name}</div>
      <div>
        {detail.map((ele, index) => (
          <Service ele={ele} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Menu;
