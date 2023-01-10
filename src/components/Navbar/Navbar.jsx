import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #bdc1be;
`;

const NavBarItemEn = styled.span`
  font-family: TWK Lausanne;
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
`;

const NavBarItemAr = styled.span`
  font-family: ABC Favorit Arabic;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;

export default function Navbar() {
  const [selectedPage, setSelectedPage] = useState("dataland");
  return (
    <NavbarContainer>
      <Button
        onClick={() => {
          setSelectedPage("dataland");
        }}
        style={{
          color: selectedPage === "dataland" ? "white" : "black",
        }}
      >
        <NavBarItemEn>DATALAND</NavBarItemEn>
        {"   "}
        <NavBarItemAr>داتالاند</NavBarItemAr>
      </Button>
      <Button
        onClick={() => {
          setSelectedPage("about");
        }}
        style={{
          color: selectedPage === "about" ? "white" : "black",
        }}
      >
        <NavBarItemEn>ABOUT</NavBarItemEn>
        {"   "}
        <NavBarItemAr>عن المشروع</NavBarItemAr>
      </Button>
      <Button
        onClick={() => {
          setSelectedPage("building_inventory");
        }}
        style={{
          color: selectedPage === "building_inventory" ? "white" : "black",
        }}
      >
        <NavBarItemEn>BUILDING INVENTORY</NavBarItemEn>
        {"   "}
        <NavBarItemAr>قائمة المباني</NavBarItemAr>
      </Button>
      <Button
        onClick={() => {
          setSelectedPage("precedents_inventory");
        }}
        style={{
          color: selectedPage === "precedents_inventory" ? "white" : "black",
        }}
      >
        <NavBarItemEn>PRECEDENTS INVENTORY</NavBarItemEn>
        {"   "}
        <NavBarItemAr>قائمة المجلات</NavBarItemAr>
      </Button>
      <Button
        onClick={() => {
          setSelectedPage("merchandise");
        }}
        style={{
          color: selectedPage === "merchandise" ? "white" : "black",
        }}
      >
        <NavBarItemEn>MERCHANDISE</NavBarItemEn>
        {"   "}
        <NavBarItemAr>داتالاند</NavBarItemAr>
      </Button>
      <Button
        onClick={() => {
          setSelectedPage("login");
        }}
        style={{
          color: selectedPage === "login" ? "white" : "black",
        }}
      >
        <NavBarItemEn>LOGIN</NavBarItemEn>
        {"   "}
        <NavBarItemAr>تسجيل الدخول</NavBarItemAr>
      </Button>
    </NavbarContainer>
  );
}
