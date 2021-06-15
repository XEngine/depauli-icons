
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.89 4.89a7.08 7.08 0 00-4.89 2 7.1 7.1 0 10-8.54 11.2h.07a7 7 0 007.1 0h.06a7.14 7.14 0 001.32-1 7.14 7.14 0 001.25.95h.07a7 7 0 007.1 0h.06a7.1 7.1 0 00-3.6-13.15zm-3.18 11.72A5.65 5.65 0 0113 16a7.08 7.08 0 000-8 5.59 5.59 0 013.17-1.55V12a5.62 5.62 0 01-2.46 4.61zm-3.41 0A5.62 5.62 0 017.86 12V6.45A5.59 5.59 0 0111 8a7.08 7.08 0 000 8 5.65 5.65 0 01-.71.61zm1-4.61a5.57 5.57 0 01.7-2.74 5.58 5.58 0 010 5.47 5.57 5.57 0 01-.72-2.73zm-9.8 0a5.61 5.61 0 014.86-5.55V12a5.62 5.62 0 01-2.44 4.61A5.6 5.6 0 011.5 12zm3.91 5.34a7.15 7.15 0 001.7-2.17 7.15 7.15 0 001.7 2.17 5.59 5.59 0 01-3.4 0zm9.78 0a7.15 7.15 0 001.7-2.17 7.15 7.15 0 001.7 2.17 5.59 5.59 0 01-3.4 0zm4.88-.73A5.62 5.62 0 0117.64 12V6.45a5.6 5.6 0 012.44 10.16z"}})])
          )
        }
      }
    