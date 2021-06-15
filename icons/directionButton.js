
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
            children.concat([_c('path',{attrs:{"d":"M7.5 5.558a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.75-3.75c.342-.341.796-.53 1.28-.53a1.8 1.8 0 011.28.529l3.75 3.75c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-3.75-3.75a.308.308 0 00-.22-.09.309.309 0 00-.22.091l-3.75 3.75a.741.741 0 01-.53.22zM4.811 17.25a.743.743 0 01-.53-.22l-3.75-3.75a1.812 1.812 0 01-.007-2.553L4.281 6.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.747 3.747c-.062.063-.094.14-.094.223s.032.16.091.218l3.751 3.751a.744.744 0 010 1.06.742.742 0 01-.531.221zM12 23.996c-.484 0-.939-.188-1.28-.529l-3.75-3.75a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.75 3.75c.058.058.136.09.219.09a.307.307 0 00.22-.091l3.75-3.75a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75c-.341.342-.795.53-1.279.53zM19.189 17.25a.749.749 0 01-.53-1.28l3.75-3.75a.312.312 0 000-.44l-3.75-3.75c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a1.813 1.813 0 010 2.561l-3.75 3.75a.746.746 0 01-.53.219zM12 15.748c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}})])
          )
        }
      }
    