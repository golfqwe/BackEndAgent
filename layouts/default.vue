<template>
  <body data-sidebar="dark">
    <!-- Begin page -->
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
              <a href="/" class="logo logo-dark">
                <span class="logo-sm">
                  <img src="~/assets/images/logo-sm-dark.png" alt="logo-sm-dark" height="35">
                </span>
                <span class="logo-lg">
                  <img src="~/assets/images/logo-dark.png" alt="logo-dark" height="35">
                </span>
              </a>

              <a href="/" class="logo logo-light">
                <span class="logo-sm">
                  <img src="~/assets/images/logo-sm-light.png" alt="logo-sm-light" height="35">
                </span>
                <span class="logo-lg">
                  <img src="~/assets/images/logo-light.png" alt="logo-light" height="35">
                </span>
              </a>
            </div>

            <button
              id="vertical-menu-btn"
              type="button"
              class="btn btn-sm px-3 font-size-24 header-item waves-effect"
            >
              <i class="ri-menu-2-line align-middle" />
            </button>

            <!-- App Search-->
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input type="text" class="form-control" placeholder="Search...">
                <span class="ri-search-line" />
              </div>
            </form>
          </div>

          <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ms-2">
              <button
                id="page-header-search-dropdown"
                type="button"
                class="btn header-item noti-icon waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="ri-search-line" />
              </button>
              <div
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form class="p-3">
                  <div class="mb-3 m-0">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search ...">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                          <i
                            class="ri-search-line"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="dropdown d-none d-sm-inline-block">
              <button
                type="button"
                class="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img class="" src="~/assets/images/flags/us.jpg" alt="Header Language" height="16">
              </button>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-1">
              <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                <i class="ri-fullscreen-line" />
              </button>
            </div>

            <div class="dropdown d-inline-block user-dropdown">
              <button
                id="page-header-user-dropdown"
                type="button"
                class="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="rounded-circle header-profile-user"
                  src="~/assets/images/users/avatar-2.jpg"
                  alt="Header Avatar"
                >
                <span class="d-none d-xl-inline-block ms-1">User name</span>
                <i class="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <!-- item-->
                <a class="dropdown-item text-danger" href="auth-login"><i
                  class="ri-shut-down-line align-middle me-1 text-danger"
                /> Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- ========== Left Sidebar Start ========== -->
      <div class="vertical-menu">
        <div data-simplebar class="h-100">
          <!--- Sidemenu -->
          <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul id="side-menu" class="metismenu list-unstyled">
              <li class="menu-title">
                Menu Backend
              </li>

              <li>
                <NuxtLink to="/" class="waves-effect">
                  <i class="ri-dashboard-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Dashboard</span>
                </NuxtLink>
              </li>

              <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                  <i class="ri-account-circle-line" />
                  <span>Profile</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <NuxtLink to="/profile/accountInformation">
                      Account information
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                  <i class="ri-group-2-line" />
                  <span>Member</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">List master Agent</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li>
                        <NuxtLink to="/member/listMasterAgent/">
                          List master Agent
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/listMasterAgent/addNewAgent">
                          Add new master agent
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">PT/comm Summary</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li>
                        <NuxtLink to="/member/PT/sport">
                          Sport
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/PT/livecasino">
                          Live Casino
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/PT/lottery">
                          Lottery
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/PT/game">
                          Game
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">Report</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li>
                        <NuxtLink to="/member/report/">
                          Winlose
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/report/winlose-senior">
                          Win/lose-Senior
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/report/winlose-master">
                          Win/lose-Master
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/report/winlose-agent">
                          Win/lose-Agent
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/member/report/winlose-player">
                          Win/lose-Player
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">Top Player</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li>
                        <NuxtLink to="/member/topPlayer/">
                          Top Winner/loser/Valid Amount
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <NuxtLink to="/member/performance">
                      Performance
                    </NuxtLink>
                  </li>
                </ul>
              </li><li>
                <NuxtLink to="/check-deposit-withdraw" class="waves-effect">
                  <i class="ri-money-dollar-box-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Check Deposit - Withdraw</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/invoice" class="waves-effect">
                  <i class="ri-bill-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Invoice</span>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/log" class="waves-effect">
                  <i class="ri-edit-box-fill" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Logs</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Sidebar -->
        </div>
      </div>
      <!-- Left Sidebar End -->

      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->

      <div id="result" class="main-content">
        <Nuxt />
      </div>
      <!-- end main content-->

      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              {{ new Date().getFullYear() }} © Backend
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay" />
  </body>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: '/libs/jquery/jquery.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/metismenu/metisMenu.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/simplebar/simplebar.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/js/app.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        }
        // {
        //   src: '/js/ajax.js',
        //   async: true,
        //   defer: true,
        //   callback: () => { this.$forceUpdate() }
        // }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css'
        },
        {
          rel: 'stylesheet',
          href: 'libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
