import { StoryObj, Meta } from "@storybook/react";
import { Sample } from "./Sample";

const meta: Meta<typeof Sample> = {
  component: Sample,
};
export default meta;

export const Default: StoryObj<typeof Sample> = {};
