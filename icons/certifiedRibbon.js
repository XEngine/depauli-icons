
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.747.747 0 01-.635-.35l-3.668-5.82a8.965 8.965 0 01-3.394 0l-3.668 5.82a.749.749 0 01-1.346-.163L3.926 19.4l-3.323-.665a.754.754 0 01-.559-.482.757.757 0 01.125-.728l3.748-4.581a9.035 9.035 0 01-.91-3.953 8.938 8.938 0 012.638-6.36A8.945 8.945 0 0112.004 0a9.045 9.045 0 014.087.982.747.747 0 01.328 1.01.75.75 0 01-1.01.326 7.519 7.519 0 00-3.402-.818 7.451 7.451 0 00-5.302 2.193 7.451 7.451 0 00-2.197 5.299 7.446 7.446 0 002.193 5.301A7.445 7.445 0 0012 16.492c4.135 0 7.498-3.361 7.5-7.492A.75.75 0 0121 9a8.998 8.998 0 01-.917 3.945l3.747 4.579a.752.752 0 01-.434 1.21l-3.322.666-1.362 4.087A.75.75 0 0118 24zm-.21-2.49l.999-2.997a.75.75 0 01.564-.498l2.526-.505-2.621-3.203a9.057 9.057 0 01-4.057 3.097l2.589 4.106zM4.647 18.015a.75.75 0 01.564.498l.999 2.997 2.588-4.106a9.042 9.042 0 01-4.056-3.097L2.121 17.51l2.526.505z"}}),_c('path',{attrs:{"d":"M12 11.689c-.4 0-.776-.156-1.059-.438L9.22 9.53C9.078 9.389 9 9.2 9 9s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22L12 10.19l5.469-5.47a.747.747 0 011.061 0c.142.141.22.33.22.53s-.078.389-.22.53l-5.47 5.47a1.487 1.487 0 01-1.06.439z"}})])
          )
        }
      }
    