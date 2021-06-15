
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
            children.concat([_c('path',{attrs:{"d":"M12.751 16.497a.752.752 0 01-.53-1.281l2.47-2.47h-7.19a.75.75 0 010-1.5h7.189l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-3.749 3.749a.736.736 0 01-.529.221z"}}),_c('path',{attrs:{"d":"M12.001 23.247c-6.203 0-11.25-5.047-11.25-11.25S5.798.747 12.001.747s11.25 5.047 11.25 11.25-5.047 11.25-11.25 11.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75z"}})])
          )
        }
      }
    