
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V15H12v7.5h9.75zm-19.5-21a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h8.25v-21H2.25zm20.25 12v-3H12v3h10.5zm0-4.5V6H12v3h10.5zm0-4.5V2.25a.75.75 0 00-.75-.75H12v3h10.5z"}}),_c('path',{attrs:{"d":"M15.75 18a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 21a.75.75 0 01-.75-.75V3.75A.75.75 0 013.75 3h4.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75h-4.5zm3.75-1.5v-15h-3v15h3z"}})])
          )
        }
      }
    