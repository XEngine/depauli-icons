
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0119.5 24h-15zm15-1.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H8.25v21H19.5zm-15-21a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h2.25v-21H4.5z"}}),_c('path',{attrs:{"d":"M12 9c-1.241 0-2.25-1.009-2.25-2.25S10.759 4.5 12 4.5h4.5c1.241 0 2.25 1.009 2.25 2.25S17.741 9 16.5 9H12zm0-3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H12z"}})])
          )
        }
      }
    