
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
            children.concat([_c('path',{attrs:{"d":"M12.17 10.258c-.4 0-.776-.156-1.059-.438L10.05 8.759a1.495 1.495 0 01-.001-2.121l2.652-2.652a.753.753 0 01.768-.181l3.181 1.061a.753.753 0 01.493.539.747.747 0 01-.199.702L13.23 9.819a1.487 1.487 0 01-1.06.439zm-1.06-2.56l1.06 1.06 2.855-2.854-1.591-.53-2.324 2.324z"}}),_c('path',{attrs:{"d":"M13.762 18.524a.749.749 0 01-.53-1.28 2.996 2.996 0 00.462-3.647l-1 .997a3.74 3.74 0 01-4.408.658l-5.325 2.663a.753.753 0 01-.865-.141.75.75 0 01-.141-.866l2.661-5.322a3.737 3.737 0 01-.444-1.766 3.72 3.72 0 011.099-2.651l5.9-5.9A3.726 3.726 0 0113.82.171c.581 0 1.163.138 1.684.4l1.823.911L18.593.216a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.913.913 3.312 1.656a.753.753 0 01.195 1.202 2.253 2.253 0 000 3.182l.408.408a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.408-.408a3.73 3.73 0 01-1.099-2.651c0-.66.167-1.293.488-1.854L14.83 1.913a2.26 2.26 0 00-1.012-.241c-.599 0-1.164.234-1.589.659l-5.9 5.9a2.23 2.23 0 00-.658 1.589c0 .427.119.84.345 1.197a.722.722 0 01.127.178c.066.086.126.155.187.216l2.121 2.121c.064.064.139.128.228.196a.747.747 0 01.166.118c.358.226.771.346 1.198.346.601 0 1.166-.234 1.591-.659l1.068-1.065a3.724 3.724 0 012.651-1.096 3.72 3.72 0 012.651 1.097l4.651 4.651a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-4.651-4.651a2.233 2.233 0 00-1.923-.632 4.455 4.455 0 01-.729 5.406.743.743 0 01-.53.22zm-9.46-2.958l2.708-1.354-1.354-1.354-1.354 2.708zM19.311 23.997a2.243 2.243 0 01-1.726-.805l-1.447-1.735a.738.738 0 00-.64-.265.743.743 0 00-.508.266l-1.445 1.733a2.244 2.244 0 01-1.725.805 2.245 2.245 0 01-1.726-.804l-1.447-1.735a.76.76 0 00-.644-.264.747.747 0 00-.508.266L6.05 23.192a2.25 2.25 0 01-3.45.002l-1.301-1.56a.75.75 0 01.575-1.23c.223 0 .433.098.576.27l1.3 1.559a.75.75 0 001.149 0L6.344 20.5a2.237 2.237 0 011.726-.807 2.254 2.254 0 011.726.807l1.446 1.734a.749.749 0 001.149-.001l1.445-1.733a2.237 2.237 0 011.729-.807 2.248 2.248 0 011.723.807l1.446 1.734a.75.75 0 001.148-.001l1.299-1.558a.75.75 0 111.152.96l-1.3 1.559a2.251 2.251 0 01-1.722.803z"}})])
          )
        }
      }
    