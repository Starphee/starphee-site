import baseTheme from "gatsby-theme-musician/src/gatsby-plugin-theme-ui";


const style = {
  ...baseTheme,
};

style.styles.root.background = "rgb(53, 53, 53)";
style.styles.root.color = "#fff";
style.layout.header.background = "rgba(53,53,53,0.7)";
style.layout.header.color = "#fff";

style.textStyles.button.color = "#fff";

// console.log(style);

export default style;
