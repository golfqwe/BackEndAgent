<template>
  <div>
    <!-- Begin page -->
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
              <a href="index" class="logo logo-dark">
                <span class="logo-sm">
                  <img src="~/assets/images/logo-sm-dark.png" alt="logo-sm-dark" height="35">
                </span>
                <span class="logo-lg">
                  <img src="~/assets/images/logo-dark.png" alt="logo-dark" height="35">
                </span>
              </a>

              <a href="index" class="logo logo-light">
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
                <a href="index" class="waves-effect">
                  <i class="ri-dashboard-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                  <i class="ri-account-circle-line" />
                  <span>Profile</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li><a href="account_information">Account information</a></li>
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
                      <li><a href="list-member-agent">List master Agent</a></li>
                      <li><a href="addnew-agent">Add new master agent</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">PT/comm Summary</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li><a href="pt-comm-sport">Sport</a></li>
                      <li><a href="pt-comm-livecasino">Live Casino</a></li>
                      <li><a href="pt-comm-lottery">Lottery</a></li>
                      <li><a href="pt-comm-game">Game</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">Report</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li><a href="report-winlose">Winlose</a></li>
                      <li><a href="report-winlose-senior">Win/lose-Senior</a></li>
                      <li><a href="report-winlose-master">Win/lose-Master</a></li>
                      <li><a href="report-winlose-agent">Win/lose-Agent</a></li>
                      <li><a href="report-winlose-player">Win/lose-Player</a></li>
                    </ul>
                  </li>
                </ul>

                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);" class="has-arrow">Top Player</a>
                    <ul class="sub-menu" aria-expanded="false">
                      <li><a href="topplayer">Top Winner/loser/Valid Amount</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="sub-menu" aria-expanded="false">
                  <li><a href="performance-report">Performance</a></li>
                </ul>
              </li><li>
                <a href="check-deposit-withdraw" class="waves-effect">
                  <i class="ri-money-dollar-box-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Check Deposit - Withdraw</span>
                </a>
              </li>
              <li>
                <a href="invoice" class="waves-effect">
                  <i class="ri-bill-line" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Invoice</span>
                </a>
              </li>

              <li>
                <a href="log" class="waves-effect">
                  <i class="ri-edit-box-fill" /><span
                    class="badge rounded-pill bg-success float-end"
                  />
                  <span>Logs</span>
                </a>
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
    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
