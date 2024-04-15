import React from "react";

const ContactForm = () => {
  return (
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>

      <div>
        <div className="form-group">
          <label className="label">
            Họ và tên <span>*</span>
          </label>
          <input defaultValue type="text" className="form__input " />
          <p className="error">Họ và tên không được để trống</p>
        </div>
        <div className="form-group">
          <label className="label">
            Email <span>*</span>
          </label>
          <input defaultValue type="text" className="form__input" />
          <p className="error">Email không được để trống</p>
        </div>
        <div className="form-group">
          <label className="label">
            Phone <span>*</span>
          </label>
          <input defaultValue type="text" className="form__input" />
          <p className="error">Phone không được để trống</p>
        </div>
      </div>

      <div className="form-group">
        <label className="label">
          Chủ đề cần hỗ trợ <span>*</span>
        </label>
        <div className="select">
          <div className="head form__input">--</div>
          <div className="sub">
            <a href="#">Web Responsive</a>
            <a href="#">React &amp; Redux</a>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="label">
          Nội dung <span>*</span>
        </label>
        <textarea className="form__input" defaultValue={""} />
      </div>
      <div className="btncontrol">
        <button className="btn btn--primary">Gửi</button>
      </div>
    </div>
  );
};

export default ContactForm;
