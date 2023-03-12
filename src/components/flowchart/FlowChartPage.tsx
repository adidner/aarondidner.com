import React from "react"
import ReactMarkdown from "react-markdown"

export interface destinationObject {
  label: string
  destination: flowCharReactMarkdowntEvent
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
  resetToHomeEvent: () => any
}

export function FlowChartPage(props: FlowChartPageInterface) {
  const hiddenWhenStackIsEmpty = (defaultClasses: string) => {
    if (props.historyStack.length > 0) {
      return defaultClasses
    } else {
      return defaultClasses + " flow-chart-hidden"
    }
  }

  return (
    <div className={"flowchart-page-container"}>
      <div className={"flowchart-nav-container"}>
        <div
          onClick={() =>
            props.setHistoryStack(prevState => {
              const previousEvent = prevState.pop()
              props.setCurrentFlowChartEvent(previousEvent)
              return prevState
            })
          }
          className={hiddenWhenStackIsEmpty(`btn flowchart-back-button`)}
        >
          back
        </div>

        <div
          onClick={() => {
            props.resetToHomeEvent()
          }}
          className={hiddenWhenStackIsEmpty(`btn flowchart-home-button`)}
        >
          home
        </div>
      </div>
      <div className={"flowchart-prompt-container"}>
        <ReactMarkdown>{props.prompt}</ReactMarkdown>
      </div>
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
    </div>
  )
}
