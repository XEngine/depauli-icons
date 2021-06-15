
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
            children.concat([_c('path',{attrs:{"d":"M8.3 24.002c-.639 0-1.25-.274-1.676-.75a14.228 14.228 0 01-3.291-6.442.744.744 0 01-.068-.31v-.019a14.232 14.232 0 01-.262-2.72 5.501 5.501 0 01.429-2.04l.016-.036c.553-1.345 1.563-2.529 2.54-3.674 1.895-2.22 3.399-3.983 1.77-6.511H6A.75.75 0 016 0h12a.75.75 0 010 1.5h-1.756c-1.629 2.528-.125 4.291 1.769 6.511.98 1.149 1.994 2.337 2.552 3.7.282.689.423 1.356.432 2.041.001.907-.087 1.821-.262 2.723l.001.025a.743.743 0 01-.071.316 14.271 14.271 0 01-.993 2.946 14.213 14.213 0 01-2.296 3.49 2.253 2.253 0 01-1.676.75H8.3zM6.278 20.25a12.71 12.71 0 001.464 2.002.75.75 0 00.559.25H15.7a.75.75 0 00.558-.25 12.71 12.71 0 001.464-2.002H6.278zm12.203-1.5c.207-.488.385-.99.53-1.5h-2.025a1.24 1.24 0 01-1.239-1.239v-.261h-1.504v.261a1.24 1.24 0 01-1.239 1.239h-2.013a1.24 1.24 0 01-1.239-1.239v-.261H8.248v.261a1.24 1.24 0 01-1.239 1.239H4.988c.145.51.322 1.012.53 1.5h12.963zm.861-3a12.88 12.88 0 00.155-1.989 3.709 3.709 0 00-.158-1.011H4.66a3.796 3.796 0 00-.159 1.021c0 .657.051 1.323.155 1.979h2.092v-.261a1.24 1.24 0 011.239-1.239h2.026a1.24 1.24 0 011.239 1.239v.261h1.491v-.261a1.24 1.24 0 011.239-1.239h2.024c.684 0 1.241.556 1.241 1.239v.261h2.095zm-.711-4.5c-.493-.781-1.134-1.534-1.759-2.266-1.778-2.083-3.779-4.427-2.344-7.484H9.472c1.434 3.057-.567 5.402-2.344 7.485-.624.732-1.266 1.484-1.759 2.265h13.262z"}})])
          )
        }
      }
    