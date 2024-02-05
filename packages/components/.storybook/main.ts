module.exports = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: "@storybook/nextjs",
  },
  docs: {
    autodocs: "tag",
  },
};
