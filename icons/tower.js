
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.689a.75.75 0 010-1.5h3.914L7.5 10.847V7.189h-.75a.751.751 0 01-.568-1.24L10.902.48A1.487 1.487 0 0112 0c.401 0 .778.156 1.061.44l.035.038 4.722 5.471a.751.751 0 01-.568 1.24h-.75v3.658l2.835 11.342h3.915a.75.75 0 010 1.5H.75zm17.04-1.5l-.221-.884L12 17.964l-5.568 3.341-.221.884H17.79zm-.736-2.942l-.938-3.752-2.658 1.595 3.596 2.157zm-10.108 0l3.596-2.158-2.658-1.595-.938 3.753zM12 16.215l3.736-2.241-.571-2.285H8.836l-.571 2.285L12 16.215zm3-6.026v-3H9v3h6zm.612-4.5L12 1.504 8.388 5.689h7.224z"}})])
          )
        }
      }
    