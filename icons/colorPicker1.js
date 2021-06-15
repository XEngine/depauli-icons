
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
            children.concat([_c('path',{attrs:{"d":"M3.046 24.001c-.454 0-.881-.176-1.202-.497L.499 22.16a1.703 1.703 0 010-2.404l1.842-1.84.365-2.574a6.504 6.504 0 011.825-3.65l6.861-6.861-2.158-2.157c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.158 2.158 2.158-2.158C15.647.576 17.029.005 18.5.005s2.852.571 3.89 1.609c1.039 1.039 1.611 2.42 1.611 3.89s-.572 2.851-1.611 3.89l-2.157 2.158 2.157 2.157a.744.744 0 010 1.06.749.749 0 01-1.06 0l-2.157-2.157-6.861 6.863A6.498 6.498 0 018.663 21.3l-2.575.365-1.839 1.839a1.692 1.692 0 01-1.203.497zm2.546-11.247a4.993 4.993 0 00-1.401 2.801l-.4 2.821a.757.757 0 01-.212.425l-2.02 2.016a.2.2 0 000 .283l1.344 1.344a.2.2 0 00.284-.001l2.016-2.016a.757.757 0 01.425-.212l2.822-.4a4.984 4.984 0 002.8-1.401l6.861-6.863-5.659-5.659-6.86 6.862zm13.58-2.263l2.157-2.158c.756-.756 1.172-1.761 1.172-2.829s-.416-2.073-1.172-2.829c-.754-.754-1.759-1.17-2.829-1.17s-2.075.415-2.829 1.17l-2.158 2.158 5.659 5.658z"}})])
          )
        }
      }
    