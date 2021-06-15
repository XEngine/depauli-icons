
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75v-.75H6v.75a.75.75 0 01-1.5 0v-.768A1.752 1.752 0 013 20.75v-7c0-.88.653-1.61 1.5-1.732V7.25A2.754 2.754 0 017.25 4.5H9v-3h-.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H15v3h1.75a2.754 2.754 0 012.75 2.75v4.768c.847.122 1.5.852 1.5 1.732v7c0 .88-.653 1.611-1.5 1.732v.768a.75.75 0 01-.75.75zm-14-10.5a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25H4.75zM18 12V9H6v3h12zm0-4.5v-.25C18 6.561 17.439 6 16.75 6h-9.5C6.561 6 6 6.561 6 7.25v.25h12zm-4.5-3v-3h-3v3h3z"}}),_c('path',{attrs:{"d":"M12 19.5c-1.241 0-2.25-1.009-2.25-2.25S10.759 15 12 15s2.25 1.009 2.25 2.25S13.241 19.5 12 19.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    