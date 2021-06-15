
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
            children.concat([_c('path',{attrs:{"d":"M10.5 10.498c-.4 0-.776-.156-1.059-.438L7.72 8.341a.751.751 0 011.06-1.062l1.72 1.719 5.47-5.468a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.487 1.487 0 01-1.06.439z"}}),_c('path',{attrs:{"d":"M5.631 23.999a.749.749 0 01-.707-1 7.47 7.47 0 014.572-4.572 7.528 7.528 0 011.75-.393v-1.563A10.46 10.46 0 011.5 6V2.249a2.252 2.252 0 012.25-2.25h16.5a2.252 2.252 0 012.25 2.25V6a10.46 10.46 0 01-9.754 10.471v1.56a7.468 7.468 0 012.483.699 7.448 7.448 0 013.839 4.269.75.75 0 01-.707 1H5.631zm11.565-1.5a5.91 5.91 0 00-2.614-2.415 5.942 5.942 0 00-2.526-.589c-.021.002-.04.004-.061.004a.471.471 0 01-.048-.003 6.01 6.01 0 00-1.952.345 5.936 5.936 0 00-3.199 2.658h10.4zM12.018 15C16.972 14.99 21 10.956 21 6V2.249a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75V6c0 4.952 4.024 8.986 8.974 9a.323.323 0 01.044 0z"}})])
          )
        }
      }
    