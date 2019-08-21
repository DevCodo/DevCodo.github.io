import Price from '../Price';
import Cart from '../Cart';
import Bill from '../Bill';
import Post from '../Post';
import Error404 from '../error/Error404';

let routes = [
  {
    name: 'home',
    url: '/',
    component: Price,
    exact: true
  },
  {
    name: 'cart',
    url: '/cart',
    component: Cart,
    exact: true
  },
  {
    name: 'bill',
    url: '/bill',
    component: Bill,
    exact: true
  },
  {
    name: 'blogPost',
    url: '/news/:id',
    component: Post,
    exact: true
  },
  {
    url: '/**',
    component: Error404,
  },
]

export let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty('name')) {
    routesMap[route.name] = route.url;
  }
})

export function urlBuild(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name].slice(0, routesMap[name].indexOf(":")) + params;

  return url;
}

export default routes;