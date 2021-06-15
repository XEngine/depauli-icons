
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24c-2.523 0-4.5-1.318-4.5-3v-.438L12.339 17.9c-1.231 1.008-3.283 1.601-5.589 1.601-3.848 0-6.75-1.612-6.75-3.75v-9c0-2.138 2.902-3.75 6.75-3.75s6.75 1.612 6.75 3.75V7.94l1.5-1.5V2.985C15.013 1.31 16.986.001 19.5.001c2.514 0 4.488 1.31 4.5 2.985V7.5c0 1.682-1.977 3-4.5 3-2.061 0-3.764-.877-4.311-2.128L13.5 10.061v5.689c0 .333-.073.659-.216.973L15 18.44v-1.961c.018-1.672 1.99-2.978 4.5-2.978s4.482 1.307 4.5 2.978V21c0 1.682-1.977 3-4.5 3zm-3-3c0 .708 1.283 1.5 3 1.5s3-.792 3-1.5v-2.24c-.808.476-1.861.741-3 .741s-2.192-.264-3-.741V21zm3-5.999c-1.717 0-3 .792-3 1.5s1.283 1.5 3 1.5 3-.792 3-1.5-1.283-1.5-3-1.5zm-18 .75c0 1.062 2.245 2.25 5.25 2.25 2.235 0 4.297-.674 5.018-1.638l.013-.018c.145-.2.219-.4.219-.594v-2.098c-1.25.854-3.142 1.348-5.25 1.348s-4-.494-5.25-1.348v2.098zm0-4.5c0 1.062 2.245 2.25 5.25 2.25S12 12.313 12 11.251V9.153c-1.25.854-3.142 1.348-5.25 1.348s-4-.494-5.25-1.348v2.098zm5.25-6.75c-3.005 0-5.25 1.188-5.25 2.25s2.245 2.25 5.25 2.25S12 7.813 12 6.751s-2.245-2.25-5.25-2.25zM16.5 7.5c0 .708 1.283 1.5 3 1.5s3-.792 3-1.5V5.26c-.808.476-1.861.741-3 .741s-2.192-.264-3-.741V7.5zm3-5.999c-1.717 0-3 .792-3 1.5s1.283 1.5 3 1.5 3-.792 3-1.5-1.283-1.5-3-1.5z"}})])
          )
        }
      }
    