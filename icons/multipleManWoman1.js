
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
            children.concat([_c('path',{attrs:{"d":"M14.25 20.999a.75.75 0 01-.75-.75c0-3.308-2.692-6-6-6s-6 2.692-6 6a.75.75 0 01-1.5 0c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5a.75.75 0 01-.75.75zM7.5 12.748a4.88 4.88 0 01-4.875-4.875 4.867 4.867 0 01.684-2.479A4.901 4.901 0 017.5 2.998c2.388 0 4.453 1.777 4.814 4.138a.689.689 0 01.022.153c.027.217.039.403.039.584A4.88 4.88 0 017.5 12.748zM4.231 7.035A3.379 3.379 0 007.5 11.248a3.381 3.381 0 003.34-2.885 7.64 7.64 0 01-6.609-1.328zm.71-1.356a6.103 6.103 0 003.951 1.435c.621 0 1.231-.093 1.818-.277A3.396 3.396 0 007.5 4.498c-.985 0-1.919.436-2.559 1.181zM23.25 20.999a.75.75 0 01-.75-.749c0-.444-.05-.888-.148-1.321a5.966 5.966 0 00-2.654-3.754 5.981 5.981 0 00-4.531-.777.745.745 0 01-.897-.565.746.746 0 01.566-.897 7.48 7.48 0 015.663.971 7.457 7.457 0 013.317 4.691c.121.54.184 1.096.184 1.65 0 .413-.336.75-.75.751z"}}),_c('path',{attrs:{"d":"M21.483 12.999a.755.755 0 01-.64-.359 6.613 6.613 0 01-.689-1.544 4.872 4.872 0 01-5.419 1.323.743.743 0 01-.415-.396.742.742 0 01-.013-.574.755.755 0 01.971-.428 3.37 3.37 0 003.058-.317 3.33 3.33 0 001.378-1.822 6.245 6.245 0 01-3.216-1.513 6.361 6.361 0 01-1.989 1.199.754.754 0 01-.965-.441.74.74 0 01.021-.573.744.744 0 01.42-.391 4.826 4.826 0 001.949-1.351.747.747 0 01.566-.258.79.79 0 01.568.26 4.692 4.692 0 002.766 1.568 3.355 3.355 0 00-2.634-2.81 3.357 3.357 0 00-2.54.471.75.75 0 11-.817-1.258 4.848 4.848 0 013.669-.681 4.843 4.843 0 013.075 2.113c.565.87.832 1.88.773 2.924l.003.045.011.78a5.189 5.189 0 00.75 2.892.747.747 0 01-.25 1.031.75.75 0 01-.391.11z"}})])
          )
        }
      }
    