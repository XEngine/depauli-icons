
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
            children.concat([_c('path',{attrs:{"d":"M.96 7.67a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H.96z"}}),_c('path',{attrs:{"d":"M17.444 23.999a1.123 1.123 0 01-.795-.329l-5.829-5.828c-.213-.214-.329-.497-.328-.798s.119-.583.332-.795c.211-.21.491-.326.788-.327h2.099V9.17c0-4.864-1.195-7.5-7.5-7.5H.96a.75.75 0 010-1.5h14.45c3.579 0 5.803 2.224 5.803 5.803l-.003 9.947h1.415a1.125 1.125 0 01.841 1.872l-5.182 5.829a1.12 1.12 0 01-.84.378zm-.016-1.671l4.362-4.907h-1.33a.755.755 0 01-.75-.75l.003-10.697c0-1.607-.559-4.303-4.303-4.303h-3.013c2.447 1.725 2.813 4.714 2.813 7.5v7.5a.75.75 0 01-.75.75h-1.94l4.908 4.907z"}})])
          )
        }
      }
    