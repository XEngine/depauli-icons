
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
            children.concat([_c('path',{attrs:{"d":"M16.5 22.25a6.025 6.025 0 01-4.841-2.46.756.756 0 01-.085-.12 5.963 5.963 0 01-1.069-3.227l-.001-.054-.002-.022-.003-.117c0-3.308 2.692-6 6-6a6.012 6.012 0 015.949 5.228l.001.011A6.006 6.006 0 0116.5 22.25zm-2.205-2.082c.67.379 1.43.582 2.205.582a4.527 4.527 0 004.176-2.828 2.252 2.252 0 01-2.714-2.202c0-1.183.918-2.156 2.079-2.244A4.497 4.497 0 0016.5 11.75a4.526 4.526 0 00-4.136 2.732c.308-.103.632-.157.957-.157a3.007 3.007 0 012.741 4.218 2.98 2.98 0 01-1.767 1.625zm-1.553-1.449a1.506 1.506 0 001.948-.783 1.506 1.506 0 00-1.372-2.112c-.533 0-1.034.29-1.301.747.055.771.305 1.51.725 2.148zm7.47-3.749a.75.75 0 10.75.75c0-.026-.005-.05-.008-.074l-.018-.115a.749.749 0 00-.724-.561zM7.484 9.045a.743.743 0 01-.53-.22L4.833 6.704c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.121 2.121c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22zM11.197 10.636a.743.743 0 01-.53-.22L9.606 9.355c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.061 1.061c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22zM13.96 9.157a.748.748 0 01-.527-.216l-6.46-6.385a.751.751 0 011.054-1.068l6.46 6.385a.752.752 0 01-.527 1.284zM8.657 14.46a.748.748 0 01-.532-.221L1.719 7.801a.743.743 0 01-.219-.53c0-.2.079-.389.221-.53a.745.745 0 01.529-.219c.201 0 .39.078.532.221l6.407 6.438a.751.751 0 01-.532 1.279z"}})])
          )
        }
      }
    