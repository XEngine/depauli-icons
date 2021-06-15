
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
            children.concat([_c('path',{attrs:{"d":"M9.75 6A.75.75 0 019 5.25v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 6a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V21h-3v2.25a.75.75 0 01-1.5 0v-2.308c-2.55-.368-4.5-2.584-4.5-5.192v-6c0-.96.615-1.808 1.5-2.121V1.5C6 .673 6.673 0 7.5 0h9c.827 0 1.5.673 1.5 1.5v6.129a2.26 2.26 0 011.5 2.121v6c0 2.607-1.95 4.824-4.5 5.192v2.308a.75.75 0 01-.75.75zM6.75 9a.75.75 0 00-.75.75v6a3.754 3.754 0 003.75 3.75h4.5A3.754 3.754 0 0018 15.75v-6a.75.75 0 00-.75-.75H6.75zm9.75-1.5v-6h-9v6h9z"}})])
          )
        }
      }
    