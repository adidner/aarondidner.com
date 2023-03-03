import React from "react"

export interface destinationObject {
  label: string
  destination: flowChartEvent
}

export class flowChartEvent {
  prompt = ""
  destinationArray: destinationObject[] = []

  constructor(prompt: string, destinationArray: destinationObject[]) {
    this.prompt = prompt
    this.destinationArray = destinationArray
  }
}

interface FlowChartPageInterface {
  prompt: string
  destinationArray: destinationObject[]
  currentFlowChartEvent: flowChartEvent
  setCurrentFlowChartEvent: (flowChartEvent: flowChartEvent) => any
  historyStack: flowChartEvent[]
  setHistoryStack: any
}

export function FlowChartPage(props: FlowChartPageInterface) {
  return (
    <div className={"flowchart-page-container"}>
      <div>{props.prompt}</div>
      {props.destinationArray.map(destinationObject => {
        return (
          <div
            className={"btn"}
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
          className={"btn flowchart-back-button"}
        >
          back
        </div>
      )}
    </div>
  )
}
