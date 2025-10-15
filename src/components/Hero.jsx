import { useEffect } from "react";

function Hero() {
    
    useEffect(()=>{

        
    },[])
  return (
    <>
    <div className="popuphammenu">
        <div className="closebuttonHam" onClick={()=>{
            document.querySelector(".hamsvg").classList.toggle("open");
                document.querySelector(".popuphammenu").classList.toggle("open")
                document.querySelector(".backdrop").classList.toggle("open")
        }}>
        x
        </div>
        <div className="buttonOfHam">
        <div className="buttonServ">صفحه اصلی</div>
        <div className="buttonServ">مشتریان</div>
        <div className="buttonServ">خدمات</div>
        <div className="buttonServ">درباره ما</div>
        <div className="buttonServ">وبلاگ</div>
        <div className="buttonServ">تخصص‌ها</div>

        </div>
    </div>
      <div className="Herocont">
        <div className="HeroSec">
          <img src="Hero.jpg" alt="" className="HeroIMg" />
          <div className="onHero">
            <p className="titleOfHero">
                ارائه راهکارهای هوشمند و تخصصی برای صنایع پیشرفته
            </p>
            <p className="descOfHero">در قله‌ی علم و فناوری، ما با تلاش مستمر، نیازهای آموزشی و پژوهشی شما را برطرف می‌کنیم.</p>
            <div className="btnJoin">
                    شروع همکاری
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
