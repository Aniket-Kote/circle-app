import section3Data from "./section3Data";

const index = () => {
  return (
    <>

      
      <div className="sectionThree">
        <div className="section3_1">
          <div className="outerSemiCircle"> </div>
          <div className="sectionCircle">
            <div className="title4">
              Why<span className="pinchName"> pinch</span>
            </div>
            <div className="innerSemiCircle"></div>
          </div>
        </div>
        {section3Data.map((value,index)=>{
      return(
        <div key={index} className="">
        <hr className={value.lineClassName}></hr>

        <div className={value.cardClassName}>
          <div className="sectionThreeCards">
            <div className={value.numclassName}>
              <p>{value.numDisplay}</p>
            </div>
            <div className="CardInner">
              <div className="cardsTitle">{value.title}</div>
              <div className="cardText">
                {value.text}
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    })}

      </div>

    </>
  );
};

export default index;
