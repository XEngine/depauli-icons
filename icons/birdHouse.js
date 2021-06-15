
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
            children.concat([_c('path',{attrs:{"d":"M7.488 24a1.98 1.98 0 01-1.881-1.551L2.542 10.398l-1.289 1.177a.75.75 0 01-1.011-1.108L11.492.196a.747.747 0 011.011 0l11.25 10.271a.752.752 0 01-.506 1.304.751.751 0 01-.506-.196l-1.29-1.177-3.069 12.075A1.961 1.961 0 0116.524 24H7.488zm-.421-1.897a.48.48 0 00.456.397H16.5a.473.473 0 00.424-.373L20.196 9.25l-8.198-7.485-8.2 7.486 3.269 12.852z"}}),_c('path',{attrs:{"d":"M11.997 18a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S13.238 12 11.997 12z"}})])
          )
        }
      }
    