
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
            children.concat([_c('path',{attrs:{"d":"M12 22.5a.75.75 0 01-.75-.75V15h-9.5C.785 15 0 14.215 0 13.25v-10C0 2.285.785 1.5 1.75 1.5h20.5c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75h-9.5v6.75a.75.75 0 01-.75.75zM1.75 3a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-10a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M16.5 11.25a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.969-.97H4.5a.75.75 0 010-1.5h12.439l-.97-.97a.746.746 0 01.001-1.06.749.749 0 011.06 0l2.25 2.25a.74.74 0 01.163.245l.01.026a.748.748 0 010 .517l-.006.016a.764.764 0 01-.168.257L17.03 11.03a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    