
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
            children.concat([_c('path',{attrs:{"d":"M9.748 15a2.252 2.252 0 01-2.25-2.25v-4.5c0-1.241 1.01-2.25 2.25-2.25h1.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-1.5zM14.998 16.5a.755.755 0 01-.676-.425.753.753 0 01.09-.793l1.899-2.375a.86.86 0 00.187-.533.375.375 0 00-.75.001.75.75 0 01-1.5 0c0-1.034.841-1.875 1.875-1.875s1.875.841 1.875 1.875a2.37 2.37 0 01-.515 1.468L16.559 15h.69a.75.75 0 010 1.5h-2.251z"}}),_c('path',{attrs:{"d":"M.749 24a.75.75 0 01-.678-1.072l2.911-6.113a11.245 11.245 0 01-1.484-5.596C1.507 5.033 6.547 0 12.733 0l.036.375V0c2.102 0 4.157.587 5.941 1.697 2.548 1.585 4.327 4.071 5.01 7.001s.186 5.946-1.399 8.494a11.176 11.176 0 01-6.999 5.015 11.199 11.199 0 01-8.139-1.191L1.07 23.928A.76.76 0 01.749 24zM12.743 1.5c-5.373.003-9.737 4.362-9.745 9.721a9.724 9.724 0 001.47 5.158.745.745 0 01.04.719l-2.174 4.567 4.567-2.175a.745.745 0 01.719.04 9.713 9.713 0 007.363 1.216 9.69 9.69 0 006.066-4.346c2.839-4.565 1.435-10.589-3.13-13.429A9.741 9.741 0 0012.77 1.5h-.033.006z"}})])
          )
        }
      }
    