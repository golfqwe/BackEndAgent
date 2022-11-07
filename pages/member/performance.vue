<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">
              Performance Report
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Report</a>
                </li>
                <li class="breadcrumb-item active">
                  Performance Report
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Filter
              </h4>
              <p class="card-title-desc">
                Performance Report
              </p>
              <div class="container">
                <div class="row justify-content-start">
                  <div class="btn-group mr-1 mt-2 ml-2">
                    <div class="col-1 form-check mb-3">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        ALL  <i
                          class="mdi mdi-chevron-down"
                        />
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Choice 1</a>
                        <a class="dropdown-item" href="#">Choice 2</a>
                        <a class="dropdown-item" href="#">Choice 3</a>
                      </div>
                    </div>
                    <div class="col-1 form-check mb-3">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        ALL <i
                          class="mdi mdi-chevron-down"
                        />
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Choice 1</a>
                        <a class="dropdown-item" href="#">Choice 2</a>
                        <a class="dropdown-item" href="#">Choice 3</a>
                      </div>
                    </div>
                    <div class="col-4 form-check mb-3">
                      <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon">
                        <button type="button" class="btn btn-outline-primary">
                          search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="btn-group mr-1 mt-2 ml-2 col-6">
                  <div
                    id="datepicker6"
                    class="input-daterange input-group"
                    data-date-format="dd M, yyyy"
                    data-date-autoclose="true"
                    data-provide="datepicker"
                    data-date-container="#datepicker6"
                  >
                    <input type="text" class="form-control" name="start" placeholder="Start Date">
                    <input type="text" class="form-control" name="end" placeholder="End Date">
                  </div>
                </div>
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                  Today
                </button>
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                  Yesterday
                </button>
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                  This week
                </button>
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                  Last Week
                </button>
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                  This Month
                </button>
              </div>
              <br>
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      All Product
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      Sport
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      Live Casino
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      Lottery
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      Game
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      P2P
                    </label>
                  </div>
                  <div class="col-1 form-check mb-3">
                    <input id="formCheck1" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="formCheck1">
                      Finance
                    </label>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-2 form-check mb-3">
                    <input
                      id="formRadios1"
                      class="form-check-input"
                      type="radio"
                      name="formRadios"
                      checked
                    >
                    <label class="form-check-label" for="formRadios1">
                      Agent's Currency
                    </label>
                  </div>
                  <div class="col-2 form-check mb-3">
                    <input
                      id="formRadios1"
                      class="form-check-input"
                      type="radio"
                      name="formRadios"
                      checked
                    >
                    <label class="form-check-label" for="formRadios1">
                      Member's Currency
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Performance Report
              </h4>
              <p class="card-title-desc">
                DataTables Performance Report
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="1" />
                      <th colspan="1" class="align-middle">
                        V.amount
                      </th>
                      <th colspan="1" class="align-middle">
                        Win Loss
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        Sport
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total Sport</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Performance Report Live Casino
              </h4>
              <p class="card-title-desc">
                DataTables Performance Report
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="1" />
                      <th colspan="1" class="align-middle">
                        V.amount
                      </th>
                      <th colspan="1" class="align-middle">
                        Win Loss
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        Live Casino
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total Live Casino</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Performance Report Game
              </h4>
              <p class="card-title-desc">
                DataTables Performance Report
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="1" />
                      <th colspan="1" class="align-middle">
                        V.amount
                      </th>
                      <th colspan="1" class="align-middle">
                        Win Loss
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        Game
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total Game</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Performance Report Lottery
              </h4>
              <p class="card-title-desc">
                DataTables Performance Report
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="1" />
                      <th colspan="1" class="align-middle">
                        V.amount
                      </th>
                      <th colspan="1" class="align-middle">
                        Win Loss
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        Lottery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total Lottery</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="1" />
                      <th colspan="1" class="align-middle">
                        V.amount
                      </th>
                      <th colspan="1" class="align-middle">
                        Win Loss
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                  <tfoot>
                    <tr>
                      <th>Total Lottery</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- end col -->
      </div>
    </div> <!-- container-fluid -->
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: '/libs/admin-resources/rwd-table/rwd-table.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/select2/js/select2.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/spectrum-colorpicker2/spectrum.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/admin-resources/bootstrap-filestyle/bootstrap-filestyle.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/libs/bootstrap-maxlength/bootstrap-maxlength.min.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        },
        {
          src: '/js/pages/performance-report.init.js',
          async: true,
          defer: true,
          callback: () => { this.$forceUpdate() }
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/libs/admin-resources/rwd-table/rwd-table.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/select2/css/select2.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/spectrum-colorpicker2/spectrum.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
