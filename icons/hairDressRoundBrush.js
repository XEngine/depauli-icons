
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
            children.concat([_c('path',{attrs:{"d":"M2.239 23.998a2.223 2.223 0 01-1.581-.653 2.24 2.24 0 01-.001-3.16l6.825-6.827-.17-.17a1.73 1.73 0 01-.51-1.231c0-.465.181-.902.51-1.231l.17-.17-.87-.87c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.87.87 1.741-1.741-.87-.87c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.87.87 1.741-1.741-.87-.87a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l.87.87 1.742-1.741-.87-.87a.744.744 0 010-1.06.749.749 0 011.06 0l.87.87.17-.17c.328-.329.766-.51 1.231-.51.465 0 .902.181 1.231.51l3.502 3.502c.329.329.51.766.51 1.231 0 .465-.181.902-.51 1.231l-.17.17.87.871a.744.744 0 010 1.06c-.142.142-.33.219-.53.219s-.389-.078-.53-.22l-.87-.871-1.741 1.741.871.871c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-1.06 0l-.871-.871-1.741 1.741.871.871a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.871-.871-1.741 1.741.871.871a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.871-.871-.171.171c-.328.328-.766.509-1.231.509s-.903-.181-1.231-.509l-.171-.171-6.823 6.823a2.226 2.226 0 01-1.581.654zm-.521-2.754a.738.738 0 000 1.04c.138.138.323.214.52.214s.382-.076.521-.215l6.823-6.826-1.039-1.04-6.825 6.827zm10.156-5.616a.24.24 0 00.341-.001l9.806-9.806a.237.237 0 00.071-.17.237.237 0 00-.071-.171L18.52 1.979c-.046-.046-.105-.071-.17-.071s-.124.024-.17.071l-3.484 3.484-.018.019-.02.019-6.285 6.284c-.046.046-.071.105-.071.171s.024.124.071.171l2.806 2.807.695.694z"}}),_c('path',{attrs:{"d":"M12.378 12.749c-.299 0-.581-.116-.793-.327l-.002-.002a1.124 1.124 0 01-.003-1.589l.002-.002c.212-.213.494-.33.796-.33a1.117 1.117 0 01.821.357.66.66 0 01.056.07 1.123 1.123 0 01-.068 1.479l-.012.012a.507.507 0 01-.056.048l-.025.021a1.123 1.123 0 01-.715.263h-.001zM15.198 9.928a1.116 1.116 0 01-.821-.357.864.864 0 01-.052-.064 1.113 1.113 0 01.076-1.497l.034-.032.043-.036.017-.012a1.122 1.122 0 011.479.058l.02.019a1.13 1.13 0 01.015 1.576l-.012.012a.46.46 0 01-.053.046 1.124 1.124 0 01-.746.287zM18.018 7.109a1.114 1.114 0 01-.827-.364.902.902 0 01-.046-.058 1.112 1.112 0 01.153-1.564l.018-.013a1.116 1.116 0 011.529.112c.018.02.036.043.053.067.354.448.32 1.085-.083 1.49l-.007.007a1.12 1.12 0 01-.787.324l-.003-.001z"}})])
          )
        }
      }
    