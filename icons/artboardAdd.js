
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
            children.concat([_c('path',{attrs:{"d":"M4.5 2.25a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM.75 5.25a.75.75 0 010-1.5h.75a.75.75 0 010 1.5H.75zM4.5 24a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM.75 20.25a.75.75 0 010-1.5h.75a.75.75 0 010 1.5H.75zM19.5 2.25a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM22.5 5.25a.75.75 0 010-1.5h.75a.75.75 0 010 1.5h-.75zM19.5 24a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM22.5 20.25a.75.75 0 010-1.5h.75a.75.75 0 010 1.5h-.75zM4.5 20.25a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15zm14.25-1.5V5.25H5.25v13.5h13.5z"}}),_c('path',{attrs:{"d":"M12 17.25A5.256 5.256 0 016.75 12 5.256 5.256 0 0112 6.75 5.256 5.256 0 0117.25 12 5.256 5.256 0 0112 17.25zm0-9A3.754 3.754 0 008.25 12 3.754 3.754 0 0012 15.75 3.754 3.754 0 0015.75 12 3.754 3.754 0 0012 8.25z"}}),_c('path',{attrs:{"d":"M12 14.25a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    