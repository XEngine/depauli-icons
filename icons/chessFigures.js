
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
            children.concat([_c('path',{attrs:{"d":"M16.5 23.25a.75.75 0 010-1.5h5.25a.755.755 0 00.747-.821L22 19.499a.715.715 0 01-.031-.123.747.747 0 00-.74-.626H15.75a.75.75 0 010-1.5h3.602l-1.261-6.934a4.092 4.092 0 01-2.432-.001l-.876 4.819a.75.75 0 11-1.475-.268l.963-5.299a4.136 4.136 0 01-1.521-3.192c0-2.275 1.851-4.125 4.125-4.125S21 4.101 21 6.375c0 1.234-.564 2.41-1.521 3.192l1.397 7.683h.353c1.076 0 1.999.76 2.207 1.811l.502 1.446a.715.715 0 01.031.123 2.252 2.252 0 01-2.219 2.62H16.5zm.375-19.5c-1.448 0-2.625 1.178-2.625 2.625S15.428 9 16.875 9 19.5 7.823 19.5 6.375 18.323 3.75 16.875 3.75z"}}),_c('path',{attrs:{"d":"M2.25 23.25a2.253 2.253 0 01-2.135-2.96l.5-1.5a2.24 2.24 0 011.447-1.43v-.46a9.825 9.825 0 012.342-6.4H2.208c-.59 0-1.145-.231-1.562-.648a2.193 2.193 0 01-.645-1.563c0-.589.23-1.142.646-1.559l3.48-3.48V1.5c0-.229.102-.442.281-.585a.758.758 0 01.631-.148l.366.081a8.13 8.13 0 016.401 7.992v.91c0 .2-.078.388-.219.53-1.122 1.123-1.416 2.573-.873 4.311.404 1.292 1.153 2.358 1.467 2.769a2.236 2.236 0 011.456 1.428l.5 1.501a2.252 2.252 0 01-2.135 2.96H2.25zm.5-4.5a.75.75 0 00-.712.513l-.5 1.5a.75.75 0 00.712.987H12a.752.752 0 00.711-.988l-.5-1.499a.749.749 0 00-.712-.513H2.75zm7.551-1.5c-1.063-1.77-2.438-5.094.004-7.799V8.84a6.649 6.649 0 00-4.678-6.38v1.1c0 .2-.078.389-.22.53l-3.7 3.7a.705.705 0 00.001 1.001.705.705 0 00.501.209H6.25a.752.752 0 01.469 1.336A8.37 8.37 0 003.562 16.9v.35h6.739z"}})])
          )
        }
      }
    