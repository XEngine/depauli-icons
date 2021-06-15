
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
            children.concat([_c('path',{attrs:{"d":"M6.749 24a.75.75 0 01-.75-.75V11.171a3.759 3.759 0 01-3-3.669V.75a.75.75 0 011.5 0V7.5a2.273 2.273 0 001.5 2.115V.75a.75.75 0 011.5 0v8.865a2.274 2.274 0 001.5-2.117V.75a.75.75 0 011.5 0V7.5a3.759 3.759 0 01-3 3.671V23.25a.75.75 0 01-.75.75zM15.748 24a.75.75 0 01-.75-.75V1.503a1.506 1.506 0 012.764-.822c2.899 4.526 3.07 9.109 3.235 13.541a2.18 2.18 0 01-.702 1.694 2.182 2.182 0 01-1.486.585s-.061 0-.091-.002h-2.221v6.75a.75.75 0 01-.749.751zm3.038-9a.706.706 0 00.491-.185.687.687 0 00.222-.534c-.158-4.235-.322-8.61-2.995-12.784l-.002-.371v.375l-.002.001L18.786 15z"}})])
          )
        }
      }
    