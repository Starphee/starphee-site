import baseTheme from 'gatsby-theme-musician/src/gatsby-plugin-theme-ui';

const style = {
  ...baseTheme,
};

style.styles.root.background = 'transparent';
style.styles.root.color = '#fff';
style.layout.header.background = '#44444482';
style.layout.header.color = '#fff';

style.textStyles.button.color = '#fff';

// console.log(style);

export default style;
