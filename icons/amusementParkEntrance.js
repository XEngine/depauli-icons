
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75v-10.5a9.028 9.028 0 00-2.635-6.361 3.372 3.372 0 01-1.115-.896v3.525c.847.122 1.5.852 1.5 1.732v2.5c0 .965-.785 1.75-1.75 1.75H7c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.88.653-1.61 1.5-1.732V5.493c-.302.373-.68.678-1.117.897A9.03 9.03 0 003 12.749V23.25a.75.75 0 01-1.5 0v-10.5a10.513 10.513 0 011.938-6.073A3.377 3.377 0 01.75 3.375 3.379 3.379 0 014.125 0c1.028 0 1.99.47 2.625 1.257C7.385.47 8.347 0 9.375 0S11.365.47 12 1.257C12.635.47 13.597 0 14.625 0s1.99.47 2.625 1.257A3.375 3.375 0 0119.875 0a3.379 3.379 0 013.375 3.375 3.382 3.382 0 01-2.687 3.305 10.52 10.52 0 011.937 6.071V23.25a.75.75 0 01-.75.75zM7 10.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h10a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H7zM15.75 9V6.555a3.345 3.345 0 01-1.125.195c-1.028 0-1.99-.47-2.625-1.257A3.375 3.375 0 019.375 6.75a3.37 3.37 0 01-1.125-.195V9h7.5zm4.125-7.5C18.841 1.5 18 2.341 18 3.375s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S20.909 1.5 19.875 1.5zm-5.25 0c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875S16.5 4.409 16.5 3.375 15.659 1.5 14.625 1.5zm-5.25 0C8.341 1.5 7.5 2.341 7.5 3.375S8.341 5.25 9.375 5.25s1.875-.841 1.875-1.875S10.409 1.5 9.375 1.5zm-5.25 0c-1.034 0-1.875.841-1.875 1.875S3.091 5.25 4.125 5.25 6 4.409 6 3.375 5.159 1.5 4.125 1.5z"}})])
          )
        }
      }
    