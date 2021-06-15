
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
            children.concat([_c('path',{attrs:{"d":"M5.25 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM17.25 20.25a.75.75 0 01-.75-.75V18H15a.75.75 0 010-1.5h1.5V15a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5H18v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V2.561L2.561 22.5H21.75zm-19.5-21a.75.75 0 00-.75.75v19.189L21.44 1.5H2.25z"}})])
          )
        }
      }
    