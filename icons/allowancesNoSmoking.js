
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
            children.concat([_c('path',{attrs:{"d":"M14.25 15a.75.75 0 010-1.5H15V12a.75.75 0 011.5 0v1.5h5.25a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H19.5a.75.75 0 010-1.5h2.25A2.252 2.252 0 0124 9.75v3A2.252 2.252 0 0121.75 15h-7.5zM3.75 15a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H4.5v4.5h.75c.414 0 .75.336.75.75S3.75 15 3.75 15zM.75 15a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM.75 24a.752.752 0 01-.53-1.281l22.5-22.5a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-22.5 22.5a.743.743 0 01-.53.22zM.75 6A.75.75 0 010 5.25C0 4.009 1.009 3 2.25 3S4.5 1.991 4.5.75a.75.75 0 011.5 0A3.754 3.754 0 012.25 4.5c-.414 0-.75.336-.75.75S1.164 6 .75 6z"}})])
          )
        }
      }
    