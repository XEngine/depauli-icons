
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V6A2.252 2.252 0 014.5 3.75h3.063C7.924 1.621 9.81 0 12 0c2.19 0 4.076 1.621 4.437 3.75H19.5A2.252 2.252 0 0121.75 6v15.75A2.252 2.252 0 0119.5 24h-15zm0-18.75a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-3.75A.75.75 0 0115 4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75H4.5z"}}),_c('circle',{attrs:{"cx":"12","cy":"4.125","r":"1.125"}}),_c('path',{attrs:{"d":"M6.75 11.25a.75.75 0 010-1.5H12a.75.75 0 010 1.5H6.75zM15 11.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15zM12 15a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H12zM6.75 15a.75.75 0 010-1.5H9c.414 0 .75.336.75.75s-3 .75-3 .75zM6.75 18.75a.75.75 0 010-1.5H12a.75.75 0 010 1.5H6.75zM15 18.75a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15z"}})])
          )
        }
      }
    