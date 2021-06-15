
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
            children.concat([_c('path',{attrs:{"d":"M8.247 16.502a8.163 8.163 0 01-2.824-.504C2.462 14.911.351 12.189.043 9.058-.173 6.866.478 4.72 1.876 3.017S5.252.257 7.445.042c.273-.027.549-.041.822-.041 1.922 0 3.727.648 5.22 1.875a8.193 8.193 0 012.975 5.569c.087.885 1.562 1.696 2.988 2.48.781.429 1.588.873 2.276 1.381a1.759 1.759 0 01-1.046 3.17l-.089-.002c-.85-.047-1.752-.218-2.625-.383-.91-.173-1.848-.35-2.607-.35-.624 0-1.046.118-1.29.36a8.277 8.277 0 01-5.822 2.401zm-1.558-1.684a6.723 6.723 0 002.224.151 6.769 6.769 0 004.101-1.933c.542-.539 1.305-.801 2.334-.801.888 0 1.864.185 2.897.381.825.156 1.679.318 2.427.359h.003a.263.263 0 00.181-.065.253.253 0 00.085-.177.254.254 0 00-.103-.22c-.606-.447-1.367-.866-2.104-1.271-1.852-1.018-3.597-1.978-3.762-3.65a6.705 6.705 0 00-3.745-5.397L6.689 14.818zM8.266 1.501a6.758 6.758 0 00-6.731 7.411 6.751 6.751 0 003.743 5.397L9.813 1.687a6.65 6.65 0 00-1.547-.186zM21.001 23.999c-1.654 0-3-1.346-3-3 0-1.405 1.985-4.35 2.383-4.926a.75.75 0 011.234-.001c.398.577 2.383 3.524 2.383 4.927 0 1.655-1.345 3-3 3zm0-6.132c-.886 1.416-1.5 2.688-1.5 3.132 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.443-.614-1.716-1.5-3.132z"}})])
          )
        }
      }
    