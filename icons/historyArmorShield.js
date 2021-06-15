
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
            children.concat([_c('path',{attrs:{"d":"M11.98 24.003c-1.973 0-3.906-.563-5.591-1.628a10.436 10.436 0 01-4.635-6.568 1.278 1.278 0 011.245-1.557A2.253 2.253 0 005.25 12 2.252 2.252 0 003 9.75a1.268 1.268 0 01-1.078-.593 1.265 1.265 0 01-.168-.963A10.55 10.55 0 019.688.258a10.457 10.457 0 017.922 1.367 10.44 10.44 0 014.635 6.568A1.272 1.272 0 0121 9.75 2.252 2.252 0 0018.75 12 2.252 2.252 0 0021 14.25a1.279 1.279 0 011.246 1.555 10.552 10.552 0 01-7.935 7.936c-.768.174-1.552.262-2.331.262zm-8.7-8.264a8.937 8.937 0 003.91 5.367 8.96 8.96 0 006.79 1.171 9.047 9.047 0 006.738-6.539 3.755 3.755 0 01-3.469-3.74 3.756 3.756 0 013.469-3.74 8.94 8.94 0 00-3.91-5.367 8.963 8.963 0 00-6.79-1.172A9.054 9.054 0 003.28 8.26 3.755 3.755 0 016.749 12a3.755 3.755 0 01-3.469 3.739z"}}),_c('path',{attrs:{"d":"M11.999 19.5a.75.75 0 01-.75-.75v-4.629l-2.91 3.6a.744.744 0 01-.583.279.75.75 0 01-.583-1.222l3.256-4.029h-1.43a.75.75 0 010-1.5h1.429L7.173 7.221a.74.74 0 01-.162-.55.745.745 0 01.275-.504.744.744 0 011.053.112l2.91 3.6V5.25a.75.75 0 011.5 0v4.629l2.909-3.6a.748.748 0 011.056-.112.745.745 0 01.274.504.747.747 0 01-.162.551L13.57 11.25H15a.75.75 0 010 1.5h-1.43l3.256 4.029a.75.75 0 01-1.166.942l-2.91-3.6v4.629a.752.752 0 01-.751.75z"}})])
          )
        }
      }
    