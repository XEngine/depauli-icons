const { optimize } = require('svgo');

module.exports = (name, content) => {
    const svg = optimize(content, {
        multipass: false,
        plugins: [
            {
                name: 'removeViewBox',
                active: false
            }
        ]
    }).data;
    console.log(svg)
    return  `
export default {
  name: '${name}',
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },
  functional: true,
  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...ctx.data}>")}
  }
}
    `.trim();
};
