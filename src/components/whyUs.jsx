function WhyUs() {
  return (
    <>
      <div className="whyuscont">
        <div className="whyUsTitle">چرا ما را انتخاب کنید؟</div>
        <div className="Box">
          <img src="insurance.png" alt="" className="imagesvg" />
          <div className="WhyUsTitle">تضمین کیفیت خدمات</div>
          <div className="whyUsDesc">
            تمامی پروژه‌ها و خدمات ما با بالاترین استانداردهای عملی و علمی تضمین
            می‌شوند.
          </div>
        </div>
        <div className="Box" id="fisrtbox">
          <img src="activity.svg" alt="" className="imagesvg" id="secondcolor"/>
          <div className="WhyUsTitle">توسعه و نوآوری</div>
          <div className="whyUsDesc">
            ما از جدیدترین روش‌های نوین و عملیاتی استفاده می‌کنیم تا جایگاه
            اطمینان شما را تثبیت کنیم.
          </div>
        </div>
        <div className="Box" id="secondbox">
          <img src="flask-conical.svg" alt="" className="imagesvg" id="thirdcolor"/>
          <div className="WhyUsTitle">آزمایشگاه و مواد اولیه</div>
          <div className="whyUsDesc">
            تیم متخصص ما با دسترسی به مواد اولیه مرغوب، در خدمت رسانی به شما
            آماده است.
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyUs;
