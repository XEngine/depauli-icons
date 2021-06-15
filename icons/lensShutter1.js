
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.229 0-8.191-2.272-10.345-5.93a.742.742 0 01-.084-.145A11.975 11.975 0 010 12c0-2.073.543-4.12 1.569-5.922a.768.768 0 01.083-.144C3.807 2.273 7.769 0 12 0l.027.001c4.215.009 8.166 2.278 10.315 5.924a.724.724 0 01.087.15A11.98 11.98 0 0124 12c0 2.073-.543 4.121-1.57 5.923a.71.71 0 01-.083.143C20.194 21.727 16.231 24 12 24zm-3.496-9.713c-.166 1.352-.063 2.723.307 3.955.402 1.34 1.313 3.158 3.37 4.255a10.428 10.428 0 007.256-3.093 8.258 8.258 0 01-1.802.198 9.402 9.402 0 01-2.166-.26c-2.816-.666-5.463-2.592-6.965-5.055zM3 17.398a10.613 10.613 0 006.304 4.745c-.875-.951-1.522-2.114-1.929-3.471-.828-2.759-.482-6.029.901-8.559-1.256.533-2.393 1.309-3.276 2.246-.959 1.017-2.077 2.713-2 5.039zm9.235-1.227c1.088.82 2.327 1.415 3.579 1.711a7.883 7.883 0 001.813.217 6.617 6.617 0 003.549-1.004 10.489 10.489 0 00.959-7.839c-.386 1.237-1.07 2.38-2.043 3.413-1.984 2.105-4.975 3.433-7.857 3.502zm-9.41-9.266a10.479 10.479 0 00-.96 7.838c.386-1.236 1.07-2.38 2.044-3.413 1.984-2.105 4.977-3.434 7.861-3.501-1.086-.819-2.323-1.414-3.574-1.71a7.88 7.88 0 00-1.819-.218 6.614 6.614 0 00-3.552 1.004zM12 9.326c-.972 0-1.87.531-2.342 1.386l-.021.038A2.677 2.677 0 0012 14.674a2.68 2.68 0 002.343-1.387l.347.147-.331-.177c.206-.385.315-.82.315-1.257A2.677 2.677 0 0012 9.326zm2.697-7.47c.875.952 1.522 2.114 1.929 3.471.828 2.759.481 6.029-.901 8.559 1.255-.532 2.392-1.308 3.276-2.245.959-1.017 2.077-2.713 2-5.039a10.621 10.621 0 00-6.304-4.746zM6.373 4.398c.709 0 1.438.088 2.168.26 2.814.667 5.457 2.593 6.955 5.053.166-1.352.062-2.722-.307-3.954-.402-1.34-1.313-3.158-3.37-4.255a10.434 10.434 0 00-7.253 3.092 8.344 8.344 0 011.807-.196z"}})])
          )
        }
      }
    