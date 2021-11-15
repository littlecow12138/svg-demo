import "./App.css";
import StatusCard from "./components/statusCard";

function App() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="middle"></div>
      <div className="right">
        <div className="rightHeader">
          <svg
            width="520px"
            height="50px"
            style={{ position: "absolute", marginLeft: "140px" }}
          >
            <path
              // d="M0 0 L130 50 M130 50 L520 50"
              d="M0 0 L120 50 M120 50 H 520 Z"
              stroke="#303FFF"
              strokeWidth="2px"
            />
          </svg>
          <div className="rightHeaderBanner">
            <span>晴天</span>
            <span>22℃</span>
            <span>67%</span>
          </div>
          <div className="rightTitleHeader">
            <div>
              <div className="rightTitleHeader_icons">
                <div className="rightTitleHeader_icons__one"></div>
                <div className="rightTitleHeader_icons__two"></div>
                <div className="rightTitleHeader_icons__three"></div>
              </div>
              <div className="rightTitleHeader_title">设备状态</div>
            </div>
            <div className="rightTitleHeader_divider"></div>
          </div>
          <div className="rightTitle_cardList">
            <StatusCard status={{ title: "正常", value: 45135 }} />
            <StatusCard status={{ title: "停机", value: 45135 }} />
            <StatusCard status={{ title: "离线", value: 45135 }} />
            <StatusCard status={{ title: "故障", value: 45135 }} />
          </div>
          <div className="rightTitleHeader">
            <div>
              <div className="rightTitleHeader_icons">
                <div className="rightTitleHeader_icons__one"></div>
                <div className="rightTitleHeader_icons__two"></div>
                <div className="rightTitleHeader_icons__three"></div>
              </div>
              <div className="rightTitleHeader_title">供能占比</div>
            </div>
            <div className="rightTitleHeader_divider"></div>
            <div className="radarWrapper"></div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <svg width="100%" height="100%" style={{ position: "absolute" }}>
          <path
            d="M 3840 0 Q 3100 150 2640 200 M 2640 200 L 2880 400 Z"
            stroke="#303FFF"
            strokeWidth="2"
            fill="transparent"
          ></path>
          <path
            d="M 2820 400 L 2580 210 M 2580 210 Q 2300 270 2030 250 M 2030 250 A 110 110 0 0 1 1810 250 M 1810 250 Q 1400 250 1260 210 M 1260 210 L 1020 400"
            stroke="#303FFF"
            strokeWidth="2"
            fill="transparent"
          ></path>
        </svg>
        <div className="bottom_left"></div>
        <div className="bottom_middle">
          <div className="powerIcon">
            <div className="powerIcon_icon"></div>
            <div>负载功率</div>
            <div className="powerIcon_desc">Power of Item</div>
          </div>
        </div>
        <div className="bottom_right"></div>
      </div>
    </div>
  );
}

export default App;
