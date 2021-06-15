
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
            children.concat([_c('path',{attrs:{"d":"M18.718 24c-.96 0-1.808-.615-2.121-1.5H7.339c-.313.885-1.161 1.5-2.121 1.5s-1.808-.615-2.121-1.5h-.879l-.097-.002a2.198 2.198 0 01-1.538-.718 2.203 2.203 0 01-.581-1.597c.185-4.112 1.378-7.247 3.546-9.318a9.043 9.043 0 011.518-1.17A1.752 1.752 0 013.75 8V5.5c0-.887.663-1.622 1.52-1.735a1.798 1.798 0 01-.02-.265V1.75C5.25.785 6.035 0 7 0h5.5c.965 0 1.75.785 1.75 1.75V3.5c0 .09-.007.178-.02.265.857.113 1.52.848 1.52 1.735V8a1.75 1.75 0 01-.905 1.532c2.558 1.63 3.917 4.36 4.394 5.493a5.28 5.28 0 014.76 5.221 2.254 2.254 0 01-2.25 2.254h-.911a2.255 2.255 0 01-2.12 1.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-3.174-4.5c-.3 1.123-.483 2.383-.544 3.75a.72.72 0 00.687.75h.91c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h9.257c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.911a.75.75 0 00.75-.75 3.784 3.784 0 00-3.777-3.75H2.044zM17.581 15c-.839-1.711-3.055-5.231-7.081-5.25L17.581 15zM9 15V9.86c-2.223.334-4.965 1.53-6.452 5.14H9zm5-6.75a.25.25 0 00.25-.25V5.5a.25.25 0 00-.25-.25h-1.25v3H14zm-2.75 0v-3h-3v3h3zm-5.75-3a.25.25 0 00-.25.25V8c0 .138.112.25.25.25h1.25v-3H5.5zM7 1.5a.25.25 0 00-.25.25V3.5c0 .138.112.25.25.25h5.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H7z"}})])
          )
        }
      }
    