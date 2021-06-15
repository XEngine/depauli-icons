
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
            children.concat([_c('path',{attrs:{"d":"M3 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM9 16.5a.745.745 0 01-.696-.472L6.75 12.144v3.606a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.447-.279l1.554 3.884V8.25a.749.749 0 111.499 0v7.5a.75.75 0 01-.75.75zM18 16.5a.75.75 0 01-.75-.75v-7.5A.75.75 0 0118 7.5a3.754 3.754 0 013.75 3.75v1.5A3.754 3.754 0 0118 16.5zm.75-1.629a2.264 2.264 0 001.5-2.121v-1.5c0-.962-.621-1.808-1.5-2.121v5.742zM12 16.5a.75.75 0 01-.75-.75v-7.5A.75.75 0 0112 7.5a3.754 3.754 0 013.75 3.75v1.5A3.754 3.754 0 0112 16.5zm.75-1.629a2.264 2.264 0 001.5-2.121v-1.5c0-.962-.621-1.808-1.5-2.121v5.742zM1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    