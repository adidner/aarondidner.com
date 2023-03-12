import React, { useState } from "react"
import {
  flowChartEvent,
  FlowChartPage,
} from "../components/flowchart/FlowChartPage"
import { rootFlowChartEvent } from "../components/flowchart/FlowChartStructure"
import Layout from "../components/Layout"
import "../styles/flowchart.scss"

export default function FlowChart({ data }) {
  const [
    currentFlowChartEvent,
    setCurrentFlowChartEvent,
  ] = useState<flowChartEvent>(rootFlowChartEvent)

  const [historyStack, setHistoryStack] = useState<flowChartEvent[]>([])

  const onSetCurrentFlowChartEvent = (event: flowChartEvent) => {
    setCurrentFlowChartEvent(event)
  }

  const resetToHomeEvent = () => {
    setHistoryStack([])
    setCurrentFlowChartEvent(rootFlowChartEvent)
  }

  return (
    <Layout>
      <div className="flowchart-center">
        <FlowChartPage
          prompt={currentFlowChartEvent.prompt}
          destinationArray={currentFlowChartEvent.destinationArray}
          setCurrentFlowChartEvent={onSetCurrentFlowChartEvent}
          historyStack={historyStack}
          setHistoryStack={setHistoryStack}
          currentFlowChartEvent={currentFlowChartEvent}
          resetToHomeEvent={resetToHomeEvent}
        />
      </div>
    </Layout>
  )
}
