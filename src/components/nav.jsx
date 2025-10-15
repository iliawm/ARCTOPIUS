function Nav() {
  return (
    <>
      <div className="NavCont">
        <div className="Nav">
          <div className="wraparound">
            <p className="logoText">ARCTOPIUS</p>
            <div className="logo"></div>
          </div>
          <div className="navbtns" id="one"></div>
          <div className="navbtns" id="two"></div>
          <div className="navbtns" id="three"></div>
          <div className="navbtns" id="four"></div>

          <div className="navbtns" id="ten">
            <div
              className="CreatAccount"
              onClick={() => {
                document.querySelector(".hamsvg").classList.toggle("open");
                document.querySelector(".popuphammenu").classList.toggle("open")
                document.querySelector(".backdrop").classList.toggle("open")

              }}
            >
              <img src="hamburger-menu.svg" alt="" className="hamsvg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
