
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.963 0-9-4.037-9-9a9.006 9.006 0 012.866-6.578L3.049 1.017A.748.748 0 013.75 0h16.5a.749.749 0 01.701 1.016l-2.817 7.406A9.008 9.008 0 0121 15c0 4.963-4.037 9-9 9zm0-16.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm-4.897-.046A8.88 8.88 0 019.27 6.426L8.374 1.5H4.838l2.265 5.954zm7.627-1.028a8.916 8.916 0 012.167 1.028L19.162 1.5h-3.536l-.896 4.926zM12 6c.418 0 .843.031 1.266.091l.835-4.591H9.899l.835 4.591C11.157 6.031 11.582 6 12 6z"}}),_c('path',{attrs:{"d":"M14.912 19.723c-.237 0-.469-.062-.673-.18L12 18.28l-2.247 1.264a1.316 1.316 0 01-1.007.131 1.33 1.33 0 01-.814-.621 1.348 1.348 0 01-.077-1.19l.88-2.022-1.586-1.561a1.331 1.331 0 01.948-2.285h1.664l1.041-2.048a1.353 1.353 0 011.833-.568c.24.128.434.323.561.565L14.24 12h1.667a1.34 1.34 0 011.345 1.3c.009.371-.139.732-.406.99l-1.581 1.556.876 2.013c.142.338.144.704.008 1.034a1.333 1.333 0 01-1.237.83zM12 16.669c.129 0 .256.033.368.097l2.203 1.243-.887-2.037a.754.754 0 01.162-.834L15.51 13.5h-1.731a.746.746 0 01-.669-.411l-1.111-2.188-1.11 2.184a.747.747 0 01-.669.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.76.76 0 01.367-.095z"}})])
          )
        }
      }
    