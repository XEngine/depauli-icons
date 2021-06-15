
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
            children.concat([_c('path',{attrs:{"d":"M22.564 21.057a6.25 6.25 0 01-3.786-1.281 5.287 5.287 0 01-3.402 1.236 5.277 5.277 0 01-3.378-1.212 5.298 5.298 0 01-6.778-.023 6.246 6.246 0 01-4.563 1.232.748.748 0 01-.652-.836.751.751 0 01.837-.652 4.728 4.728 0 003.886-1.296.74.74 0 01.515-.21l.038.001a.751.751 0 01.524.247 3.773 3.773 0 002.831 1.253 3.774 3.774 0 002.805-1.253.752.752 0 011.114.001 3.805 3.805 0 005.637-.001.746.746 0 01.53-.246l.034-.001a.75.75 0 01.512.21 4.731 4.731 0 003.887 1.296.75.75 0 01.183 1.488c-.252.03-.514.046-.774.047.001 0 .001 0 0 0zM2.25 18.014a.75.75 0 01-.75-.75v-1.5a2.252 2.252 0 012.25-2.25h.75v-2.25a.75.75 0 00-.75-.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25h4.439L6.164 3.483a.752.752 0 01.586-1.219.75.75 0 01.586.281l2.775 3.469h1.222a2.254 2.254 0 011.674.75l2.222 2.469c.018.018.034.037.051.056l3.803 4.225H22.5a1.49 1.49 0 011.062.442c.283.284.438.661.438 1.062a1.506 1.506 0 01-.237.807l-1.025 1.593a.747.747 0 01-1.037.225.751.751 0 01-.225-1.037l1.024-1.592H3.75a.75.75 0 00-.75.75v1.5a.75.75 0 01-.75.75zm14.813-4.5l-2.7-3H9.75a.75.75 0 010-1.5h3.263L11.89 7.766a.756.756 0 00-.559-.252H3.75a.75.75 0 000 1.5A2.252 2.252 0 016 11.264v2.25h11.063z"}})])
          )
        }
      }
    