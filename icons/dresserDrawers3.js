
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-21A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v21a.75.75 0 01-.75.75zm-.75-3v-6h-15v6h15zm0-7.5v-3h-15v3h15zm0-4.5V6h-15v3h15zm0-4.5V2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75V4.5h15z"}}),_c('path',{attrs:{"d":"M11.25 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    