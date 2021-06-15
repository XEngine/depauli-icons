
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V6h-21v17.25a.75.75 0 01-1.5 0V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v19.5a.75.75 0 01-.75.75zM22.5 4.5v-.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75v.75h21z"}}),_c('path',{attrs:{"d":"M12 24a7.414 7.414 0 01-3.2-.719l-.02-.009a7.558 7.558 0 01-3.561-3.571A7.418 7.418 0 014.5 16.5C4.5 12.365 7.865 9 12 9c1.116 0 2.192.242 3.198.718l.018.008a7.56 7.56 0 013.554 3.551l.01.021a7.413 7.413 0 01.72 3.203C19.5 20.635 16.135 24 12 24zm-1.553-1.705A5.971 5.971 0 0012 22.5c3.308 0 6-2.692 6-6 0-.527-.069-1.047-.205-1.553l-7.348 7.348zm-3.614-2.75a6.008 6.008 0 002.122 2.122l3.576-3.576-2.122-2.122-3.576 3.576zM12 10.5c-3.308 0-6 2.692-6 6 0 .528.069 1.048.205 1.553l7.348-7.348A5.96 5.96 0 0012 10.5zm1.591 6.531l3.576-3.576a5.997 5.997 0 00-2.122-2.121l-3.576 3.576 2.122 2.121z"}})])
          )
        }
      }
    