import React, { useState } from "react";
import "./App.css";
import initial from "./assets/initial.png";
import bg1 from "./assets/1.png";
import bg2 from "./assets/2.png";
import bg3 from "./assets/3.png";
import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";
import p1d1 from "./assets/p1d1.jpg";
import p1d2 from "./assets/p1d2.jpg";
import p1d3 from "./assets/p1d3.jpg";
import p2d1 from "./assets/p2d1.jpg";
import p2d2 from "./assets/p2d2.jpg";
import p2d3 from "./assets/p2d3.jpg";
import p3d1 from "./assets/p3d1.jpg";
import p3d2 from "./assets/p3d2.jpg";
import p3d3 from "./assets/p3d3.jpg";
import p1des1 from "./assets/p1des1.png";
import p1des2 from "./assets/p1des2.png";
import p2des1 from "./assets/p2des1.png";
import p2des2 from "./assets/p2des2.png";
import p3des1 from "./assets/p3des1.png";
import p3des2 from "./assets/p3des2.png";
import woodland from "./assets/woodland.png";
import desert from "./assets/desert.png";
import urban from "./assets/urban.png";
import p1w from "./assets/p1w.png";
import p1desert from "./assets/p1desert.png";
import p1u from "./assets/p1u.png";
import p2w from "./assets/p2w.png";
import p2desert from "./assets/p2desert.png";
import p2u from "./assets/p2u.png";
import p3w from "./assets/p3w.png";
import p3desert from "./assets/p3desert.png";
import p3u from "./assets/p3u.png";
import p1des1Bl from "./assets/p1des1Bl.png";
import p1des1De from "./assets/p1des1De.png";
import p1des1Ur from "./assets/p1des1Ur.png";
import { Animated } from "react-animated-css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export default function App() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [showP3, setShowP3] = useState(false);
  const [p1_des1, setP1_Des1] = useState(false);
  const [p1_des2, setP1_Des2] = useState(false);
  const [p2_des1, setP2_Des1] = useState(false);
  const [p2_des2, setP2_Des2] = useState(false);
  const [p3_des1, setP3_Des1] = useState(false);
  const [p3_des2, setP3_Des2] = useState(false);
  const [penType1, setPenType1] = useState(false);
  const [penType2, setPenType2] = useState(false);
  const [penType3, setPenType3] = useState(false);
  const [woodP1, setWoodP1] = useState(false);
  const [p1des1wood, setP1des1wood] = useState(false);
  const [p1des1woodStatus, setP1des1woodStatus] = useState(false);
  const [p2des2woodStatus, setP2des2woodStatus] = useState(false);
  const [p2des2desertStatus, setP2des2desertStatus] = useState(false);
  const [p2des2urbanStatus, setP2des2urbanStatus] = useState(false);
  const [p3des3woodStatus, setP3des3woodStatus] = useState(false);

  const [p1des1desertStatus, setP1des1desertStatus] = useState(false);
  const [p1des1urbanStatus, setP1des1urbanStatus] = useState(false);

  const [woodP2, setWoodP2] = useState(false);
  const [woodP3, setWoodP3] = useState(false);
  const [desertP1, setDesertP1] = useState(false);
  const [desertP2, setDesertP2] = useState(false);
  const [desertP3, setDesertP3] = useState(false);

  const [urbanP1, setUrbanP1] = useState(false);
  const [urbanP2, setUrbanP2] = useState(false);
  const [urbanP3, setUrbanP3] = useState(false);

  const setpen1 = () => {
    // setShow1(!show1);
    setPenType1(true);
    setShow2(true);
    setP1des1woodStatus(false);
    setP2des2woodStatus(false);
    setP1des1desertStatus(false);
    setP3des3woodStatus(false);
    
    setShow1(false);
    setShow3(false);
    setShow4(false);
    setPenType2(false);
    setPenType3(false);
  };

  const setpen1des = () => {
    // setShow1(!show1);
    setPenType1(true);
    setShow2(true);
    setP1des1woodStatus(false);
    setP2des2woodStatus(true);
    setP3des3woodStatus(false);

    setShow1(false);
    setShow3(false);
    setShow4(false);
    setPenType2(false);
    setPenType3(false);
  };
  const setpen2 = () => {
    setPenType2(true);
    setP1des1woodStatus(false);

    setShow3(true);
    setShow1(false);
    setShow2(false);
    setShow4(false);
    setPenType1(false);
    setPenType3(false);
  };
  const setpen3 = () => {
    setPenType3(true);
    setP1des1woodStatus(false);
    setShow4(true);
    setShow3(false);
    setShow2(false);
    setShow1(false);
    setPenType1(false);
    setPenType2(false);
  };
  const startOver = () => {
    setShow1(true);
    setShow4(false);
    setShow3(false);
    setShow2(false);
  };

  const setdes1 = () => {
    setPenType1(true);
    setP1_Des1(true);
    setP1des1woodStatus(true);
    setP2des2woodStatus(false);
    setP3des3woodStatus(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setdes2 = () => {
    setP1_Des2(true);
    setP1_Des1(false);
    setP1des1woodStatus(false);
    setP2des2woodStatus(false);
    setP3des3woodStatus(true);

    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setp2des1 = () => {
    setP2_Des1(true);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setp2des2 = () => {
    setP2_Des2(true);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setp3des1 = () => {
    setP3_Des1(true);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setp3des2 = () => {
    setP3_Des2(true);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP1wood = () => {
    setWoodP1(true);
    setPenType1(true);
    setP1_Des1(true);
    setDesertP1(false);
    setUrbanP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP1des1Wood = () => {
    setP1des1wood(false);
    setP1des1woodStatus(true);
    setP1des1urbanStatus(false);
    setP1des1desertStatus(false);
    setP2des2woodStatus(false);
    setP2des2desertStatus(false);
    setP2des2urbanStatus(false);

    setPenType1(true);
    setP1_Des1(false);
    // setPenType1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP1des1Desert = () => {
    setP1des1wood(false);
    setP1des1woodStatus(true);
    setP1des1desertStatus(true);
    setP1des1urbanStatus(false);
    setP2des2woodStatus(false);
    setP2des2desertStatus(false);
    setP2des2urbanStatus(false);
    setPenType1(true);
    setP1_Des1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP2des2Wood = () => {
    setP1des1wood(false);
    setP1des1woodStatus(false);
    setP1des1desertStatus(false);
    setP2des2woodStatus(true);
    setP1des1urbanStatus(false);
    setP2des2desertStatus(false);
    setP2des2urbanStatus(false);

    setPenType1(true);
    setP1_Des1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP2des2Desert = () => {
    setP1des1wood(false);
    setP1des1woodStatus(false);
    setP1des1desertStatus(false);
    setP2des2woodStatus(false);
    setP2des2desertStatus(true);
    setP1des1urbanStatus(false);
    setP2des2urbanStatus(false);

    setPenType1(true);
    setP1_Des1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP2des2Urabn = () => {
    setP1des1wood(false);
    setP1des1woodStatus(false);
    setP1des1desertStatus(false);
    setP2des2woodStatus(false);
    setP2des2desertStatus(false);
    setP2des2urbanStatus(true);
    setP1des1urbanStatus(false);
    setPenType1(true);
    setP1_Des1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setP1des1Urabn = () => {
    setP1des1wood(false);
    setP1des1woodStatus(true);
    setP1des1desertStatus(false);
    setP1des1urbanStatus(true);
    setPenType1(true);
    setP1_Des1(false);
    setWoodP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setP2wood = () => {
    setWoodP2(true);
    setWoodP1(false);
    setDesertP1(false);
    setUrbanP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP3wood = () => {
    setWoodP3(true);
    setWoodP2(false);
    setWoodP1(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setUrbanP1(false);
    setUrbanP2(false);
    setUrbanP3(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setP1Desert = () => {
    setDesertP1(true);
    setDesertP2(false);
    setWoodP1(false);
    setWoodP2(false);
    setUrbanP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP2Desert = () => {
    setDesertP2(true);
    setDesertP1(false);
    setWoodP2(false);
    setWoodP1(false);
    setUrbanP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP3Desert = () => {
    setDesertP3(true);
    setDesertP2(false);
    setDesertP1(false);
    setWoodP2(false);
    setWoodP3(false);
    setWoodP1(false);
    setUrbanP1(false);
    setUrbanP3(false);
    setUrbanP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  const setP1Urabn = () => {
    setUrbanP1(true);
    setDesertP1(false);
    setDesertP2(false);
    setWoodP2(false);
    setUrbanP2(false);
    setWoodP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP2Urabn = () => {
    setUrbanP2(true);
    setUrbanP1(false);
    setDesertP1(false);
    setDesertP2(false);
    setWoodP2(false);
    setWoodP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };

  const setP3Urabn = () => {
    setUrbanP3(true);
    setUrbanP2(false);
    setUrbanP1(false);
    setDesertP1(false);
    setDesertP2(false);
    setDesertP3(false);
    setWoodP3(false);
    setWoodP2(false);
    setWoodP1(false);
    setP3_Des2(false);
    setP3_Des1(false);
    setP2_Des2(false);
    setP2_Des1(false);
    setP1_Des2(false);
    setP1_Des1(false);
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(false);
    setShowP1(false);
  };
  return (
    <div>
      <div className="testClass">
        <div className="mt-3">
          <h3>Pen Design Studio</h3>
        </div>
        <div className="parentDiv">
          {show1 && !show2 && <img src={initial} />}
          {show2 && !show3 && <img src={bg1} />}
          {show3 && !show2 && !show1 && <img src={bg2} />}
          {show4 && !show3 && !show2 && !show1 && <img src={bg3} />}
          {p1_des1 && !show4 && !show3 && !show2 && !show1 && (
            <img src={p1des1} />
          )}
          {p1_des2 && !p1_des1 && !show4 && !show3 && !show2 && !show1 && (
            <img src={p1des2} />
          )}
          {p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p2des1} />}
          {p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p2des2} />}
          {p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p3des1} />}
          {p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p3des2} />}
          {woodP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1w} />}
          {desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1desert} />}
          {urbanP1 &&
            !desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1u} />}
          {woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p2w} />}
          {desertP2 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p2desert} />}
          {urbanP2 &&
            !desertP2 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p2u} />}
          {woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p3w} />}
          {desertP3 &&
            !woodP3 &&
            !woodP3 &&
            !desertP2 &&
            !woodP2 &&
            !woodP3 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p3desert} />}
          {urbanP3 &&
            !urbanP2 &&
            !urbanP1 &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p3u} />}
          {p1des1woodStatus &&
            !p1des1desertStatus &&
            !p1des1urbanStatus &&
            !p2des2woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1des1Bl} />}
          {p1des1desertStatus &&
            !p1des1urbanStatus &&
            !p2des2woodStatus &&
            // !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1des1De} />}
          {p1des1urbanStatus &&
            !p1des1desertStatus &&
            !p2des2woodStatus &&
            // !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1des1Ur} />}
          {p2des2woodStatus &&
            !p1des1desertStatus &&
            !p2des2woodStatus &&
            // !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1des1Ur} />}
          {p2des2woodStatus &&
            !p1des1desertStatus &&
            !p1des1urbanStatus &&
            !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1w} />}
          {p2des2desertStatus &&
            !p1des1desertStatus &&
            !p1des1urbanStatus &&
            !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1desert} />}
          {p2des2urbanStatus &&
            !p1des1desertStatus &&
            !p1des1urbanStatus &&
            !p1des1woodStatus &&
            !woodP3 &&
            !woodP2 &&
            !woodP1 &&
            !urbanP1 &&
            !urbanP2 &&
            !urbanP3 &&
            !desertP1 &&
            !desertP2 &&
            !desertP3 &&
            !p3_des2 &&
            !p3_des1 &&
            !p2_des2 &&
            !p2_des1 &&
            !p1_des2 &&
            !p1_des1 &&
            !show4 &&
            !show3 &&
            !show2 &&
            !show1 && <img src={p1u} />}
        </div>
        <div style={{ paddingTop: 20 }}>
          <button style={{ padding: 10, fontSize: 16 }} onClick={startOver}>
            Start over
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab
            eventKey="home"
            title={
              <div>
                <h6 className="tabHead" style={{ textAlign: "start" }}>
                  Step 1
                </h6>
                <h5 className="tabHead" style={{ textAlign: "start" }}>
                  Choose Pen Type
                </h5>
              </div>
            }
          >
            <div className="d-flex">
              <div className="imgCard" onClick={setpen1}>
                <img src={c1} />
                <h6 className="text-center mt-3">Bolt Action Pen Kits</h6>
              </div>

              <div className="imgCard" onClick={setpen2}>
                <img src={c2} />
                <h6 className="text-center mt-3"> Steampunk Pen Kits</h6>
              </div>
              <div className="imgCard" onClick={setpen3}>
                <img src={c3} />
                <h6 className="text-center mt-3"> Dog Pen Kits</h6>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="longer-tab"
            title={
              <div>
                <h6 className="tabHead" style={{ textAlign: "start" }}>
                  Step 2
                </h6>
                <h5 className="tabHead" style={{ textAlign: "start" }}>
                  Choose Style & Finish
                </h5>
              </div>
            }
          >
            {penType1 && (
              <div className="d-flex">
                <div className="imgCard2" onClick={setdes1}>
                  <img src={p1d1} />
                  <h6 className="text-center mt-3">
                    30 Caliber Bolt Action Gun Metal Bullet Cartridge Pen Kit
                  </h6>
                </div>

                <div className="imgCard2" onClick={setpen1des}>
                  <img src={p1d2} />
                  <h6 className="text-center mt-3">
                    {" "}
                    30 Caliber Bolt Action Gold Bullet Cartridge Pen Kit
                  </h6>
                </div>
                <div className="imgCard2" onClick={setdes2}>
                  <img src={p1d3} />
                  <h6 className="text-center mt-3">
                    {" "}
                    30 Caliber Bolt Action Chrome Bullet Cartridge Pen Kit
                  </h6>
                </div>
              </div>
            )}
            {penType2 && (
              <div className="d-flex">
                <div className="imgCard2" onClick={setpen2}>
                  <img src={p2d1} />
                  <h6 className="text-center mt-3">
                    Steampunk Bolt Action Antique Brass and Antique Copper Pen
                    Kit
                  </h6>
                </div>

                <div className="imgCard2" onClick={setp2des1}>
                  <img src={p2d2} />
                  <h6 className="text-center mt-3">
                    {" "}
                    Steampunk Bolt Action Antique Pewter and Antique Copper Pen
                    Kit
                  </h6>
                </div>
                <div className="imgCard2" onClick={setp2des2}>
                  <img src={p2d3} />
                  <h6 className="text-center mt-3">
                    {" "}
                    Steampump Pen Kit in Oil Rubbed Bronze and Antique Brass
                  </h6>
                </div>
              </div>
            )}
            {penType3 && (
              <div className="d-flex">
                <div className="imgCard2" onClick={setpen3}>
                  <img src={p3d1} />
                  <h6 className="text-center mt-3">Dog Chrome Click Pen Kit</h6>
                </div>

                <div className="imgCard2" onClick={setp3des1}>
                  <img src={p3d2} />
                  <h6 className="text-center mt-3">
                    {" "}
                    Dog 24kt Gold Click Pen Kit
                  </h6>
                </div>
                <div className="imgCard2" onClick={setp3des2}>
                  <img src={p3d3} />
                  <h6 className="text-center mt-3">
                    {" "}
                    Dog Antique Pewter Click Pen Kit
                  </h6>
                </div>
              </div>
            )}
          </Tab>
          <Tab
            eventKey="profile"
            title={
              <div>
                <h6 className="tabHead" style={{ textAlign: "start" }}>
                  Step 3
                </h6>
                <h5 className="tabHead" style={{ textAlign: "start" }}>
                  Choose Blank
                </h5>
              </div>
            }
          >
            {penType1 &&
              !p1des1woodStatus &&
              !p1des1desertStatus &&
              !p2des2woodStatus &&
              !p3des3woodStatus && (
                // !p1_des1 &&
                // !p2_des1 &&
                // !p2_des2 &&
                // !p3_des1 &&
                // !p3_des2 &&
                <div className="d-flex">
                  <div className="imgCard" onClick={setP1wood}>
                    <img src={woodland} />
                    <h6 className="text-center mt-3">Woodland</h6>
                  </div>

                  <div className="imgCard" onClick={setP1Desert}>
                    <img src={desert} />
                    <h6 className="text-center mt-3"> Desert</h6>
                  </div>
                  <div className="imgCard" onClick={setP1Urabn}>
                    <img src={urban} />
                    <h6 className="text-center mt-3"> Urban</h6>
                  </div>
                </div>
              )}
            {p1des1woodStatus &&
              !p2des2woodStatus &&
              !show1 &&
              !show2 &&
              !show3 && (
                // && !penType2 && !penType3 &&
                //  && p1des1woodStatus
                <div className="d-flex">
                  <div className="imgCard" onClick={setP1des1Wood}>
                    <img src={woodland} />
                    <h6 className="text-center mt-3">Woodland</h6>
                  </div>

                  <div className="imgCard" onClick={setP1des1Desert}>
                    <img src={desert} />
                    <h6 className="text-center mt-3"> Desert</h6>
                  </div>
                  <div className="imgCard" onClick={setP1des1Urabn}>
                    <img src={urban} />
                    <h6 className="text-center mt-3">Urban</h6>
                  </div>
                </div>
              )}
            {p2des2woodStatus && !p1des1woodStatus && !show1 && !show3 && (
              // && !penType2 && !penType3 &&
              //  && p1des1woodStatus
              <div className="d-flex">
                <div className="imgCard" onClick={setP2des2Wood}>
                  <img src={woodland} />
                  <h6 className="text-center mt-3">Woodland</h6>
                </div>

                <div className="imgCard" onClick={setP2des2Desert}>
                  <img src={desert} />
                  <h6 className="text-center mt-3"> Desert</h6>
                </div>
                <div className="imgCard" onClick={setP2des2Urabn}>
                  <img src={urban} />
                  <h6 className="text-center mt-3"> Urban</h6>
                </div>
              </div>
            )}

            {penType2 && (
              <div className="d-flex">
                <div className="imgCard" onClick={setP2wood}>
                  <img src={woodland} />
                  <h6 className="text-center mt-3">Woodland</h6>
                </div>

                <div className="imgCard" onClick={setP2Desert}>
                  <img src={desert} />
                  <h6 className="text-center mt-3"> Desert</h6>
                </div>
                <div className="imgCard" onClick={setP2Urabn}>
                  <img src={urban} />
                  <h6 className="text-center mt-3"> Urban</h6>
                </div>
              </div>
            )}
            {penType3 && (
              <div className="d-flex">
                <div className="imgCard" onClick={setP3wood}>
                  <img src={woodland} />
                  <h6 className="text-center mt-3">Woodland</h6>
                </div>

                <div className="imgCard" onClick={setP3Desert}>
                  <img src={desert} />
                  <h6 className="text-center mt-3"> Desert</h6>
                </div>
                <div className="imgCard" onClick={setP3Urabn}>
                  <img src={urban} />
                  <h6 className="text-center mt-3"> Urban</h6>
                </div>
              </div>
            )}
          </Tab>
          <Tab
            eventKey="contact"
            title={
              <div>
                <h6 className="tabHead" style={{ textAlign: "start" }}>
                  Step 4
                </h6>
                <h5 className="tabHead" style={{ textAlign: "start" }}>
                  Choose Quantities
                </h5>
              </div>
            }
            disabled
          >
            <div>
              <h6>Contact</h6>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
