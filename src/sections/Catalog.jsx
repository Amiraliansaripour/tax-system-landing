import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { page1, page2, page3, page4, page5 } from "../assets/images";

const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover" ref={ref} data-density="hard" >
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));

const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">
      <h2 className="page-header text-white">
        کاتالوگ نرم افزار - {props.number}
      </h2>
      <div className="page-image"></div>
      <div className="page-text">{props.children}</div>
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
));

const Catalog = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [clicked, setClicked] = useState(false)
  const flipBookRef = useRef(null);

  const nextButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  useEffect(() => {
    if (flipBookRef.current && flipBookRef.current.pageFlip) {
      const pageFlipInstance = flipBookRef.current.pageFlip();
      if (pageFlipInstance) {
        setTotalPage(pageFlipInstance.getPageCount());
      } else {
        console.error("pageFlip instance is undefined");
      }
    } else {
      console.error("flipBookRef.current or pageFlip is undefined");
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-[25%] left-[50%] w-[400px] h-[400px] rounded-full bg-[#ebe70b33] border-2 border-coral-red blur-3xl"></div>
      <div className="flex items-center max-md:hidden  w-4/12 h-full"></div>

      <div className="flex items-center justify-start max-lg::justify-center max-lg:w-full w-8/12">
        <HTMLFlipBook
          width={350}
          height={553}
          size="stretch"
          minWidth={315}
          maxWidth={950}
          minHeight={400}
          maxHeight={600}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          className="demo-book"
         
          ref={flipBookRef}
        >
          <PageCover>
            <div className="w-full h-full">
              <img className="w-full h-full" src={page1} alt="" />
            </div>
          </PageCover>
          <Page number={1}>
            <div className="w-full h-full">
              <img className="w-full h-full" src={page2} alt="" />
            </div>
          </Page>
          <Page number={2}>
            <div className="w-full h-full">
              <img className="w-full h-full" src={page3} alt="" />
            </div>
          </Page>
          <Page number={4}>
            <div className="w-full h-full">
              <img className="w-full h-full" src={page5} alt="" />
            </div>
          </Page>

          {/* ... other pages ... */}
          <PageCover>
            <div className="w-full h-full">
              <img className="w-full h-full" src={page4} alt="" />
            </div>
          </PageCover>
        </HTMLFlipBook>
      </div>

      {/* <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          [<span>{page}</span> of <span>{totalPage}</span>]
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Catalog;
