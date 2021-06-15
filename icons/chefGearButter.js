
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
            children.concat([_c('path',{attrs:{"d":"M12 20.25c-6.841 0-12-2.257-12-5.25 0-1.701 1.595-3.166 4.5-4.142V5.25c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v1.5h1.75c.689 0 1.25.561 1.25 1.25v2.855c2.905.981 4.5 2.447 4.5 4.145 0 2.993-5.159 5.25-12 5.25zm-7.072-7.954C2.806 13.02 1.5 14.045 1.5 15c0 1.533 3.739 3.75 10.5 3.75S22.5 16.533 22.5 15c0-.884-1.136-1.842-3-2.554V14.5c0 .689-.561 1.25-1.25 1.25h-9.5c-.689 0-1.25-.561-1.25-1.25v-1.75H6a1.49 1.49 0 01-1.072-.454zM18 14.25v-6h-1.5v2.25a.75.75 0 01-1.5 0V8.25h-3v2.25a.75.75 0 01-1.5 0V8.25H9v6h9zm-12-3h1.5V8c0-.689.561-1.25 1.25-1.25H15v-1.5H6v6z"}})])
          )
        }
      }
    