
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.81a.748.748 0 01-.74-.626L5.365 10.31H3.75a.75.75 0 010-1.5h1.542a6.755 6.755 0 017.699-5.927l.178-.912A2.249 2.249 0 0115.987.28l3.718 1.06c.193.055.353.182.45.357s.121.378.066.57a.753.753 0 01-.927.514l-3.719-1.06-.042-.01a.74.74 0 00-.567.098.746.746 0 00-.33.469l-.194.991a6.817 6.817 0 014.264 5.54h1.543a.75.75 0 010 1.5H18.67l-1.426 12.833a.75.75 0 01-.746.667H8.25zm7.579-1.5l.667-6h-8.61l1 6h6.943zm.833-7.5l.5-4.5h-4.095l-.88 4.5h4.475zm-6.004 0l.88-4.5H6.885l.75 4.5h3.023zm6.537-6a5.244 5.244 0 00-3.045-4.039l-.79 4.039h3.835zm-5.363 0l.871-4.453A5.262 5.262 0 006.805 8.81h5.027z"}})])
          )
        }
      }
    