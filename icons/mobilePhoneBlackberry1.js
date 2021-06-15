
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 017.5 0h9a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0116.5 24h-9zm-2.25-3.75A2.252 2.252 0 007.5 22.5h9a2.252 2.252 0 002.25-2.25V13.5H5.25v6.75zM18.75 12V4.5H5.25V12h13.5zm-.132-9A2.262 2.262 0 0016.5 1.5h-9c-.96 0-1.805.621-2.118 1.5h13.236z"}}),_c('circle',{attrs:{"cx":"12","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"16.125","r":"1.125"}}),_c('path',{attrs:{"d":"M15.75 21c-.62 0-1.125-.505-1.125-1.125 0-.599.469-1.091 1.069-1.121a.546.546 0 01.056-.004c.62 0 1.125.505 1.125 1.125S16.37 21 15.75 21z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.25","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    