import _ from "lodash";
import { SALES_PERFORMANCE_INTENSITY_CLASSES } from "../constants";

export function getSalesPerformanceClass() {
  return SALES_PERFORMANCE_INTENSITY_CLASSES[
    _.random(0, SALES_PERFORMANCE_INTENSITY_CLASSES.length - 1)
  ];
}
