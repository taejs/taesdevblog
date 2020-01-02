import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import merge from "deepmerge"
import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"

export default merge(blogTheme, wavesTheme)