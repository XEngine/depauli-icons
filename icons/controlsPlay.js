
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
            children.concat([_c('path',{attrs:{"d":"M3.839 22.995c-1.24 0-2.25-1.01-2.25-2.25V3.254c0-.37.092-.738.267-1.064a2.263 2.263 0 011.985-1.187c.367 0 .734.093 1.061.268l16.323 8.745c.392.21.71.528.92.92a2.24 2.24 0 01.171 1.714 2.237 2.237 0 01-1.091 1.333L4.902 22.728a2.268 2.268 0 01-1.063.267zM3.84 2.504a.744.744 0 00-.218.033.753.753 0 00-.533.717v17.49a.75.75 0 001.104.661l16.324-8.745a.74.74 0 00.363-.444.748.748 0 00-.363-.879L4.194 2.594a.736.736 0 00-.354-.09z"}})])
          )
        }
      }
    