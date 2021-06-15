
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a3.754 3.754 0 01-3.75-3.75V6H3a.75.75 0 01-.75-.75v-3A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v3A.75.75 0 0121 6h-.75v14.25A3.754 3.754 0 0116.5 24h-9zm-2.25-3.75A2.252 2.252 0 007.5 22.5h9a2.252 2.252 0 002.25-2.25v-.75H5.25v.75zM18.75 18v-7.5H5.25V18h13.5zm0-9V6H5.25v3h13.5zm1.5-4.5V2.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75V4.5h16.5z"}}),_c('path',{attrs:{"d":"M12 17.25a.75.75 0 01-.75-.75V15h-1.5a.75.75 0 010-1.5h1.5V12a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    