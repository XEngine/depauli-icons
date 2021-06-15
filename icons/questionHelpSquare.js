
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
            children.concat([_c('path',{attrs:{"d":"M12 14.25a.75.75 0 01-.75-.75v-.256a2.251 2.251 0 011.5-2.122 2.254 2.254 0 001.5-2.121c0-.6-.234-1.165-.66-1.59a2.231 2.231 0 00-1.59-.66c-.601 0-1.166.234-1.591.659A2.231 2.231 0 009.75 9a.75.75 0 01-1.5 0A3.754 3.754 0 0112 5.251c1.002 0 1.944.39 2.652 1.099a3.725 3.725 0 011.098 2.651 3.756 3.756 0 01-2.5 3.535.752.752 0 00-.5.707v.257a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"12","cy":"16.875","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    