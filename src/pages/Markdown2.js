import React from 'react';
import '../styles/Styles.css';
import marked from 'marked';

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  breaks: true,
});
class MarkdownTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownString: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,
    };
  }

  debounce(fn, delay) {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this);
      }, delay || 1000);
    };
  }

  handleChange(e) {
    this.debounce(
      this.setState((prev) => (prev.markdownString = e.target.value)),
      2000
    );
  }

  renderEditor() {
    return (
      <textarea
        className={'page-editor'}
        id='editor'
        onChange={this.handleChange.bind(this)}
        value={this.state.markdownString}
      />
    );
  }

  renderPreview() {
    return (
      <div
        className={'page-preview'}
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(this.state.markdownString) }}
      />
    );
  }

  render() {
    return (
      <div className={'page'}>
        {this.renderEditor()}
        {this.renderPreview()}
      </div>
    );
  }
}

export default MarkdownTwo;
