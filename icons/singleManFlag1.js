
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75h9.75c.305 0 .577.182.693.463a.745.745 0 01-.163.817L8.561 6l3.22 3.22a.75.75 0 01-.53 1.281H1.5v12.75A.75.75 0 01.75 24zM9.439 9L6.97 6.53c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L9.439 3H1.5v6h7.939zM18.75 7.5C16.682 7.5 15 5.818 15 3.75S16.682 0 18.75 0s3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25S17.509 6 18.75 6 21 4.991 21 3.75 19.991 1.5 18.75 1.5zM16.5 24a.748.748 0 01-.746-.676l-.683-6.824h-.821a.75.75 0 01-.75-.75v-3c0-2.895 2.355-5.25 5.25-5.25S24 9.855 24 12.75v3a.75.75 0 01-.75.75h-.821l-.683 6.825A.747.747 0 0121 24h-4.5zm3.821-1.5l.683-6.825A.747.747 0 0121.75 15h.75v-2.25c0-1.781-1.288-3.32-3-3.672v5.172a.75.75 0 01-1.5 0V9.078c-1.712.352-3 1.892-3 3.672V15h.75c.387 0 .708.291.746.676l.683 6.824h3.142z"}})])
          )
        }
      }
    