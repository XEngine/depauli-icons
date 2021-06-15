
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
            children.concat([_c('path',{attrs:{"d":"M2.25 16.5A2.252 2.252 0 010 14.25v-4.5A2.252 2.252 0 012.25 7.5h4.582a.75.75 0 01.651.378 5.193 5.193 0 004.507 2.621 5.218 5.218 0 004.526-2.621.755.755 0 01.652-.378h4.582A2.252 2.252 0 0124 9.75v4.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.163a6.665 6.665 0 01-5.598 2.999A6.691 6.691 0 016.414 9H2.25z"}})])
          )
        }
      }
    