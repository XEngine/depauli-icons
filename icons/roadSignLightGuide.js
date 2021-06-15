
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
            children.concat([_c('path',{attrs:{"d":"M7 24c-.965 0-1.75-.785-1.75-1.75V1.75C5.25.785 6.035 0 7 0h10c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75H7zm-.25-1.75c0 .138.112.25.25.25h10a.25.25 0 00.25-.25v-.91L12 16.747 6.75 21.34v.91zm0-2.903l4.756-4.162a.753.753 0 01.988 0l4.756 4.162V14.59L12 9.997 6.75 14.59v4.757zm0-6.75l4.756-4.162a.753.753 0 01.988.001l4.756 4.161V7.84L12 3.247 6.75 7.84v4.757zM12.01 1.5c.178.002.35.068.484.186l4.756 4.162V1.75A.25.25 0 0017 1.5h-4.99zM7 1.5a.25.25 0 00-.25.25v4.097l4.756-4.162a.75.75 0 01.484-.185H7z"}})])
          )
        }
      }
    