<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">
              Check Deposit - Withdraw
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Backend</a>
                </li>
                <li class="breadcrumb-item active">
                  Check Deposit - Withdraw
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
                Check Deposit - Withdraw
              </p>
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
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Check Deposit - Withdraw
              </h4>
              <p class="card-title-desc">
                DataTables Check Deposit - Withdraw
              </p>
              <div class="table-responsive">
                <table id="complex-header-datatable" class="table dt-responsive nowrap w-100">
                  <thead class="thead-light">
                    <tr>
                      <th>#</th>
                      <th>Account Player</th>
                      <th>Date</th>
                      <th>IP</th>
                      <th>Create By</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Mister Test</td>
                      <td>2022-12-12 13:00</td>
                      <td>139.59.123.180</td>
                      <td>Xhomb</td>
                      <td>320,800฿</td>
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
          src: '/js/pages/checkdepo-withdraw.init.js',
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
