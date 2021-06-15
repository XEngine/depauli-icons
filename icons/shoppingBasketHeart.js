
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
            children.concat([_c('path',{attrs:{"d":"M17.248 24a.753.753 0 01-.541-.231l-5.114-5.335a3.763 3.763 0 01-.696-4.347 3.752 3.752 0 012.184-1.893 3.766 3.766 0 013.864.912l.305.305.305-.305A3.739 3.739 0 0120.222 12a3.778 3.778 0 013.377 2.086 3.769 3.769 0 01-.707 4.359l-5.103 5.324a.753.753 0 01-.541.231zm-2.972-10.502c-.244 0-.487.04-.722.118a2.273 2.273 0 00-.889 3.768l4.583 4.781 4.573-4.77a2.28 2.28 0 00.01-3.23 2.26 2.26 0 00-1.609-.667 2.26 2.26 0 00-1.609.667l-.835.835a.744.744 0 01-1.06 0l-.835-.835a2.276 2.276 0 00-1.607-.667z"}}),_c('path',{attrs:{"d":"M4.312 18a2.19 2.19 0 01-2.116-1.728L.061 7.286a2.198 2.198 0 01.234-1.677A2.226 2.226 0 012.148 4.5h1.289L7.718.22c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L5.558 4.5h11.378l-3.219-3.218a.752.752 0 01.53-1.281c.2 0 .388.078.53.219l4.281 4.28h1.263a2.241 2.241 0 011.582.709 2.218 2.218 0 01.526 2.097l-.295 1.237a.748.748 0 01-.903.556.751.751 0 01-.556-.904l.3-1.256a.726.726 0 00-.168-.706.723.723 0 00-.511-.233H2.174a.734.734 0 00-.658.921l2.143 9.019a.696.696 0 00.667.56h3.547a.75.75 0 010 1.5H4.312z"}})])
          )
        }
      }
    