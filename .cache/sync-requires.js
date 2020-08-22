const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/pages/404.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/pages/blog.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/pages/index.tsx"))),
  "component---src-pages-resume-tsx": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/pages/resume.tsx"))),
  "component---src-templates-blog-post-index-js": hot(preferDefault(require("/Users/darlingtonpadgett/Desktop/eldarlin/Portfolio-final/portfolio-site/src/templates/BlogPost/index.js")))
}

