
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
            children.concat([_c('path',{attrs:{"d":"M5.494 23.625a2.252 2.252 0 01-2.25-2.25v-2.25c0-.563.206-1.091.575-1.5a2.222 2.222 0 01-.575-1.5v-2.25c0-.259.044-.511.129-.75h-.879a2.252 2.252 0 01-2.25-2.25v-2.25a2.252 2.252 0 012.25-2.25h.879a2.231 2.231 0 01-.129-.75v-2.25a2.252 2.252 0 012.25-2.25h6a2.252 2.252 0 012.25 2.25v2.25a2.252 2.252 0 01-2.25 2.25h-.879c.085.239.129.491.129.75v2.25c0 .259-.044.511-.129.75h.879a2.252 2.252 0 012.25 2.25v2.25c0 .563-.206 1.091-.575 1.5.37.409.575.937.575 1.5v2.25a2.252 2.252 0 01-2.25 2.25h-6zm0-5.25a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-6zm0-5.25a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-6zm-3-5.25a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-6zm3-5.25a.75.75 0 00-.75.75v2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-6zM20.988 23.625a.752.752 0 01-.743-.65l-1.409-10.404-1.487.201a2.258 2.258 0 01-2.532-1.927l-.302-2.23a2.253 2.253 0 011.928-2.532l4.459-.604a2.237 2.237 0 011.664.439c.478.364.786.892.867 1.488l.302 2.23a2.252 2.252 0 01-1.927 2.532l-1.486.202 1.409 10.405a.746.746 0 01-.743.85zm.218-16.666a.737.737 0 00-.104.007l-4.458.604a.752.752 0 00-.643.844l.302 2.229a.753.753 0 00.845.643l4.459-.604a.75.75 0 00.642-.844l-.302-2.229a.744.744 0 00-.289-.496.737.737 0 00-.452-.154zM16.744 4.125a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM19.744 4.875a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.5-1.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.5 1.5a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    