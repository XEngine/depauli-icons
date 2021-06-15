
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
            children.concat([_c('path',{attrs:{"d":"M19.035 24.001a.75.75 0 01-.542-.232 8.938 8.938 0 00-6.307-2.766l-.174-.002a8.972 8.972 0 00-6.506 2.769.754.754 0 01-1.061.021.746.746 0 01-.021-1.06 10.449 10.449 0 017.574-3.226c2.891 0 5.583 1.146 7.578 3.226a.743.743 0 01.209.535.745.745 0 01-.231.526.746.746 0 01-.519.209zM6.75 12c-.022 0-2.25-.034-2.25-3 0-4.106 6.795-8.681 7.084-8.874a.753.753 0 01.832 0C12.706.319 19.5 4.894 19.5 9c0 2.966-2.228 3-2.25 3H6.75zM12 1.666C9.184 3.684 6 6.754 6 9c0 1.438.686 1.498.765 1.5h10.482c.066-.002.753-.064.753-1.5 0-2.249-3.183-5.317-6-7.334zM11.992 18.75c-2.96 0-5.511-2.211-5.934-5.142a.746.746 0 01.636-.85.752.752 0 01.849.635 4.523 4.523 0 004.453 3.856c.214 0 .431-.016.645-.046a4.525 4.525 0 003.81-3.81.753.753 0 01.851-.635.74.74 0 01.492.293c.12.16.17.358.141.557a6.035 6.035 0 01-5.08 5.08 6.088 6.088 0 01-.863.062z"}}),_c('path',{attrs:{"d":"M12 9.75a.75.75 0 01-.75-.75V7.5h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0V6h.75a.75.75 0 010 1.5h-.75V9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    