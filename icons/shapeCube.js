
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2.25 24a2.236 2.236 0 01-1.616-.687A2.228 2.228 0 010 21.75V7.371c0-.316.066-.625.196-.916l.011-.023c.11-.241.263-.462.451-.651L5.78.659A2.265 2.265 0 017.371 0H21.75a2.236 2.236 0 011.616.686c.41.424.634.978.634 1.564v14.379c0 .317-.066.625-.196.916l-.011.023a2.232 2.232 0 01-.451.65l-5.123 5.122a2.24 2.24 0 01-.691.47c-.274.124-.582.19-.899.19H2.25zm14.25-1.5V18H7.061l-4.5 4.5H16.5zm-15-1.061l4.5-4.5V7.5H1.5v13.939zm16.5 0L21.439 18H18v3.439zm4.5-4.939V2.561l-4.5 4.5V16.5h4.5zm-6 0v-9h-9v9h9zM16.939 6l4.5-4.5H7.5V6h9.439zM6 6V2.561L2.561 6H6z"}})])
          )
        }
      }
    