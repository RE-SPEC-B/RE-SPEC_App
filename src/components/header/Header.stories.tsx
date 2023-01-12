import { storiesOf } from "@storybook/react-native";
import Header from "./Header";
import AppointmentHeader from "./AppointmentHeader";
import RecommendHeader from "./RecommendHeader";
import MyPageHeader from "./MyPageHeader";
import WritingHeader from "./WritingHeader";


storiesOf("RecommendHeader", module)
  .add("RecommendHeader", () => <RecommendHeader mentorId="123456" bookmark={false} />)

storiesOf("AppointmentHeader", module)
  .add("AppointmentHeader", () => <AppointmentHeader />)

storiesOf("Header", module)
  .add("main", () => <Header />)

storiesOf("MyPageHeader", module)
  .add("MyPageHeader", () => <MyPageHeader />)

storiesOf("WritingHeader", module)
  .add("WritingHeader", () => <WritingHeader />)