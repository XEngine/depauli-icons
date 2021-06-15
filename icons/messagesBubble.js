
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
            children.concat([_c('path',{attrs:{"d":"M.748 24a.75.75 0 01-.678-1.072l2.911-6.113a11.245 11.245 0 01-1.484-5.596C1.507 5.033 6.547 0 12.733 0h.034c2.101 0 4.155.587 5.94 1.696a11.172 11.172 0 015.011 7c.683 2.93.187 5.946-1.397 8.494a11.176 11.176 0 01-6.998 5.016 11.208 11.208 0 01-8.139-1.189l-6.112 2.911A.777.777 0 01.748 24zM12.733 1.5c-5.36 0-9.727 4.361-9.735 9.721a9.724 9.724 0 001.47 5.158.745.745 0 01.04.719l-2.174 4.567L6.9 19.49a.747.747 0 01.718.041 9.71 9.71 0 007.362 1.214 9.69 9.69 0 006.066-4.347c2.839-4.566 1.434-10.59-3.132-13.428a9.74 9.74 0 00-5.148-1.47h-.033z"}})])
          )
        }
      }
    