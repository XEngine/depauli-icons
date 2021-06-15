
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
            children.concat([_c('path',{attrs:{"d":"M3.055 14.408c-.154 0-.307-.021-.454-.064-.655-.188-1.127-.747-1.33-1.574-.166-.679-.132-1.493.096-2.29a4.91 4.91 0 01.653-1.418 2.727 2.727 0 01-1.225-.831.746.746 0 01.095-1.056.751.751 0 011.057.094 1.214 1.214 0 001.441.327.755.755 0 01.905.222 1.53 1.53 0 01.33.095.752.752 0 01.885.29 1.212 1.212 0 001.393.482.75.75 0 11.471 1.424 2.695 2.695 0 01-1.482.061 4.892 4.892 0 01-.197 1.549c-.229.798-.63 1.506-1.131 1.994-.466.455-.987.695-1.507.695zm.957-5.115c-.252 0-.883.483-1.203 1.6-.155.543-.185 1.097-.081 1.52.073.3.2.464.286.488a.136.136 0 00.036.005c.092 0 .263-.07.465-.268.312-.304.581-.79.736-1.333.335-1.171.004-1.949-.205-2.009-.009-.001-.021-.003-.034-.003zM7.267 7.545a2.614 2.614 0 01-2.114-1.073 2.191 2.191 0 01-.552-.156 2.615 2.615 0 01-3.044-.829.746.746 0 01-.152-.554.746.746 0 01.744-.657c.233 0 .449.105.593.29.158.203.375.342.618.402a2.24 2.24 0 011.005-2.665l-.226-1.212a.748.748 0 01.737-.888c.361 0 .671.258.738.612l.226 1.214c.183.029.362.08.532.153l.835-.91a.746.746 0 011.06-.045.748.748 0 01.046 1.059l-.835.91a2.241 2.241 0 01-.557 2.791 1.132 1.132 0 00.738-.012.753.753 0 01.963.446.751.751 0 01-.446.962 2.624 2.624 0 01-.909.162zM5.491 3.5a.75.75 0 100 1.5.75.75 0 000-1.5zM20.697 16.969c-.584 0-1.158-.317-1.615-.892-.435-.547-.744-1.3-.87-2.12a4.967 4.967 0 010-1.554 2.692 2.692 0 01-1.454-.245.75.75 0 01.643-1.355 1.22 1.22 0 001.344-.202 1.494 1.494 0 011.073-2.542 1.502 1.502 0 011.341 2.17 1.223 1.223 0 001.339-.213.75.75 0 011.021 1.098c-.374.348-.834.58-1.329.676.224.439.383.942.467 1.484.126.82.058 1.631-.193 2.284-.305.795-.844 1.29-1.517 1.393a1.72 1.72 0 01-.25.018zm-.547-5.206c-.088.014-.234.16-.345.448-.156.407-.197.96-.111 1.518.086.558.291 1.073.562 1.415.191.24.36.325.447.325.105-.015.25-.161.361-.45.156-.407.197-.96.111-1.518-.176-1.142-.751-1.74-1.01-1.74l-.015.002z"}}),_c('path',{attrs:{"d":"M17.516 9.642c-.419 0-.838-.103-1.212-.297a.751.751 0 01.691-1.332 1.105 1.105 0 00.73.106 2.237 2.237 0 01-.202-2.839l-.714-1.007a.742.742 0 01-.127-.56.746.746 0 01.739-.624c.243 0 .472.118.613.316l.713 1.006c.178-.051.362-.079.549-.085l.378-1.175a.748.748 0 01.944-.484.75.75 0 01.484.944l-.378 1.176c.554.423.887 1.083.887 1.788 0 .342-.078.675-.225.978.251-.028.484-.14.665-.32a.747.747 0 011.06.002.751.751 0 01-.002 1.061 2.621 2.621 0 01-3.128.44 2.217 2.217 0 01-.564.088 2.615 2.615 0 01-1.901.818zm1.844-3.816a.75.75 0 100 1.5.75.75 0 000-1.5zM13.515 21.11a.753.753 0 01-.354-.089c-1.18-.634-1.727-1.472-1.668-2.556a2.25 2.25 0 01-.331-.467c-1.038-.311-1.642-1.108-1.843-2.429a.75.75 0 01.738-.862c.369 0 .689.274.745.637.057.374.148.626.25.8a2.25 2.25 0 012.443-1.418l.584-1.086a.75.75 0 111.32.71l-.585 1.087c.125.137.232.29.319.454l1.221-.185a.755.755 0 01.854.629.751.751 0 01-.63.854l-1.221.184a2.247 2.247 0 01-2.162 1.824c.129.153.338.322.675.503a.75.75 0 01-.355 1.41zm-.365-4.913a.75.75 0 100 1.5.75.75 0 000-1.5zM6.204 23.745c-.716 0-1.298-.267-1.639-.751-.392-.557-.41-1.289-.048-2.06.297-.634.834-1.245 1.512-1.723a4.99 4.99 0 011.397-.693 2.727 2.727 0 01-.433-1.42.751.751 0 011.5-.026c.009.546.385 1.022.914 1.157a.74.74 0 01.459.344.738.738 0 01.105.394 1.408 1.408 0 01.204.29c.32.108.537.427.505.779-.05.544.272 1.059.784 1.252a.747.747 0 01.438.966.754.754 0 01-.968.437 2.727 2.727 0 01-1.19-.884A4.862 4.862 0 018.62 22.89c-.783.551-1.641.855-2.415.855h-.001zm2.243-3.891c-.047 0-.095.002-.146.007-.434.041-.948.251-1.409.576-.461.325-.832.738-1.017 1.133-.131.28-.135.487-.084.56.041.058.185.116.414.116.453 0 1.032-.218 1.551-.583.452-.318.806-.706.997-1.091.16-.322.15-.536.104-.601-.041-.058-.183-.117-.41-.117z"}}),_c('circle',{attrs:{"cx":"10.697","cy":"18.675","r":"1.5"}}),_c('circle',{attrs:{"cx":"4.665","cy":"7.134","r":"1.5"}})])
          )
        }
      }
    