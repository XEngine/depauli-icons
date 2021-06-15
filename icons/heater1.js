
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75v-.75H6v.75a.75.75 0 01-1.5 0v-.768A1.752 1.752 0 013 20.75v-18A2.754 2.754 0 015.75 0h12.5A2.754 2.754 0 0121 2.75v18c0 .88-.653 1.611-1.5 1.732v.768a.75.75 0 01-.75.75zm.5-3a.25.25 0 00.25-.25V9.218c-.491.183-.993.348-1.5.493V21h1.25zm-2.75 0V10.082a20.574 20.574 0 01-4.514.418 20.318 20.318 0 01-4.487-.423V21H16.5zm-12-.25c0 .138.112.25.25.25H6V9.71c-.496-.143-.998-.31-1.5-.498V20.75zM12 9l.351.003c2.469 0 4.873-.469 7.149-1.394V3.75a2.252 2.252 0 00-2.25-2.25H6.75A2.252 2.252 0 004.5 3.75v3.859A18.896 18.896 0 0011.987 9H12z"}}),_c('path',{attrs:{"d":"M7.5 4.5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM8.25 7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    