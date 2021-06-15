
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
            children.concat([_c('path',{attrs:{"d":"M12 19.502a4.47 4.47 0 01-3.182-1.318 4.471 4.471 0 01-1.319-3.182c0-1.202.467-2.332 1.317-3.183a4.471 4.471 0 013.182-1.319c1.203 0 2.333.468 3.183 1.317.85.85 1.319 1.98 1.319 3.182a4.475 4.475 0 01-1.318 3.184A4.471 4.471 0 0112 19.502c.001 0 0 0 0 0zM12 12a2.98 2.98 0 00-2.123.88 2.977 2.977 0 00-.878 2.122c0 .802.312 1.555.88 2.122.567.566 1.32.878 2.122.878A3.005 3.005 0 0015.002 15a2.98 2.98 0 00-.879-2.122A2.987 2.987 0 0012 12v-.375V12zM12.001 24a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM12.001 9a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    