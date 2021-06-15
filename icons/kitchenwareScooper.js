
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
            children.concat([_c('path',{attrs:{"d":"M10.374 23.933a2.98 2.98 0 01-2.463-1.28 2.98 2.98 0 01-.497-2.242.702.702 0 01.023-.096l1.749-5.502-5.501 1.749a.978.978 0 01-.097.024 2.982 2.982 0 01-2.243-.497 2.983 2.983 0 01-1.233-1.937 2.977 2.977 0 01.497-2.241 2.983 2.983 0 011.937-1.233l8.836-1.558a.405.405 0 01.042-.005 2.968 2.968 0 012.028.373L14.48 8.46a5.24 5.24 0 01-1.049-3.14c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25-2.355 5.25-5.25 5.25a5.24 5.24 0 01-3.14-1.049l-1.028 1.028a2.962 2.962 0 01.367 2.073l-1.557 8.832a2.98 2.98 0 01-1.234 1.937c-.507.354-1.1.542-1.715.542zm-1.49-3.217c-.055.38.035.761.256 1.076a1.489 1.489 0 001.233.639c.306 0 .602-.094.857-.272.328-.23.547-.573.617-.968l1.112-6.306a2.964 2.964 0 01-2.201-.06l-1.874 5.891zm-6.076-8.562c-.395.07-.738.289-.968.617-.23.328-.318.726-.249 1.121a1.494 1.494 0 001.475 1.24c.073 0 .146-.005.219-.016l5.89-1.873a2.981 2.981 0 01-.06-2.201l-6.307 1.112zm9.124-1.585c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5c0-.828-.673-1.5-1.5-1.5zm6.75-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}}),_c('path',{attrs:{"d":"M18.682 7.569a.75.75 0 010-1.5c.414 0 .75-.336.75-.75a.75.75 0 011.5 0c0 1.24-1.009 2.25-2.25 2.25z"}})])
          )
        }
      }
    