
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.75A2.252 2.252 0 010 21.5V2A2.252 2.252 0 012.25-.25h19.5A2.252 2.252 0 0124 2v19.5a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-6.75H12v7.5h9.75zm-19.5-21A.75.75 0 001.5 2v19.5c0 .414.336.75.75.75h8.25v-21H2.25zm20.25 12v-3H12v3h10.5zm0-4.5v-3H12v3h10.5zm0-4.5V2a.75.75 0 00-.75-.75H12v3h10.5z"}}),_c('path',{attrs:{"d":"M8.25 13.25a.75.75 0 01-.75-.75V11A.75.75 0 019 11v1.5a.75.75 0 01-.75.75zM15.75 17.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    