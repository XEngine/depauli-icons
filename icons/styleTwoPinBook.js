
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
            children.concat([_c('path',{attrs:{"d":"M12 16.503a.78.78 0 01-.336-.079l-4.499-2.25a.746.746 0 01-.415-.671v-6.75a.745.745 0 01.75-.75c.115 0 .231.027.335.078L12 8.165l4.165-2.082a.753.753 0 01.73.033.744.744 0 01.355.638v6.75a.746.746 0 01-.415.671l-4.5 2.25a.614.614 0 01-.086.034.77.77 0 01-.249.044zm.75-1.963l3-1.5V7.967l-3 1.5v5.073zm-1.5 0V9.467l-3-1.5v5.073l3 1.5z"}}),_c('path',{attrs:{"d":"M12 6.749a.746.746 0 01-.334-.079L8.643 5.163a.75.75 0 01.67-1.343L12 5.161l2.658-1.326a.75.75 0 11.67 1.342L12.335 6.67a.75.75 0 01-.335.079z"}}),_c('path',{attrs:{"d":"M11.999 23.901c-.261 0-.518-.068-.743-.197a21.007 21.007 0 01-5.142-4.209c-2.564-2.922-3.864-6.2-3.864-9.743 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.5 1.5 0 01-.744.197zM12 1.503c-4.549 0-8.25 3.701-8.25 8.25 0 1.861.595 8.272 8.25 12.649 7.655-4.372 8.25-10.787 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    