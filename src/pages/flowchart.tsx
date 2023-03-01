import React, { useState } from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home({ data }) {
  const [
    currentFlowChartEvent,
    setCurrentFlowChartEvent,
  ] = useState<flowChartEvent>(rootFlowChartEvent)

  const [historyStack, setHistoryStack] = useState<flowChartEvent[]>([])

  const onSetCurrentFlowChartEvent = (event: flowChartEvent) => {
    setCurrentFlowChartEvent(event)
  }

  return (
    <Layout>
      <FlowChartPage
        prompt={currentFlowChartEvent.prompt}
        destinationArray={currentFlowChartEvent.destinationArray}
        setCurrentFlowChartEvent={onSetCurrentFlowChartEvent}
        historyStack={historyStack}
        setHistoryStack={setHistoryStack}
        currentFlowChartEvent={currentFlowChartEvent}
      />
    </Layout>
  )
}

interface destinationObject {
  label: string
  destination: flowChartEvent
}

class flowChartEvent {
  prompt = ""
  destinationArray: destinationObject[] = []

  constructor(prompt: string, destinationArray: destinationObject[]) {
    this.prompt = prompt
    this.destinationArray = destinationArray
  }
}

const blankPageYes = new flowChartEvent("blank page, yes", [])
const blankPageNo = new flowChartEvent("blank page, no", [])

const rootFlowChartEvent = new flowChartEvent("initial Page prompt", [
  { label: "yes, xyz", destination: blankPageYes },
  { label: "no, xyz", destination: blankPageNo },
])

interface FlowChartPageInterface {
  prompt: string
  destinationArray: destinationObject[]
  currentFlowChartEvent: flowChartEvent
  setCurrentFlowChartEvent: (flowChartEvent: flowChartEvent) => any
  historyStack: flowChartEvent[]
  setHistoryStack: any
}

function FlowChartPage(props: FlowChartPageInterface) {
  return (
    <div>
      <div>{props.prompt}</div>
      {props.destinationArray.map(destinationObject => {
        return (
          <div
            onClick={() => {
              props.setCurrentFlowChartEvent(destinationObject.destination)
              props.setHistoryStack(prevState => [
                ...prevState,
                props.currentFlowChartEvent,
              ])
            }}
          >
            {destinationObject.label}
          </div>
        )
      })}
      {props.historyStack.length > 0 && (
        <div
          onClick={() =>
            props.setHistoryStack(prevState => {
              const previousEvent = prevState.pop()
              props.setCurrentFlowChartEvent(previousEvent)
              return prevState
            })
          }
        >
          back
        </div>
      )}
    </div>
  )
}
