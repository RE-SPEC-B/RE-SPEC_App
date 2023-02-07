import { LayoutMain, LayoutScroll } from "./Layout";
import Section from "./Section";

export const Layout = Object.assign(LayoutMain, {
  Section: Section,
});

export const ScrollLayout = Object.assign(LayoutScroll, {
  Section: Section,
});
