
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
            children.concat([_c('path',{attrs:{"d":"M12.002 23.998a1.8 1.8 0 01-1.282-.53L.532 13.281c-.342-.342-.53-.797-.53-1.282s.188-.94.53-1.282L10.72.529c.342-.343.798-.531 1.282-.531s.94.189 1.282.531l10.187 10.187c.343.342.531.798.531 1.282s-.189.939-.531 1.282L13.283 23.468c-.341.342-.797.53-1.281.53zm0-22.5a.31.31 0 00-.222.092L1.593 11.777a.314.314 0 000 .443L11.78 22.407a.311.311 0 00.222.091.31.31 0 00.221-.091L22.41 12.22a.308.308 0 00.092-.221.306.306 0 00-.092-.221L12.223 1.59a.308.308 0 00-.221-.092z"}}),_c('path',{attrs:{"d":"M9.001 17.249a.743.743 0 01-.53-.22.744.744 0 010-1.06l1.061-1.061a.748.748 0 00.219-.53V9.62c0-.197-.08-.39-.219-.53L8.471 8.029c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.061 1.061c.425.425.659.99.659 1.59v4.758c0 .6-.234 1.165-.658 1.59l-1.061 1.061a.745.745 0 01-.531.22zM15.001 17.249a.743.743 0 01-.53-.22l-1.061-1.061a2.237 2.237 0 01-.659-1.59V9.62c0-.601.234-1.166.659-1.59l1.061-1.061a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L14.47 9.09a.746.746 0 00-.219.53v4.757c0 .2.078.388.219.53l1.061 1.061a.744.744 0 010 1.06.75.75 0 01-.53.221z"}})])
          )
        }
      }
    