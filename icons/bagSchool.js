
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75v-4.053a2.735 2.735 0 01-1.5-2.447v-6c0-.965.785-1.75 1.75-1.75h17.5c.965 0 1.75.785 1.75 1.75v6a2.734 2.734 0 01-1.5 2.447v4.053A2.252 2.252 0 0118.75 24H5.25zm13.5-1.5a.75.75 0 00.75-.75V18H18v.75a.75.75 0 01-1.5 0V18h-3.75v4.5h6zM4.5 21.75c0 .414.336.75.75.75h6V18H7.5v.75a.75.75 0 01-1.5 0V18H4.5v3.75zm15.088-5.25a.742.742 0 01.999-.325c.259-.235.413-.571.413-.925v-6a.25.25 0 00-.25-.25H3.25a.25.25 0 00-.25.25v6c0 .354.154.69.413.925a.747.747 0 011.003.325H6v-.75a.75.75 0 011.5 0v.75h9v-.75a.75.75 0 011.5 0v.75h1.588z"}}),_c('path',{attrs:{"d":"M23.25 12a.75.75 0 01-.75-.75v-6a3.754 3.754 0 00-3.75-3.75H5.25A3.754 3.754 0 001.5 5.25v6a.75.75 0 01-1.5 0v-6A5.256 5.256 0 015.25 0h13.5A5.256 5.256 0 0124 5.25v6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    