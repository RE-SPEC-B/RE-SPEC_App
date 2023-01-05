import { storiesOf } from "@storybook/react-native";
import Coupon from "./Coupon";

const data = {
    retained: false,
    title: "20분 무료 상담권",   
    description: "멘토와의 전화 상담권",
    endDate: new Date(2023, 0, 14),
}

const data2 = {
    retained: true,
    title: "20분 무료 상담권",   
    description: "멘토와의 전화 상담권",
    endDate: new Date(2023, 0, 14),
}

storiesOf("main", module)
  .add("element1", () => <Coupon retained={data.retained} title={data.title} description={data.description} endDate={data.endDate} />)

  storiesOf("main", module)
  .add("element2", () => <Coupon retained={data2.retained} title={data2.title} description={data2.description} endDate={data2.endDate} />)
