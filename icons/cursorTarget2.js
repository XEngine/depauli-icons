
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
            children.concat([_c('path',{attrs:{"d":"M12 23.95a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM12 8.95a.75.75 0 01-.75-.75V.7a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM.8 12.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H.8zM15.8 12.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('circle',{attrs:{"cx":"12","cy":"12","r":"1.15"}})])
          )
        }
      }
    