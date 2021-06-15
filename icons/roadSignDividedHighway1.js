
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
            children.concat([_c('path',{attrs:{"d":"M12 23.584c-.468 0-.907-.182-1.237-.512L.927 13.236a1.753 1.753 0 010-2.475L10.763.925c.33-.331.77-.513 1.237-.513.468 0 .907.182 1.238.513l9.836 9.836a1.753 1.753 0 010 2.475l-9.836 9.836c-.33.33-.77.512-1.238.512zm0-21.671a.245.245 0 00-.177.073l-9.836 9.836a.252.252 0 000 .354l9.836 9.836c.047.047.11.073.177.073s.13-.026.177-.073l9.836-9.836c.048-.048.073-.109.073-.177s-.025-.129-.073-.177l-9.836-9.836A.245.245 0 0012 1.913z"}}),_c('path',{attrs:{"d":"M12 11.249a2.252 2.252 0 01-2.25-2.25v-3a.75.75 0 011.5 0v3a.75.75 0 001.5 0v-3a.75.75 0 011.5 0v3a2.252 2.252 0 01-2.25 2.25zM9 17.249a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-1.499-1.5a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l.22.22V13.06l-1.28-1.28a.744.744 0 01-.22-.53V9a.75.75 0 011.5 0v1.939l1.28 1.28c.14.14.22.333.22.53v1.939l.22-.22a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.5 1.5a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046zM15 17.249a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-1.5-1.5a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l.22.22V12.75c0-.198.08-.391.22-.53l1.28-1.28V8.999a.75.75 0 011.5 0v2.25c0 .2-.078.389-.22.53l-1.28 1.28v1.629l.22-.22a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.5 1.5a.74.74 0 01-.245.163l-.026.01a.72.72 0 01-.258.047z"}})])
          )
        }
      }
    