import { flowChartEvent } from "./FlowChartPage"

const blankPageYes = new flowChartEvent("blank page, yes", [])
const blankPageNo = new flowChartEvent("blank page, no", [])

export const rootFlowChartEvent = new flowChartEvent("initial Page prompt", [
  { label: "yes, xyz", destination: blankPageYes },
  { label: "no, xyz", destination: blankPageNo },
])
