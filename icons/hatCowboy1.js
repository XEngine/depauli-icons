
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
            children.concat([_c('path',{attrs:{"d":"M12 19.5c-3 0-5.487-.55-8.063-1.784l-.041-.019c-1.101-.53-2.233-1.189-3.562-2.072a.742.742 0 01-.32-.477.75.75 0 011.151-.772c.903.6 1.696 1.083 2.457 1.495l.66-6.334A5.611 5.611 0 019.874 4.5h4.251a5.612 5.612 0 015.593 5.036l.66 6.334c.76-.412 1.554-.895 2.457-1.495a.749.749 0 011.04.21c.111.167.15.367.111.563a.746.746 0 01-.32.477c-1.328.883-2.459 1.541-3.56 2.071a1.047 1.047 0 01-.048.023C17.487 18.95 15 19.5 12 19.5zm-6.944-2.92C7.239 17.548 9.453 18 12 18c2.547 0 4.761-.452 6.944-1.42l-.718-6.888A4.113 4.113 0 0014.126 6H9.874a4.114 4.114 0 00-4.1 3.692l-.718 6.888z"}})])
          )
        }
      }
    