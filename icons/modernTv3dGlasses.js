
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
            children.concat([_c('path',{attrs:{"d":"M5.25 18.001A5.256 5.256 0 010 12.751v-3c0-.444.13-.874.375-1.243l3.02-5.335A5.3 5.3 0 018.25.001a.75.75 0 010 1.5 3.797 3.797 0 00-3.493 2.303.65.65 0 01-.037.075L2.669 7.501h18.662l-2.052-3.623a.724.724 0 01-.034-.069 3.798 3.798 0 00-3.495-2.308.75.75 0 010-1.5 5.298 5.298 0 014.854 3.172l3.022 5.338c.245.368.374.797.374 1.24v3a5.264 5.264 0 01-.519 2.279.752.752 0 01-1 .351.75.75 0 01-.351-1.002 3.743 3.743 0 00.371-1.626V9.751a.728.728 0 00-.096-.357 8.231 8.231 0 01-.047-.082.751.751 0 00-.606-.311H2.25a.751.751 0 00-.607.312l-.032.057-.015.024a.728.728 0 00-.096.357v3a3.754 3.754 0 003.75 3.75h3.129a.76.76 0 00.46-.158l1.175-2.206c.211-.396.532-.718.929-.928a2.248 2.248 0 013.043.929l.133.248a.75.75 0 01-1.322.708l-.134-.25a.75.75 0 00-1.326-.002L10.1 17.165a.741.741 0 01-.132.178 2.234 2.234 0 01-1.59.658H5.25z"}}),_c('path',{attrs:{"d":"M15.7 24.001a2.255 2.255 0 01-2.168-1.65.747.747 0 01.722-.951.75.75 0 01.722.55.752.752 0 001.254.33.75.75 0 00-.531-1.28.75.75 0 01-.001-1.5.75.75 0 10-.723-.944.75.75 0 01-1.449-.388 2.254 2.254 0 012.755-1.591 2.254 2.254 0 011.592 2.756 2.244 2.244 0 01-.497.917c.365.409.575.945.575 1.5 0 .601-.233 1.166-.658 1.591a2.24 2.24 0 01-1.591.66H15.7zM20.48 24.014c-.117 0-.237-.006-.354-.017a.748.748 0 01-.677-.747v-6a.75.75 0 01.677-.747 3.499 3.499 0 013.817 3.055c.004.029.006.06.006.092v1.2a.742.742 0 01-.006.094 3.497 3.497 0 01-3.463 3.07zm.47-1.556a1.994 1.994 0 001.5-1.657v-1.1a1.993 1.993 0 00-1.5-1.657v4.414z"}})])
          )
        }
      }
    