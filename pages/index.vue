<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-flex align-items-center justify-content-between">
            <h4 class="mb-0">
              Dashboard
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Backend</a>
                </li>
                <li class="breadcrumb-item active">
                  Dashboard
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->
      <div class="row">
        <div class="col-xl-8">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-1 overflow-hidden">
                      <p class="text-truncate font-size-14 mb-2">
                        Credit Limit
                      </p>
                      <h4 class="mb-0">
                        6,500,000
                      </h4>
                    </div>
                    <div class="text-primary ms-auto">
                      <i class="ri-bank-card-line font-size-24" />
                    </div>
                  </div>
                </div>

                <div class="card-body border-top py-3">
                  <div class="text-truncate">
                    <span class="badge badge-soft-danger font-size-11"><i class="mdi mdi-menu-down" />
                      2.4% </span>
                    <span class="text-muted ms-2">From Last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-1 overflow-hidden">
                      <p class="text-truncate font-size-14 mb-2">
                        Used credit
                      </p>
                      <h4 class="mb-0">
                        5,000,000
                      </h4>
                    </div>
                    <div class="text-primary ms-auto">
                      <i class="ri-refund-fill font-size-24" />
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <div class="text-truncate">
                    <span class="badge badge-soft-success font-size-11"><i class="mdi mdi-menu-up" />
                      2.4% </span>
                    <span class="text-muted ms-2">From Last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-1 overflow-hidden">
                      <p class="text-truncate font-size-14 mb-2">
                        Total Member
                      </p>
                      <h4 class="mb-0">
                        20
                      </h4>
                    </div>
                    <div class="text-primary ms-auto">
                      <i class="ri-user-3-line font-size-24" />
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <div class="text-truncate">
                    <span class="badge badge-soft-success font-size-11"><i class="mdi mdi-menu-up" />
                      2.4% </span>
                    <span class="text-muted ms-2">From Last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-1 overflow-hidden">
                      <p class="text-truncate font-size-14 mb-2">
                        Total Agent
                      </p>
                      <h4 class="mb-0">
                        20
                      </h4>
                    </div>
                    <div class="text-primary ms-auto">
                      <i class="ri-user-3-fill font-size-24" />
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <div class="text-truncate">
                    <span class="badge badge-soft-success font-size-11"><i class="mdi mdi-menu-up" />
                      2.4% </span>
                    <span class="text-muted ms-2">From Last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="float-end">
                <select class="form-select form-select-sm">
                  <option selected>
                    type account
                  </option>
                  <option value="1">
                    Agent
                  </option>
                  <option value="2">
                    Player
                  </option>
                </select>
              </div>
              <h4 class="card-title mb-4">
                Member Online
              </h4>

              <div id="donut-user-chart" class="apex-charts" />

              <div class="row">
                <div class="col-4">
                  <div class="text-center mt-4">
                    <p class="mb-2 text-truncate">
                      <i
                        class="mdi mdi-circle text-primary font-size-10 me-1"
                      /> Agent
                    </p>
                    <h5>42 %</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-center mt-4">
                    <p class="mb-2 text-truncate">
                      <i
                        class="mdi mdi-circle text-success font-size-10 me-1"
                      /> Member
                    </p>
                    <h5>26 %</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>
