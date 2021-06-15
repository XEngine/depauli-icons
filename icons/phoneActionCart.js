
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
            children.concat([_c('path',{attrs:{"d":"M5.323 24a3.486 3.486 0 01-3.482-3.482V4.983A3.487 3.487 0 015.323 1.5h1.768a.75.75 0 010 1.5H5.323c-1.093 0-1.982.89-1.982 1.983V18h10.5v-3a.75.75 0 011.5 0v5.518A3.487 3.487 0 0111.858 24H5.323zm-1.982-3.482c0 1.093.889 1.982 1.982 1.982h6.535a1.986 1.986 0 001.983-1.982V19.5h-10.5v1.018z"}}),_c('path',{attrs:{"d":"M12.516 9.75c-.6 0-1.141-.356-1.378-.908L9.514 4.298a1.46 1.46 0 01.002-1.104 1.491 1.491 0 011.393-.944h9.157l.638-1.756a.753.753 0 01.962-.448.751.751 0 01.448.961l-2.82 7.757a1.51 1.51 0 01-1.4.987h-5.378zm5.373-1.5l1.632-4.5h-8.612l1.608 4.498 5.372.002zM13.534 12.75a1.123 1.123 0 01-.058-2.246l.058-.004c.62 0 1.125.505 1.125 1.125s-.505 1.125-1.125 1.125z"}}),_c('circle',{attrs:{"cx":"17.284","cy":"11.625","r":"1.125"}})])
          )
        }
      }
    