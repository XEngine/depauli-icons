
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.95 10.59a4.55 4.55 0 002.49 5.3 4.17 4.17 0 001.67.34c1.22 0 2.91-.51 4.7-2.57a2.73 2.73 0 002.42 2.58.75.75 0 000-1.5c-.54 0-1-.89-1-1.66V6.5A5.71 5.71 0 0010.74.76a5.64 5.64 0 00-5.19 3.81.75.75 0 101.45.49 4.12 4.12 0 013.78-2.8 4.19 4.19 0 014 4.24v.34c-7.01-.64-8.53 2.68-8.83 3.75zM9 14.52A3.07 3.07 0 017.39 11c.61-2.09 3.33-3 7.37-2.64v2.84C12.92 14 10.79 15.29 9 14.52zM.32 18.26a.75.75 0 00.28 1 23.25 23.25 0 0011.41 3 23.31 23.31 0 009.08-1.85l-1 1.69a.75.75 0 00.26 1 .74.74 0 00.39.11.75.75 0 00.64-.36L23.67 19a1566.6 1566.6 0 01.09-.27.71.71 0 000-.12.72.72 0 000-.2.71.71 0 000-.08v-.05a.72.72 0 00-.1-.12l-.07-.08a.75.75 0 00-.28-.15l-4.36-1.2a.75.75 0 10-.4 1.45l2.47.68a21.79 21.79 0 01-9.02 1.9A21.75 21.75 0 011.34 18a.75.75 0 00-1.02.26z"}})])
          )
        }
      }
    