
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
            children.concat([_c('path',{attrs:{"d":"M5.32 9.775a.75.75 0 01-.508-1.302 10.485 10.485 0 017.106-2.789c2.609 0 5.12.979 7.072 2.758.148.135.235.319.244.52s-.06.392-.195.54a.749.749 0 01-1.059.049 8.992 8.992 0 00-6.062-2.365c-2.25 0-4.413.849-6.091 2.392a.75.75 0 01-.507.197zM20.99 4.786a.751.751 0 01-.478-.172 13.526 13.526 0 00-8.596-3.073 13.541 13.541 0 00-8.448 2.954.744.744 0 01-1.053-.116.745.745 0 01-.16-.551.746.746 0 01.276-.503A15.044 15.044 0 0111.917.042c3.491 0 6.884 1.213 9.552 3.416a.751.751 0 01-.479 1.328zM10.419 24.025a.657.657 0 01-.041-.002H8.919a2.252 2.252 0 01-2.25-2.25v-4.148l-.256.225a.749.749 0 01-1.059-.071.751.751 0 01.071-1.058l4.518-3.953c.545-.477 1.247-.74 1.975-.74s1.43.263 1.975.74l4.519 3.953a.746.746 0 01.071 1.058.75.75 0 01-1.058.07l-.256-.224v4.148a2.252 2.252 0 01-2.25 2.25h-1.462a.54.54 0 01-.038.002h-3zm4.5-1.502a.75.75 0 00.75-.75v-5.46l-2.763-2.417c-.272-.238-.623-.369-.988-.369s-.716.131-.988.369l-2.762 2.417v5.46c0 .414.336.75.75.75h.75v-2.248a2.252 2.252 0 012.25-2.25 2.252 2.252 0 012.25 2.25v2.248h.751zm-2.25 0v-2.248a.75.75 0 00-1.5 0v2.248h1.5z"}})])
          )
        }
      }
    