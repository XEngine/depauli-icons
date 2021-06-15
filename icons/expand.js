
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
            children.concat([_c('path',{attrs:{"d":"M.75 10.498a.75.75 0 01-.75-.75v-4.5a2.252 2.252 0 012.25-2.25h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75zM23.25 10.498a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-6a.75.75 0 010-1.5h6A2.252 2.252 0 0124 5.248v4.5a.75.75 0 01-.75.75zM2.25 20.998A2.252 2.252 0 010 18.748v-4.5a.75.75 0 011.5 0v4.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM15.75 20.998a.75.75 0 010-1.5h6a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5a2.252 2.252 0 01-2.25 2.25h-6zM6.75 16.498a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25h10.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25H6.75zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H6.75z"}})])
          )
        }
      }
    