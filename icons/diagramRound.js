
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
            children.concat([_c('path',{attrs:{"d":"M13.232 23a10.844 10.844 0 01-7.716-3.203 10.76 10.76 0 01-3.005-5.671L1.38 15.86a.748.748 0 01-1.038.219.752.752 0 01-.219-1.039l2.32-3.558a.764.764 0 01.068-.087l.033-.037a.645.645 0 01.067-.057c.011-.009.028-.023.046-.034a.57.57 0 01.085-.047.697.697 0 01.126-.047.408.408 0 01.052-.014l.062-.009a.793.793 0 01.067-.006h.048a.99.99 0 01.266.06c.025.01.051.024.076.038a.29.29 0 01.042.023l3.558 2.319a.748.748 0 01-.41 1.379.743.743 0 01-.409-.122l-2.316-1.51a9.392 9.392 0 002.674 5.406 9.36 9.36 0 006.663 2.763h.19a9.201 9.201 0 006.521-2.781 9.197 9.197 0 002.65-6.573c-.051-5.056-4.205-9.17-9.26-9.17h-.094a.753.753 0 01-.758-.743.75.75 0 01.743-.757h.109c5.874 0 10.701 4.78 10.76 10.654a10.687 10.687 0 01-3.08 7.638 10.685 10.685 0 01-7.574 3.231h-.107l-.109.001z"}})])
          )
        }
      }
    