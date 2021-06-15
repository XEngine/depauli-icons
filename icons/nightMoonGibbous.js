
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
            children.concat([_c('path',{attrs:{"d":"M14.186 23.96c-6.606-.01-11.972-5.394-11.963-12-.001-1.14.16-2.275.48-3.371C4.184 3.508 8.915-.04 14.208-.04c1.13 0 2.257.162 3.35.481.154.045.292.14.388.268 5.012 6.625 5.012 15.879 0 22.505a.755.755 0 01-.388.267c-1.091.318-2.22.479-3.355.479h-.017zm.023-22.499c-4.631 0-8.771 3.104-10.067 7.548a10.45 10.45 0 00-.419 2.951c-.009 5.782 4.685 10.491 10.464 10.5.926 0 1.833-.119 2.713-.353 4.397-5.993 4.397-14.3 0-20.293a10.48 10.48 0 00-2.691-.353z"}})])
          )
        }
      }
    