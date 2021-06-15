
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
            children.concat([_c('path',{attrs:{"d":"M10.492 5.625c-.299 0-.58-.116-.792-.327a1.114 1.114 0 01-.332-.794v-.003a1.113 1.113 0 01.327-.794c.212-.213.494-.331.794-.332h.004a1.12 1.12 0 011.114.994.717.717 0 010 .262 1.116 1.116 0 01-1.05.989.353.353 0 01-.063.005h-.002zM13.492 5.625a1.127 1.127 0 01-1.124-1.12v-.004a1.125 1.125 0 011.121-1.126h.004a1.12 1.12 0 011.114.995.796.796 0 010 .26c-.063.54-.5.955-1.044.989a.347.347 0 01-.068.005h-.003zM11.992 15c-.299 0-.581-.116-.793-.327a1.114 1.114 0 01-.331-.794v-.003a1.115 1.115 0 01.327-.795c.212-.213.494-.331.794-.332h.004c.571 0 1.047.427 1.114.995a.796.796 0 010 .26 1.117 1.117 0 01-1.049.99.27.27 0 01-.064.006h-.002zM11.992 18.75c-.299 0-.581-.116-.793-.327a1.114 1.114 0 01-.331-.794v-.003a1.115 1.115 0 01.327-.795c.212-.213.494-.331.794-.332h.004c.571 0 1.047.427 1.114.995a.796.796 0 010 .26 1.117 1.117 0 01-1.049.99.367.367 0 01-.064.005h-.002z"}}),_c('path',{attrs:{"d":"M11.993 24c-4.135 0-7.5-3.365-7.5-7.5 0-1.304.339-2.577.984-3.706L.317 9.149a.751.751 0 01.865-1.225l1.811 1.279V6.75a.75.75 0 011.5 0v3.512l1.853 1.309a7.46 7.46 0 012.716-1.974A5.265 5.265 0 016.743 5.25c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25c0 1.751-.888 3.38-2.319 4.348a7.489 7.489 0 012.716 1.974l1.867-1.316V6.75a.75.75 0 011.5 0v2.449l1.811-1.276a.753.753 0 011.046.181.75.75 0 01-.181 1.045l-5.172 3.645a7.465 7.465 0 01.983 3.706c-.001 4.135-3.366 7.5-7.501 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm0-9c-2.068 0-3.75 1.682-3.75 3.75S9.925 9 11.993 9s3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}})])
          )
        }
      }
    