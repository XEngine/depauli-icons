
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.934L4.5 12.645V5.75A2.754 2.754 0 017.25 3H9v-.75A2.252 2.252 0 0111.25 0h1.5A2.252 2.252 0 0115 2.25V3h1.75a2.754 2.754 0 012.75 2.75v6.895l2.816 9.855h.934a.75.75 0 010 1.5H.75zm17.025-1.5L12 20.24 6.225 22.5h11.55zm2.838-.5l-1.318-4.614-5.237 2.049L20.613 22zM3.387 22l6.555-2.565-5.237-2.049L3.387 22zM12 18.63l6.881-2.692-.263-.921a2.723 2.723 0 01-1.868.733h-9.5a2.723 2.723 0 01-1.868-.733l-.263.921L12 18.63zM6 13c0 .689.561 1.25 1.25 1.25h9.5c.689 0 1.25-.561 1.25-1.25v-1H6v1zm12-2.5V8.25H6v2.25h12zm0-3.75v-1c0-.689-.561-1.25-1.25-1.25h-9.5C6.561 4.5 6 5.061 6 5.75v1h12zM13.5 3v-.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V3h3z"}})])
          )
        }
      }
    