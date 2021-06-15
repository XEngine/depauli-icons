
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3v-6.792a6.806 6.806 0 01-4.077-1.958 6.785 6.785 0 01-1.999-4.828c0-.237.013-.477.037-.714l.723-6.865A1.497 1.497 0 017.426 0h9.149c.77 0 1.412.578 1.492 1.344l.723 6.865a6.836 6.836 0 01-6.04 7.5V22.5h3a.75.75 0 010 1.5h-7.5zM6.703 8.366a5.293 5.293 0 001.531 4.323 5.276 5.276 0 004.323 1.531 5.292 5.292 0 003.583-1.946 5.29 5.29 0 001.158-3.91l-.723-6.865-5.46.001-.45 2.25H12a.746.746 0 01.727.932l-.75 3a.748.748 0 01-1.371.203.744.744 0 01-.084-.568l.518-2.067H9.75a.75.75 0 01-.736-.897L9.585 1.5H7.426l-.723 6.866z"}})])
          )
        }
      }
    