
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
            children.concat([_c('path',{attrs:{"d":"M12 6.749a.717.717 0 01-.131-.012 1.127 1.127 0 01-.981-.973.783.783 0 01-.013-.136v-.004c0-.046.004-.091.013-.136.064-.508.473-.913.981-.973a.717.717 0 01.262 0 1.124 1.124 0 01.989 1.05.49.49 0 01.005.064v.004a.668.668 0 01-.007.077A1.128 1.128 0 0112 6.749zM6 13.503a.75.75 0 010-1.5h.808c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5H18a.75.75 0 010 1.5H6zm9.672-1.5c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"}}),_c('path',{attrs:{"d":"M11.999 23.901c-.261 0-.518-.068-.743-.197a21.007 21.007 0 01-5.142-4.209c-2.564-2.922-3.864-6.2-3.864-9.743 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.5 1.5 0 01-.744.197zM12 1.503c-4.549 0-8.25 3.701-8.25 8.25 0 1.861.595 8.272 8.25 12.649 7.655-4.372 8.25-10.787 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    