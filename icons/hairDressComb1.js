
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
            children.concat([_c('path',{attrs:{"d":"M10.491 23.909a.752.752 0 01-.53-1.281l4.341-4.341-2.187-2.187-4.341 4.341a.744.744 0 01-1.06 0 .752.752 0 010-1.061l4.341-4.341-2.187-2.187-4.341 4.341a.744.744 0 01-1.06 0 .752.752 0 010-1.061l4.341-4.341-2.189-2.185-4.341 4.342a.743.743 0 01-.53.22.743.743 0 01-.53-.22.744.744 0 010-1.06L7.796 5.31a3.77 3.77 0 012.696-1.116c1.019 0 1.976.397 2.695 1.117a1.143 1.143 0 00.815.338c.363 0 .697-.164.917-.45l2.947-3.815A3.336 3.336 0 0120.835.017c.89.071 1.7.484 2.28 1.163a3.432 3.432 0 01-.742 4.991L18.71 8.995a1.162 1.162 0 00-.446.91 1.15 1.15 0 00.336.818 3.815 3.815 0 01.001 5.391l-7.578 7.577a.757.757 0 01-.532.218zm4.871-6.681l2.177-2.176c.9-.901.9-2.368 0-3.27l-.006-.006a2.636 2.636 0 01-.77-1.877 2.64 2.64 0 011.03-2.093l3.7-2.851c.908-.618 1.146-1.825.549-2.705a2.101 2.101 0 00-.086-.118 1.814 1.814 0 00-1.389-.628c-.443 0-.855.152-1.194.441a1.798 1.798 0 00-.303.331l-2.963 3.837a2.638 2.638 0 01-2.106 1.034 2.63 2.63 0 01-1.876-.777 2.296 2.296 0 00-1.634-.677v-.375.375c-.617 0-1.197.24-1.634.677L6.68 8.545l5.947 5.948.019.018.017.018 2.699 2.699z"}})])
          )
        }
      }
    