
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h15a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0V6h-3v2.25a.75.75 0 01-1.5 0V1.5H6V9h5.25a.75.75 0 010 1.5H1.5v3h6.75a.75.75 0 010 1.5H6v7.5h3A.75.75 0 019 24H2.25zm-.75-2.25c0 .414.336.75.75.75H4.5v-3h-3v2.25zm3-3.75v-3h-3v3h3zm0-9V6h-3v3h3zM18 4.5V2.25a.75.75 0 00-.75-.75H15v3h3zm-13.5 0v-3H2.25a.75.75 0 00-.75.75V4.5h3z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 18a.75.75 0 01-.75-.75v-2.652a.75.75 0 011.5 0V16.5h1.902a.75.75 0 010 1.5H17.25z"}})])
          )
        }
      }
    