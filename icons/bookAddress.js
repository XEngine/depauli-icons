
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 016 0h14.25c.827 0 1.5.673 1.5 1.5V18c0 .827-.673 1.5-1.5 1.5v3H21a.75.75 0 010 1.5H5.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3H5.25zM6 1.5a2.252 2.252 0 00-2.25 2.25v14.651A2.973 2.973 0 015.25 18h15V1.5H6z"}}),_c('path',{attrs:{"d":"M7.5 16.5a.75.75 0 01-.75-.75c0-1.959 1.11-3.75 2.822-4.648A3.758 3.758 0 018.25 8.25 3.754 3.754 0 0112 4.5a3.754 3.754 0 013.75 3.75 3.758 3.758 0 01-1.322 2.852 5.271 5.271 0 012.822 4.648.75.75 0 01-.75.75h-9zm8.174-1.5c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348zM12 6c-1.241 0-2.25 1.009-2.25 2.25S10.759 10.5 12 10.5s2.25-1.009 2.25-2.25S13.241 6 12 6z"}})])
          )
        }
      }
    