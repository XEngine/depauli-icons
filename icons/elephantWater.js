
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
            children.concat([_c('path',{attrs:{"d":"M19.6 22c-.977 0-1.706-.486-2.291-.876-.503-.335-.936-.624-1.459-.624s-.956.289-1.458.624c-.586.39-1.314.876-2.292.876-.977 0-1.706-.486-2.291-.876-.502-.335-.936-.624-1.459-.624s-.957.289-1.459.624c-.585.39-1.314.876-2.291.876s-1.706-.486-2.291-.876c-.502-.335-.936-.624-1.459-.624a.75.75 0 010-1.5c.977 0 1.706.486 2.291.876.503.335.936.624 1.459.624s.957-.289 1.459-.624C6.645 19.486 7.373 19 8.35 19s1.706.486 2.291.876c.502.335.936.624 1.459.624s.956-.289 1.458-.624c.586-.39 1.315-.876 2.292-.876s1.706.486 2.291.876c.503.335.936.624 1.459.624.514 0 .903-.271 1.395-.615.566-.394 1.27-.885 2.255-.885a.75.75 0 010 1.5c-.514 0-.903.271-1.395.615-.566.394-1.269.885-2.255.885zM3.851 18.25a.81.81 0 01-.146-.014c-.044-.009-4.427-.948-3.598-7.579.414-4.051 3.39-7.297 7.402-8.069a1.497 1.497 0 011.732 1.109l.385 1.543c.097.39.036.794-.171 1.137a1.492 1.492 0 01-.924.683l-.028.006a4.116 4.116 0 00-2.838 2.413c1.103-.397 2.181-.604 3.155-.604 1.215 0 2.165.322 2.769.935.816-.359 1.559-.577 2.211-.649.16-.018.317-.027.466-.027 1.048 0 1.652.438 1.993.866h2.592c3.225 0 5.15 2.243 5.15 6a.75.75 0 01-1.501 0c0-3.915-2.287-4.5-3.65-4.5h-1.986c.302 1.513.245 3.832-.807 5.143-.488.608-1.145.929-1.899.929-.237 0-.486-.032-.739-.095a.75.75 0 11.363-1.455c.134.034.259.051.372.051.298 0 .531-.117.732-.368.845-1.053.714-3.779.293-4.619-.067-.135-.225-.451-.919-.451a2.83 2.83 0 00-.296.017c-.787.087-1.673.467-2.278.769a.753.753 0 01-1.006-.336c-.224-.449-.896-.707-1.843-.707-1.155 0-2.576.38-3.9 1.042a.748.748 0 01-1.084-.724 5.64 5.64 0 014.3-5.089l-.367-1.545a7.64 7.64 0 00-6.189 6.765c-.654 5.233 2.281 5.913 2.407 5.939a.752.752 0 01.581.885.754.754 0 01-.734.599z"}}),_c('circle',{attrs:{"cx":"8.725","cy":"13.375","r":"1.125"}}),_c('path',{attrs:{"d":"M17.372 6.25c-1.027 0-1.893-.519-2.656-.977-.655-.393-1.272-.763-1.885-.763-.167 0-.328.026-.491.081a.752.752 0 01-.846-.273.746.746 0 01.008-.888 6.405 6.405 0 015.1-2.55c2.145 0 3.332 1.295 3.527 2.498.198 1.22-.504 2.285-1.79 2.713a3.076 3.076 0 01-.967.159zm-3.464-3.057c.578.193 1.101.506 1.579.793.654.392 1.271.763 1.886.763.167 0 .328-.026.492-.081.567-.189.86-.581.784-1.05-.097-.597-.779-1.239-2.046-1.239a4.86 4.86 0 00-2.695.814z"}})])
          )
        }
      }
    