
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
            children.concat([_c('path',{attrs:{"d":"M20.25 21.001a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75h-.75A2.252 2.252 0 010 17.251v-5.25c0-1.067.582-2.06 1.5-2.594V8.251a5.248 5.248 0 015.25-5.255 5.248 5.248 0 015.084 3.942c.211.819 1.945.905 3.781.995 3.339.165 8.385.413 8.385 6.318v3a2.252 2.252 0 01-2.25 2.25H21v.75a.75.75 0 01-.75.75zM3 10.501c-.827 0-1.5.673-1.5 1.5v5.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-2.25H5.25a.75.75 0 01-.75-.75v-2.25c0-.828-.673-1.5-1.5-1.5zm19.463 3c-.38-3.747-3.703-3.911-6.921-4.069-2.298-.113-4.674-.229-5.16-2.119A3.75 3.75 0 003 8.25V9c1.654 0 3 1.346 3 3v1.5h16.463z"}})])
          )
        }
      }
    