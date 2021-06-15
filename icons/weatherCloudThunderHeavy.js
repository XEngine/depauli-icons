
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
            children.concat([_c('path',{attrs:{"d":"M7.907 23.934a.752.752 0 01-.53-1.281l1.72-1.72h-2.69a.747.747 0 01-.693-.463.745.745 0 01.163-.817l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72h2.689c.305 0 .577.182.693.463a.745.745 0 01-.163.817l-3 3a.739.739 0 01-.529.22zM15.407 23.934a.752.752 0 01-.53-1.281l1.72-1.72h-2.689a.75.75 0 01-.53-1.28l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72h2.689a.75.75 0 01.53 1.28l-3 3a.743.743 0 01-.53.22zM7.907 14.934a4.524 4.524 0 01-1.949-.442 4.464 4.464 0 01-2.297-2.561 4.463 4.463 0 01.187-3.435 4.524 4.524 0 014.059-2.552c.37 0 .736.046 1.093.136a6.757 6.757 0 016.414-4.646 6.71 6.71 0 014.779 1.983 6.706 6.706 0 011.971 4.775 6.705 6.705 0 01-1.983 4.771 6.706 6.706 0 01-4.767 1.971H7.907zm7.526-1.5a5.205 5.205 0 003.689-1.534 5.21 5.21 0 001.542-3.71 5.215 5.215 0 00-1.533-3.714 5.215 5.215 0 00-3.711-1.542 5.256 5.256 0 00-5.163 4.268l-.001.007c-.064.32-.097.649-.099.977 0 .214.014.432.04.647a.751.751 0 11-1.488.195 6.632 6.632 0 01-.019-1.475 2.925 2.925 0 00-.784-.109 3.014 3.014 0 00-2.706 1.7 2.973 2.973 0 00-.124 2.289 2.976 2.976 0 001.531 1.707c.401.192.849.294 1.294.294h7.532z"}})])
          )
        }
      }
    