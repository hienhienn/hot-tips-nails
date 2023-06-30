function Intro({ intro, isJustify }) {
  if (!isJustify)
    return (
      <>
        <h2 className="title-text text-3xl text-center mb-5 max-w-[180px] mx-auto">
          {!!intro.title ? intro.title : ""}
        </h2>
        <p className="content-text text-sm text-center mb-[15px] leading-[30px] whitespace-pre-wrap">
          {!!intro.content ? intro.content : ""}
        </p>
      </>
    );
  else
    return (
      <>
        <h2 className="title-text text-3xl text-center mb-5 max-w-[180px] mx-auto">
          {!!intro.title ? intro.title : ""}
        </h2>
        <p className="content-text text-sm text-justify mb-[15px] leading-[30px] whitespace-pre-wrap">
          {!!intro.content ? intro.content : ""}
        </p>
      </>
    );
}

export default Intro;
