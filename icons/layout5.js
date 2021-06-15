
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
            children.concat([_c('path',{attrs:{"d":"M3 23.247a2.252 2.252 0 01-2.25-2.25v-18A2.252 2.252 0 013 .747h18a2.252 2.252 0 012.25 2.25v18a2.252 2.252 0 01-2.25 2.25H3zm18-1.5a.75.75 0 00.75-.75v-5.25H8.25v6H21zm-18.75-.75c0 .414.336.75.75.75h3.75v-13.5h-4.5v12.75zm19.5-6.75v-6H8.25v6h13.5zm0-7.5v-3.75a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v3.75h19.5z"}})])
          )
        }
      }
    