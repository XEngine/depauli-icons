
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
            children.concat([_c('path',{attrs:{"d":"M19.5 9c-2.068 0-3.75-1.682-3.75-3.75S17.432 1.5 19.5 1.5s3.75 1.682 3.75 3.75S21.568 9 19.5 9zm0-6c-1.241 0-2.25 1.009-2.25 2.25S18.259 7.5 19.5 7.5s2.25-1.009 2.25-2.25S20.741 3 19.5 3z"}}),_c('path',{attrs:{"d":"M18 22.5a.751.751 0 01-.744-.657l-.188-1.5a.746.746 0 01.651-.838.751.751 0 01.837.651l.106.844h1.676l.668-5.343A.751.751 0 0121.75 15h.75v-1.5c0-1.654-1.346-3-3-3-.645 0-1.284.213-1.8.6a.747.747 0 01-1.05-.15.75.75 0 01.15-1.05c.774-.58 1.733-.9 2.7-.9 2.481 0 4.5 2.019 4.5 4.5v2.25a.75.75 0 01-.75.75h-.838l-.668 5.343A.751.751 0 0121 22.5h-3zM4.5 9C2.432 9 .75 7.318.75 5.25S2.432 1.5 4.5 1.5s3.75 1.682 3.75 3.75S6.568 9 4.5 9zm0-6C3.259 3 2.25 4.009 2.25 5.25S3.259 7.5 4.5 7.5s2.25-1.009 2.25-2.25S5.741 3 4.5 3zM3 22.5a.751.751 0 01-.744-.657L1.588 16.5H.75a.75.75 0 01-.75-.75V13.5C0 11.019 2.019 9 4.5 9c.967 0 1.926.32 2.7.9a.75.75 0 01-.45 1.35.747.747 0 01-.45-.15 3.02 3.02 0 00-1.8-.6c-1.654 0-3 1.346-3 3V15h.75c.377 0 .697.282.744.657L3.662 21h1.676l.106-.843a.751.751 0 011.336-.368.745.745 0 01.152.554l-.188 1.5A.751.751 0 016 22.5H3zM12 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M10.5 22.5a.748.748 0 01-.74-.626L9.115 18H8.25a.75.75 0 01-.75-.75v-.75c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v.75a.75.75 0 01-.75.75h-.865l-.646 3.873a.747.747 0 01-.74.627H10.5zm2.365-1.5l.646-3.873a.747.747 0 01.74-.627H15c0-1.654-1.346-3-3-3s-3 1.346-3 3h.75c.368 0 .679.263.74.626L11.135 21h1.73z"}})])
          )
        }
      }
    