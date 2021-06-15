
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
            children.concat([_c('path',{attrs:{"d":"M14.25 3a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.75-.75A.743.743 0 0115 .75c.2 0 .389.078.53.22.142.141.22.33.22.53s-.078.389-.22.53l-.75.75a.743.743 0 01-.53.22zM9.75 3a.743.743 0 01-.53-.22l-.75-.75c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53A.743.743 0 019 .75c.2 0 .389.078.53.22l.75.75c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22zM12 2.25a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"12","cy":"5.25","r":"1.125"}}),_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75V7.5a3.754 3.754 0 013.75-3.75.75.75 0 010 1.5A2.252 2.252 0 006 7.5v12.75a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25V7.5a2.252 2.252 0 00-2.25-2.25.75.75 0 010-1.5A3.754 3.754 0 0119.5 7.5v12.75A3.754 3.754 0 0115.75 24h-7.5z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    