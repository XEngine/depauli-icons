
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.75A2.252 2.252 0 010 17.5v-12a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 5.5v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M3.75 16.75A.75.75 0 013 16V7a.75.75 0 01.75-.75h16.5A.75.75 0 0121 7v9a.75.75 0 01-.75.75H3.75zm15.75-1.5v-7.5h-15v7.5h15z"}})])
          )
        }
      }
    