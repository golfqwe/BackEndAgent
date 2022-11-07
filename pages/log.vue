<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">
              Member Action Logs
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">
                  Member Action Logs
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
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-3 form-check mb-3">
                    <div class="mb-3">
                      <label for="validationCustom03" class="form-label">Action Type</label>
                      <select id="validationCustom03" class="form-select" required>
                        <option selected disabled value="">
                          All
                        </option>
                        <option>Action Type 1</option>
                        <option>Action Type 2</option>
                        <option>Action Type 3</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select an action type
                      </div>
                    </div>
                  </div>
                  <div class="col-3 form-check mb-3">
                    <div class="mb-3">
                      <label>Action By</label>
                      <input type="text" class="form-control" required placeholder="Type something">
                    </div>
                  </div>
                  <div class="col-3 form-check mb-3">
                    <div class="mb-3">
                      <label>Affected User</label>
                      <input type="text" class="form-control" required placeholder="Type something">
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
                  Search
                </button>
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
                      <th>No.</th>
                      <th>Action time</th>
                      <th>Action By</th>
                      <th>IP</th>
                      <th>Affected User</th>
                      <th>Type</th>
                      <th>Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>2022-05-12 10:12:36</td>
                      <td>Test 1</td>
                      <td>122.112.112.21</td>
                      <td>Test 1fjsd</td>
                      <td>Login</td>
                      <td>Login succesful</td>
                    </tr>
                  </tbody>
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
          src: '/js/pages/log.init.js',
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
