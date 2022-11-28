import React from "react";
import LogoImg from "./assets/footer_logo.svg";
import IGLogo from "./assets/ig_logo.png";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <img className="logo" src={LogoImg} alt="logo" />
        </div>
        <div className="column" style={{ gap: "16px" }}>
          <a>
            <span className="link-eng">Dataland</span>
            {"  "}
            <span className="link-ar">داتالاند</span>
          </a>
          <a>
            <span className="link-eng">About</span>
            {"  "}
            <span className="link-ar">عن المشروع</span>
          </a>

          <a>
            <span className="link-eng">Buildings Inventory</span>
            {"  "}
            <span className="link-ar">قائمة المباني</span>
          </a>
          <a>
            <span className="link-eng">Precedents Inventory</span>
            {"  "}
            <span className="link-ar">قائمة المجلات</span>
          </a>
          <a>
            <span className="link-eng">SHOP</span>
            {"  "}
            <span className="link-ar">تسوق</span>
          </a>
        </div>
        <div className="column" style={{ gap: "16px" }}>
          <div className="description-eng">
            A print magazine and digital platform focusing on Cairo’s built
            environment
          </div>
          <div className="description-ar">
            مجلة مطبوعة ومنصة رقمية تركز على البيئة العمرانية في القاهرة
          </div>
          <div className="ig-container">
            <img
              className="ig-logo"
              src={IGLogo}
              alt="ig logo"
              style={{ marginRight: "10px" }}
            />
            <div className="description-eng">@datalandpublishing</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
