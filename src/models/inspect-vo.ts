import {InspectSubItemVo} from "./inspect-sub-item-vo";

export class InspectVo {
  id: string;
  title: string;
  specTitle: string;
  spec: string;
  dangerTitle: string;
  danger: string;
  industry: string;
  frequency: string;
  status: number;

  subItems: Array<InspectSubItemVo>;
}
