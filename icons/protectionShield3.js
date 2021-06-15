
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
            children.concat([_c('path',{attrs:{"d":"M12 24.001a3.72 3.72 0 01-1.347-.251l-1.04-.399c-4.611-1.774-7.363-6.19-7.363-11.813V3.925A2.239 2.239 0 013.556 1.88 18.21 18.21 0 017.358.509a18.288 18.288 0 014.645-.508 18.367 18.367 0 018.462 1.888 2.226 2.226 0 011.286 2.039v7.609c0 4.45-1.697 8.145-4.78 10.405a11.155 11.155 0 01-2.583 1.408l-1.041.4a3.728 3.728 0 01-1.347.251zm.75-1.629l.057-.021 1.042-.4a9.638 9.638 0 001.901-.984v-8.966h-3v10.371zM3.758 12.001c.144 4.754 2.515 8.458 6.393 9.95l1.041.4.058.021V12.001H3.758zm13.492 7.712c1.848-1.904 2.897-4.6 2.992-7.712H17.25v7.712zm3-9.212V3.924a.74.74 0 00-.43-.68 16.95 16.95 0 00-7.07-1.74v8.997h7.5zm-9 0V1.503c-1.004.025-2.01.14-3 .344v8.654h3zm-4.5 0V2.228A16.77 16.77 0 004.2 3.234a.752.752 0 00-.45.685v6.582h3z"}})])
          )
        }
      }
    