
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
            children.concat([_c('path',{attrs:{"d":"M20.34 16.089a.749.749 0 01-.302-1.437 4.098 4.098 0 002.185-2.278 4.097 4.097 0 00-.066-3.156 4.13 4.13 0 00-5.433-2.119c-.24.105-.47.234-.685.383a.744.744 0 01-.712.076.748.748 0 01-.451-.556 6.706 6.706 0 00-2.815-4.332 6.701 6.701 0 00-5.054-1.072c-1.774.33-3.313 1.329-4.333 2.816S1.272 7.695 1.602 9.468a6.782 6.782 0 001.249 2.834.75.75 0 01-1.198.903A8.29 8.29 0 01.127 9.741a8.2 8.2 0 011.31-6.177A8.193 8.193 0 016.731.123a8.243 8.243 0 019.37 5.611l.02-.009a5.61 5.61 0 014.304-.088 5.59 5.59 0 013.107 2.979c.604 1.375.635 2.904.09 4.303s-1.604 2.503-2.979 3.107a.758.758 0 01-.303.063z"}}),_c('path',{attrs:{"d":"M9.001 24.001a.75.75 0 010-1.5h1.5v-1.5h-3.75a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25h-3.75v1.5h1.5a.75.75 0 010 1.5h-4.5zm-2.25-10.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"}})])
          )
        }
      }
    