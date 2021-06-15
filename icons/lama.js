
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.75.75 0 010-1.5H18v-.838c-1.631-.393-2.452-1.995-2.795-2.912h-3.318A3.982 3.982 0 019 21.636v1.614a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h.75v-.856c-1.351-.385-2.158-1.819-2.243-4.007C3 15.861 3 12.77 3 10.5c0-.263.025-.527.076-.79C1.988 9.597 0 9.162 0 7.5c0-1.498 1.415-2.37 2.263-2.759A2.175 2.175 0 012.25 4.5a3.036 3.036 0 012.993-3l.326-.005.052-.001c.454-.008.83-.014 1.129-.015V.75c0-.405.33-.742.735-.75l.078-.001.079.001c.983.021 1.9.425 2.583 1.137s1.047 1.646 1.025 2.629V9h7.5C21.275 9 24 10.72 24 13.5c0 2.966-2.228 3-2.25 3v.75c0 1.299 0 3.94-2.25 4.422v1.578a.75.75 0 01-.75.75h-1.5zm-1.5-6.75c.344 0 .643.233.727.566.006.024.649 2.434 2.273 2.434 1.276 0 1.5-.967 1.5-3v-3a.75.75 0 011.5 0V15c.067-.002.75-.064.75-1.5 0-1.853-1.947-3-3.75-3H10.5a.75.75 0 01-.75-.75v-6a2.185 2.185 0 00-.608-1.576 2.158 2.158 0 00-.892-.566v.642a.75.75 0 01-.894.736c-.008 0-.102-.007-.448-.007-.411 0-.953.01-1.236.014l-.048-.374.006.375L5.25 3a1.525 1.525 0 00-1.5 1.507c0 .132.029.268.086.399C4.123 5.553 5.011 6 6 6c.333 0 .621.214.718.533a.746.746 0 01-.302.841C6.399 7.386 4.5 8.698 4.5 10.5c0 2.16 0 4.849 1.916 6.126a.749.749 0 01.334.624c0 .896.144 2.976 1.476 3a2.488 2.488 0 002.276-2.301.751.751 0 01.748-.699h4.5zM2.848 6.123C2.275 6.397 1.5 6.916 1.5 7.5c0 .436 1.217.723 2.126.748.231-.405.5-.756.753-1.042-.623-.239-1.155-.615-1.531-1.083z"}})])
          )
        }
      }
    