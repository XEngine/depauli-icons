
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
            children.concat([_c('path',{attrs:{"d":"M.776 22.982a.75.75 0 01-.749-.711 20.228 20.228 0 01.329-4.845A20.143 20.143 0 0120.181 1.032c1.065 0 2.137.085 3.188.253a.748.748 0 01.622.862 19.155 19.155 0 01-3.123 7.762.75.75 0 01-.617.324h-3.346c.247.559.586 1.329 1 2.28a.75.75 0 01-.183.854 20.094 20.094 0 01-16.02 5.098 18.728 18.728 0 00-.176 3.729.748.748 0 01-.71.788h-.04zm1.207-5.995c.73.085 1.467.129 2.196.129h.001c4.448 0 8.745-1.598 12.131-4.505-.74-1.696-1.19-2.7-1.24-2.812a.753.753 0 01.68-1.068h4.101a17.726 17.726 0 002.519-6.072 18.835 18.835 0 00-3.162-.102c-8.32.435-15.347 6.346-17.226 14.43z"}})])
          )
        }
      }
    