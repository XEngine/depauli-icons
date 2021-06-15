
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
            children.concat([_c('path',{attrs:{"d":"M7.5 12.749c-2.688 0-4.875-2.187-4.875-4.875S4.812 2.999 7.5 2.999s4.875 2.187 4.875 4.875-2.187 4.875-4.875 4.875zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375s1.514 3.375 3.375 3.375 3.375-1.514 3.375-3.375S9.361 4.499 7.5 4.499z"}}),_c('path',{attrs:{"d":"M14.25 20.999a.75.75 0 01-.75-.75c0-3.308-2.692-6-6-6s-6 2.692-6 6a.75.75 0 01-1.5 0c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5a.75.75 0 01-.75.75zM16.499 12.748c-.949 0-1.87-.274-2.663-.791-.168-.109-.283-.278-.324-.474s-.004-.396.106-.564a.748.748 0 011.037-.218 3.369 3.369 0 003.683.003 3.378 3.378 0 00.991-4.669 3.393 3.393 0 00-2.837-1.538c-.648 0-1.281.189-1.832.546a.75.75 0 11-.817-1.258 4.851 4.851 0 013.669-.681 4.843 4.843 0 013.075 2.113 4.881 4.881 0 01-1.432 6.744 4.862 4.862 0 01-2.656.787z"}}),_c('path',{attrs:{"d":"M23.25 20.999a.75.75 0 01-.75-.749c0-.444-.05-.888-.148-1.321a5.97 5.97 0 00-2.654-3.754 5.982 5.982 0 00-4.532-.777.745.745 0 01-.897-.565.746.746 0 01.566-.897 7.48 7.48 0 015.662.971 7.455 7.455 0 013.317 4.691c.123.54.186 1.096.186 1.65 0 .413-.336.75-.75.751z"}})])
          )
        }
      }
    