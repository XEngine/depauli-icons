
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
            children.concat([_c('path',{attrs:{"d":"M14.249 3.748a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25a.744.744 0 011.06 0l2.25 2.25c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22zM11.999 23.998a.743.743 0 01-.53-.22l-2.25-2.25a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22zM2.999 14.998a.743.743 0 01-.53-.22l-2.25-2.25a.744.744 0 010-1.06l2.25-2.25a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72a.752.752 0 010 1.061.746.746 0 01-.53.219zM20.999 14.998a.752.752 0 01-.53-1.281l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.25 2.25a.747.747 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M5.999 14.998a.747.747 0 01-.624-.334l-1.5-2.25a.75.75 0 010-.832l1.5-2.25a.749.749 0 011.36.269.747.747 0 01-.111.563L5.4 11.998l1.223 1.834a.751.751 0 01-.624 1.166zM17.999 14.998a.75.75 0 01-.624-1.166l1.223-1.834-1.223-1.834a.748.748 0 01.624-1.166c.251 0 .485.125.624.334l1.5 2.25a.75.75 0 010 .832l-1.5 2.25a.749.749 0 01-.624.334zM14.249 6.748a.753.753 0 01-.416-.126l-1.834-1.223-1.834 1.223a.749.749 0 11-.832-1.248l2.25-1.5a.75.75 0 01.832 0l2.25 1.5a.746.746 0 01.208 1.04.749.749 0 01-.624.334zM11.999 20.248a.743.743 0 01-.416-.126l-2.25-1.5a.751.751 0 01.832-1.248l1.833 1.222 1.834-1.223a.752.752 0 011.041.208.751.751 0 01-.208 1.04l-2.25 1.5a.734.734 0 01-.416.127zM11.249 13.498a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M15.749 15.75a.75.75 0 01-.75-.75v-3c0-1.654-1.346-3-3-3s-3 1.346-3 3v3a.75.75 0 01-1.5 0v-3c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    