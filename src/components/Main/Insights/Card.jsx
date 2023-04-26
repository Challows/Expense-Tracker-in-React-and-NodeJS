import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { dummyData } from "../../../Data/Data";

const Card = (props) => {

    const [expanded, setExpanded] = React.useState(false)

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  )
}

function CompactCard({param, setExpanded}) {
    const Png = param.png;
    return (
        <motion.div
          className="CompactCard"
          style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
          }}
          layoutId="expandableCard"
          onClick={setExpanded}
        >
          <div className="radialBar">
            <CircularProgressbar
              value={param.barValue}
              text={`${param.barValue}%`}
            />
            <span>{param.title}</span>
          </div>
          <div className="detail">
            <Png />
            <span>Ksh. {param.value}</span>
            <span>This month</span>
          </div>
        </motion.div>
      );
}

function ExpandedCard({param, setExpanded}) {
    return (
        <motion.div
          className="ExpandedCard"
          style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
          }}
          layoutId="expandableCard"
        >
          <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
            <UilTimes onClick={setExpanded} />
          </div>
            <span>{param.title}</span>
          <div className="chartContainer">
            <Chart options={dummyData.options} series={param.series} type="area" />
          </div>
          <span>This month</span>
        </motion.div>
      );
}

export default Card