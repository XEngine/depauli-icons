
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
            children.concat([_c('path',{attrs:{"d":"M3.75 16.5a2.252 2.252 0 01-2.25-2.25v-.879A2.258 2.258 0 010 11.25a4.346 4.346 0 01.418-1.859c.218-.464.508-.878.863-1.233l1.824-1.824 1.643-4.388A3.012 3.012 0 017.556 0h8.885c1.243 0 2.372.782 2.808 1.947L20.89 6.33l2.89 2.89c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0L19.94 7.5H4.061L2.561 9H5.25a.75.75 0 010 1.5H1.602a2.813 2.813 0 00-.102.75c0 .414.336.75.75.75h12a.75.75 0 010 1.5H6v.75a2.252 2.252 0 01-2.25 2.25zM3 14.25a.75.75 0 001.5 0v-.75H3v.75zM19.166 6l-1.321-3.527a1.507 1.507 0 00-1.404-.973H7.557c-.622 0-1.186.391-1.404.973L4.832 6h14.334z"}}),_c('path',{attrs:{"d":"M19.5 24a4.505 4.505 0 01-4.5-4.5c0-2.202 3.447-8.631 3.84-9.357a.751.751 0 011.319 0C20.553 10.869 24 17.298 24 19.5c0 2.481-2.019 4.5-4.5 4.5zm0-11.888c-1.543 3.004-3 6.305-3 7.388 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.083-1.457-4.384-3-7.388z"}}),_c('path',{attrs:{"d":"M18.75 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    