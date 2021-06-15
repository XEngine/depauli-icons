
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M12.01 18.75c-3.357 0-5.626-2.515-6.446-3.597a1.484 1.484 0 01.003-1.804c.824-1.08 3.104-3.593 6.443-3.593 3.343 0 5.62 2.515 6.444 3.596a1.483 1.483 0 01-.002 1.807c-.818 1.078-3.087 3.591-6.442 3.591zm0-7.494c-2.669 0-4.562 2.101-5.252 3.005.685.888 2.568 2.989 5.252 2.989 2.677 0 4.557-2.09 5.246-2.996-.694-.908-2.581-2.998-5.246-2.998z"}}),_c('circle',{attrs:{"cx":"12.01","cy":"14.253","r":"1.125"}})])
          )
        }
      }
    