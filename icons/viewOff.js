
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
            children.concat([_c('path',{attrs:{"d":"M2.783 21.75a.756.756 0 01-.541-.23.745.745 0 01-.209-.535.745.745 0 01.231-.526l18.75-18a.745.745 0 011.06.022.748.748 0 01-.021 1.061l-18.75 18a.753.753 0 01-.52.208zM11.988 20.25l-.11.001c-1.048 0-2.103-.163-3.137-.483a.751.751 0 01.223-1.466.73.73 0 01.222.034c.888.276 1.8.416 2.709.416l.249.001c3.853 0 7.756-2.786 10.125-5.393a.91.91 0 00-.002-1.22 19.786 19.786 0 00-2.959-2.653.744.744 0 01-.299-.49.752.752 0 011.183-.722 21.35 21.35 0 013.187 2.858c.832.923.832 2.312.003 3.233-2.586 2.846-6.895 5.886-11.237 5.886l-.157-.002zM3.778 17.011a.751.751 0 01-.46-.158 21.623 21.623 0 01-2.693-2.486 2.41 2.41 0 01-.003-3.234c2.586-2.845 6.896-5.884 11.236-5.884l.237.001c.846 0 1.687.102 2.5.305a.749.749 0 11-.363 1.456 8.807 8.807 0 00-2.129-.26h-.229c-3.863 0-7.771 2.785-10.14 5.391a.91.91 0 00.002 1.22 20.146 20.146 0 002.503 2.31.746.746 0 01.132 1.052.752.752 0 01-.593.287z"}}),_c('path',{attrs:{"d":"M8.25 13.5a.75.75 0 01-.75-.75c0-1.2.468-2.329 1.318-3.18a4.465 4.465 0 013.179-1.32c.207 0 .374.167.375.374l.002.75c0 .1-.039.195-.109.266s-.165.11-.265.11a2.98 2.98 0 00-2.121.88A2.979 2.979 0 009 12.75a.748.748 0 01-.75.75zM12.001 17.25a.374.374 0 01-.375-.375l-.001-.75c0-.099.039-.195.11-.265a.372.372 0 01.265-.11 2.98 2.98 0 002.122-.879A2.985 2.985 0 0015 12.749a.75.75 0 011.5 0 4.47 4.47 0 01-1.317 3.182 4.471 4.471 0 01-3.182 1.319z"}})])
          )
        }
      }
    