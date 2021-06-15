
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
            children.concat([_c('path',{attrs:{"d":"M12 6.75c-1.861 0-3.375-1.514-3.375-3.375S10.139 0 12 0s3.375 1.514 3.375 3.375S13.861 6.75 12 6.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S10.966 5.25 12 5.25s1.875-.841 1.875-1.875S13.034 1.5 12 1.5zM13.5 24a2.227 2.227 0 01-1.5-.575 2.227 2.227 0 01-1.5.575 2.252 2.252 0 01-2.25-2.25v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 001.5 0v-3a.75.75 0 011.5 0v3a.75.75 0 001.5 0v-4.5a.75.75 0 011.5 0v4.5A2.252 2.252 0 0113.5 24z"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V15h-4.326c-.427.479-1.027.75-1.674.75s-1.246-.271-1.674-.75H9.173c-.427.479-1.027.75-1.673.75s-1.246-.271-1.673-.75H1.5v8.25a.75.75 0 01-1.5 0V12a.75.75 0 011.5 0v1.5h3.75V12a5.256 5.256 0 015.25-5.25h3A5.256 5.256 0 0118.75 12v1.5h3.75V12a.75.75 0 011.5 0v11.25a.75.75 0 01-.75.75zM15 11.25a.75.75 0 01.75.75v1.5a.75.75 0 001.5 0V12a3.754 3.754 0 00-3.75-3.75h-3A3.754 3.754 0 006.75 12v1.5a.75.75 0 001.5 0V12a.75.75 0 011.5 0v1.5h4.5V12a.75.75 0 01.75-.75z"}})])
          )
        }
      }
    