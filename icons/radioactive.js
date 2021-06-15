
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
            children.concat([_c('path',{attrs:{"d":"M12.025 13.238c-1.241 0-2.25-1.01-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM17.22 11.738a1.506 1.506 0 01-1.484-1.285 3.723 3.723 0 00-1.778-2.669 1.509 1.509 0 01-.526-2.035l2.8-4.848c.019-.032.035-.059.054-.086a1.486 1.486 0 011.249-.664c.295 0 .582.087.829.251l.007.005a12.812 12.812 0 015.626 9.731 1.491 1.491 0 01-.438 1.164 1.488 1.488 0 01-1.056.436H17.22zm.311-10.086l-2.8 4.847a5.22 5.22 0 012.489 3.739h5.28l-.001-.014a11.298 11.298 0 00-4.965-8.572h-.003zM1.548 11.738a1.493 1.493 0 01-1.126-.511 1.491 1.491 0 01-.37-1.088A12.812 12.812 0 015.757.358a1.505 1.505 0 012.053.54l2.801 4.85a1.505 1.505 0 01-.524 2.034 3.739 3.739 0 00-1.775 2.671 1.506 1.506 0 01-1.483 1.284H1.548zM6.514 1.654a11.315 11.315 0 00-4.966 8.585h5.28A5.226 5.226 0 019.313 6.5L6.514 1.654zM12.025 23.73c-1.951 0-3.896-.452-5.625-1.308l-.083-.044a1.494 1.494 0 01-.7-.912 1.492 1.492 0 01.15-1.139l3.367-5.833a.755.755 0 01.65-.375c.136 0 .269.037.385.107a3.612 3.612 0 003.71-.001.747.747 0 011.034.268l3.368 5.833.048.09c.176.358.202.764.073 1.144s-.398.686-.757.862a12.71 12.71 0 01-5.62 1.308zm-4.958-2.653l.014.009a11.22 11.22 0 004.944 1.145c1.721 0 3.436-.399 4.959-1.153l-.006-.012-3.009-5.211c-.615.253-1.28.385-1.944.385s-1.328-.132-1.943-.385l-3.015 5.222z"}})])
          )
        }
      }
    