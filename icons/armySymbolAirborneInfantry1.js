
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.75c-.413 0-.82-.115-1.175-.334l-.014-.009A2.239 2.239 0 010 17.5v-12c0-.761.383-1.466 1.024-1.884.009-.007.025-.016.041-.026.348-.22.762-.34 1.185-.34h19.5a2.241 2.241 0 011.234.371A2.24 2.24 0 0124 5.5v12a2.237 2.237 0 01-1.093 1.926 2.213 2.213 0 01-1.157.324H2.25zm18.244-1.5L12 12.41l-8.494 5.84h16.988zm1.954-.477a.74.74 0 00.052-.273v-12a.746.746 0 00-.052-.274L13.324 11.5l9.124 6.273zM1.552 5.226A.746.746 0 001.5 5.5v12a.76.76 0 00.051.273l9.125-6.273-9.124-6.274zM12 10.59l8.494-5.84H3.506L12 10.59z"}}),_c('path',{attrs:{"d":"M9.75 7.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    