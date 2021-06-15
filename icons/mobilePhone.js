
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
            children.concat([_c('path',{attrs:{"d":"M8.251 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 018.251 0h7.5a3.754 3.754 0 013.75 3.75v16.5a3.754 3.754 0 01-3.75 3.75h-7.5zm-2.25-3.75a2.252 2.252 0 002.25 2.25h7.5a2.252 2.252 0 002.25-2.25v-.75h-12v.75zm12-2.25V3.75a2.252 2.252 0 00-2.25-2.25h-7.5a2.252 2.252 0 00-2.25 2.25V18h12z"}})])
          )
        }
      }
    