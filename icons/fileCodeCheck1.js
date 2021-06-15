
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24.004c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.532 24 17.254s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.417 20.433a1.485 1.485 0 01-1.057-.437l-1.502-1.502a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.905-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.874a1.497 1.497 0 01-1.201.6zM2.25 21.004A2.252 2.252 0 010 18.754v-16.5A2.252 2.252 0 012.25.004h10.629c.601 0 1.166.234 1.591.658l2.871 2.871c.425.426.659.991.659 1.592v3.129a.75.75 0 01-1.5 0V5.125a.758.758 0 00-.219-.531L13.41 1.723a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M9 11.254a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.25 2.25c.142.141.22.329.22.53s-.078.389-.22.53l-2.25 2.25a.743.743 0 01-.53.22zM6 11.254a.743.743 0 01-.53-.22l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    