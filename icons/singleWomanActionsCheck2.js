
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75a.75.75 0 010 1.5C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25a.75.75 0 011.5 0A6.758 6.758 0 0117.25 24z"}}),_c('path',{attrs:{"d":"M17.25 19.189c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.743.743 0 01-.22-.53.749.749 0 011.28-.53l1.72 1.719 5.469-5.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-5.47 5.47a1.494 1.494 0 01-1.059.438zM12.483 10.008a.746.746 0 01-.641-.359 6.594 6.594 0 01-.691-1.552C10.234 9.144 8.919 9.75 7.5 9.75s-2.734-.606-3.652-1.653a6.546 6.546 0 01-.691 1.551.746.746 0 01-1.031.251.751.751 0 01-.25-1.031 5.137 5.137 0 00.75-2.856V4.987l.002-.04a1.137 1.137 0 01-.003-.072C2.625 2.187 4.812 0 7.5 0s4.875 2.187 4.875 4.875c0 .025-.001.05-.003.074l.001.037v1a5.172 5.172 0 00.75 2.881.75.75 0 01-.64 1.141zM4.28 5.879a3.374 3.374 0 006.439.004 6.235 6.235 0 01-3.22-1.511A6.238 6.238 0 014.28 5.879zM7.5 2.555c.218 0 .425.095.567.26a4.699 4.699 0 002.769 1.568A3.391 3.391 0 007.5 1.5a3.391 3.391 0 00-3.335 2.879 4.701 4.701 0 002.768-1.565.75.75 0 01.567-.259z"}}),_c('path',{attrs:{"d":"M.75 18a.75.75 0 01-.75-.75c.003-4.134 3.369-7.498 7.503-7.498a7.484 7.484 0 012.941.6.745.745 0 01.402.41.748.748 0 01-.696 1.03c-.101 0-.2-.02-.294-.06a5.964 5.964 0 00-2.349-.48 5.967 5.967 0 00-4.246 1.755A5.96 5.96 0 001.5 17.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    