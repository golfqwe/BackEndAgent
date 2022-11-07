<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">
              Report Win Lose Player
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Report Win lose Player</a>
                </li>
                <li class="breadcrumb-item active">
                  Report
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
                Report Win Lose
              </p>
              <div class="alert alert-success" role="alert">
                <i class="ri-calendar-event-fill" />  08/30 Completed  <i class="ri-calendar-event-fill" />  09/31 Completed
              </div>

              <div class="btn-group mr-1 mt-2 ml-2">
                <div class="input-group">
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon">
                  <button type="button" class="btn btn-outline-primary">
                    search
                  </button>
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
                Report Win Lose
              </h4>
              <p class="card-title-desc">
                DataTables Report Win Lose
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th rowspan="2" class="align-middle">
                        #
                      </th>
                      <th rowspan="2" class="align-middle">
                        information
                      </th>
                      <th rowspan="2" class="align-middle">
                        selection
                      </th>
                      <th rowspan="3" class="align-middle">
                        odds
                      </th>
                      <th rowspan="3" class="align-middle">
                        stake
                      </th>
                      <th rowspan="3" class="align-middle">
                        status
                      </th>
                      <th colspan="1" class="align-middle">
                        PLY
                      </th>
                      <th colspan="1" class="align-middle">
                        AG
                      </th>
                      <th colspan="1" class="align-middle">
                        SR
                      </th>
                      <th colspan="1" class="align-middle">
                        company
                      </th>
                      <th colspan="1" class="align-middle">
                        pt
                      </th>
                      <th rowspan="3" class="align-middle">
                        IP
                      </th>
                    </tr>
                    <tr>
                      <th>Win Lose Comm</th>
                      <th>Win Lose Comm</th>
                      <th>Win Lose Comm</th>
                      <th>Win Lose Comm</th>
                      <th>AG MA SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
                      <th>$320,800</th>
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
          src: '/js/pages/report-winlose.init.js',
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
