import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/arena',
        name: 'Order Arena',
        component: () => import('../views/OrederArena.vue')
      },
      {
        path: '/zone/:id/space/:spaceId',
        name: 'Insport',
        component: () => import('../components/insport.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/logIn/Login.vue'),
    children: [{
        path: '/login/',
        name: 'LoginForm',
        component: () => import('../components/login/loginForm.vue')
      },
      {
        path: '/login/register',
        name: 'RegisterForm',
        component: () => import('../components/login/register.vue')
      },
      {
        path: '/login/confirm',
        name: 'Confirm',
        component: () => import('../components/login/confirm.vue')
      },
      {
        path: '/login/business',
        name: 'Businuss',
        component: () => import('../components/login/buslogin.vue')
      },
      {
        path: '/login/business-register',
        name: 'BusinussRegister',
        component: () => import('../components/login/busregister.vue')
      },
      {
        path: '/login/business-confirm',
        name: 'BusinussConfirm',
        component: () => import('../components/login/busconfirm.vue')
      }
    ]
  },
  {
    path: '/personal/',
    name: 'Personal',
    component: () => import('../views/Personal.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/personal/',
        name: 'Personal Index',
        component: () => import('../components/personal/personal.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/personal/booking',
        name: 'Personal Booking',
        component: () => import('../components/personal/booking.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/personal/saved',
        name: 'Personal Saved',
        component: () => import('../components/personal/saved.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/personal/exit',
        name: 'Personal Exit',
        component: () => import('../components/personal/exit.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: () => import('../components/reserve.vue'),
    children: [{
        path: '/reserve',
        name: 'Reserve',
        component: () => import('../components/reserve/reserveIn.vue')
      },
      {
        path: 'time',
        name: 'Reserve Time',
        params: {
          price: '',
        },
        component: () => import('../components/reserve/reservetime.vue')
      },
      {
        path: '/reserve/pay',
        name: 'Reserve Pay',
        component: () => import('../components/reserve/reservepay.vue')
      }
    ]
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/business/',
        name: 'Business profile',
        component: () => import('../components/business/businesProfile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/business/zones',
        name: 'Business zones',
        component: () => import('../components/business/businesZones.vue'),
        meta: {
          requiresAuth: true
        },
        children: [{
            path: '/business/zones/',
            name: 'Business zones inner',
            component: () => import('../components/business/zones/zoneIndex.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: '/business/zones/sport/',
            name: 'Business zones sport',
            component: () => import('../components/business/zones/createZone.vue'),
            meta: {
              requiresAuth: true
            },
            children: [{
                path: '/business/zones/sport/',
                name: 'zone sport inner',
                component: () => import('../components/business/zones/sport/sportIndex.vue'),
                meta: {
                  requiresAuth: true
                }
              },
              {
                path: '/business/zones/sport/create',
                name: 'create sport form',
                component: () => import('../components/business/zones/sport/sportform.vue'),
                meta: {
                  requiresAuth: true
                }
              },
              {
                path: '/business/zones/sport/time',
                name: 'create sport time',
                component: () => import('../components/business/zones/sport/sportTime.vue'),
                meta: {
                  requiresAuth: true
                }
              },
              {
                path: '/business/zones/sport/responsible',
                name: 'create sport responsible',
                component: () => import('../components/business/zones/sport/responsible.vue'),
                meta: {
                  requiresAuth: true
                }
              }
            ]
          },
          {
            path: '/business/zones/complex/',
            name: 'Business zones complex',
            component: () => import('../components/business/zones/createComplex.vue'),
            meta: {
              requiresAuth: true
            },
            children: [{
                path: '/business/zones/complex/',
                name: 'zone complex inner',
                component: () => import('../components/business/zones/complex/complexIndex.vue'),
                meta: {
                  requiresAuth: true
                }
              },
              {
                path: '/business/zones/complex/create',
                name: 'create complex form',
                component: () => import('../components/business/zones/complex/complexform.vue'),
                meta: {
                  requiresAuth: true
                }
              }
            ]
          }
        ]
      },
      {
        path: '/business/employess/',
        name: 'Business employess',
        component: () => import('../components/business/Employes.vue'),
        meta: {
          requiresAuth: true
        },
        children: [{
            path: '/business/employess/',
            name: 'Business employess inner',
            component: () => import('../components/business/employess/employessIndex.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: '/business/employess/add',
            name: 'Business employess add',
            component: () => import('../components/business/employess/employessAdd.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: '/business/employess/config',
            name: 'Business employess config',
            component: () => import('../components/business/employess/employessConfig.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: '/business/employess/edit',
            name: 'Business employess edit',
            component: () => import('../components/business/employess/employessEdit.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: '/business/employess/monitoring',
            name: 'Business employess monitoring',
            component: () => import('../components/business/employess/employessMonitoring.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },
      {
        path: '/business/statistics/',
        name: 'Business statistics',
        component: () => import('../components/business/Statistics.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/business/notification/',
        name: 'Business notification',
        component: () => import('../components/business/Notification.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/business/booking/',
        name: 'Business booking',
        component: () => import('../components/business/Booking.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/business/exit/',
        name: 'Business exit',
        component: () => import('../components/business/exit.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }

]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
  routes
})


router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  let token = localStorage.getItem('token');
  if (to.meta.requiresAuth) {
    (token) ? next(): next(`${from.path}`);
    console.log('AUTH DA');
  } else if (to.name == "LoginForm" && token) {
    next('/personal/');
  } else {
    next();
    console.log('next da');
  }
})

export default router