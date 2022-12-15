import React, { useState } from "react";
import "./styles.scss";

export default function Navbar() {
  const [selectedPage, setSelectedPage] = useState("dataland");
  return (
    <div className="navbar">
      <div className="container">
        <button
          onClick={() => {
            setSelectedPage("dataland");
          }}
          className={selectedPage === "dataland" ? "bright" : "dark"}
        >
          <span className="item-en">DATALAND</span>
          {"   "}
          <span className="item-ar">داتالاند</span>
        </button>
        <button
          onClick={() => {
            setSelectedPage("about");
          }}
          className={selectedPage === "about" ? "bright" : "dark"}
        >
          <span className="item-en">ABOUT</span>
          {"   "}
          <span className="item-ar">عن المشروع</span>
        </button>
        <button
          onClick={() => {
            setSelectedPage("building_inventory");
          }}
          className={selectedPage === "building_inventory" ? "bright" : "dark"}
        >
          <span className="item-en">BUILDING INVENTORY</span>
          {"   "}
          <span className="item-ar">قائمة المباني</span>
        </button>
        <button
          onClick={() => {
            setSelectedPage("precedents_inventory");
          }}
          className={
            selectedPage === "precedents_inventory" ? "bright" : "dark"
          }
        >
          <span className="item-en">PRECEDENTS INVENTORY</span>
          {"   "}
          <span className="item-ar">قائمة المجلات</span>
        </button>
        <button
          onClick={() => {
            setSelectedPage("merchandise");
          }}
          className={selectedPage === "merchandise" ? "bright" : "dark"}
        >
          <span className="item-en">MERCHANDISE</span>
          {"   "}
          <span className="item-ar">داتالاند</span>
        </button>
        <button
          onClick={() => {
            setSelectedPage("login");
          }}
          className={selectedPage === "login" ? "bright" : "dark"}
        >
          <span className="item-en">LOGIN</span>
          {"   "}
          <span className="item-ar">تسجيل الدخول</span>
        </button>
      </div>
    </div>
  );
}
