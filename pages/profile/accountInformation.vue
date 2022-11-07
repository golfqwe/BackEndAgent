<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-flex align-items-center justify-content-between">
            <h4 class="mb-0">
              Account information
            </h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Backend</a>
                </li>
                <li class="breadcrumb-item active">
                  account information/google authentication
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
                        Role
                      </p>
                      <h4 class="mb-0">
                        MA
                      </h4>
                    </div>
                    <div class="text-primary ms-auto">
                      <i class="ri-user-3-fill font-size-24" />
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <div class="text-truncate">
                    <span class="text-muted ms-2">Account Role</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>

        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Account information
              </h4>
              <p class="card-title-desc">
                Account Detail
              </p>
              <!-- Nav tabs -->
              <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#accountinformation1" role="tab">
                    <span class="d-block d-sm-none"><i class="fas fa-home" /></span>
                    <span class="d-none d-sm-block">Account information</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#googleauthen1" role="tab">
                    <span class="d-block d-sm-none"><i class="far fa-user" /></span>
                    <span class="d-none d-sm-block">Google Authentication</span>
                  </a>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content p-3 text-muted">
                <div id="accountinformation1" class="tab-pane active" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-nowrap mb-0">
                              <thead>
                                <tr>
                                  <th style="width: 50%;">
                                    topic
                                  </th>
                                  <th>Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>User name</td>
                                  <td>
                                    <a>test 1</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account type</td>
                                  <td>
                                    <a>Credits</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Date of birth</td>
                                  <td>
                                    <a>12/12/2022</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>E:mail</td>
                                  <td>
                                    <a>admin@example.com</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Mobile</td>
                                  <td>
                                    <a>0888888888</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Currency</td>
                                  <td>
                                    <a>THB</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Time Zone</td>
                                  <td>
                                    <a>+07:00</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Last login IP</td>
                                  <td>
                                    <a>2001:44c8:41b2:ceb8:9ca6:f005</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Password</td>
                                  <td>
                                    <a
                                      id="inline-comments"
                                      href="#"
                                      data-type="textarea"
                                      data-pk="1"
                                      data-placeholder="comments your password here..."
                                      data-title="Enter comments"
                                    >chang password</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div> <!-- end col -->
                  </div>
                </div>
                <div id="googleauthen1" class="tab-pane" role="tabpanel">
                  <div class="col-lg-4">
                    <div class="card bg-danger text-white-50">
                      <div class="card-body">
                        <h5 class="mt-0 mb-4 text-white">
                          <i class="mdi mdi-alert-outline me-3" />Warning Notification
                        </h5>
                        <p class="card-text">
                          Qr code or digi-code for connect to Google Authentication should be secret for your account
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-4">
                    <div class="card-body">
                      <h4 class="card-title mt-0">
                        how to use 2 Authentication account
                      </h4>
                      <p class="card-text">
                        You will need to install Google Authentication app to your phone
                      </p>
                      <p class="card-text" /><p class="card-text">
                        Open your Google Authentication app and scan QR code
                      </p>
                      <p class="card-text" />
                    </div>
                  </div>

                  <div class="card" style="width: 18rem;">
                    <img class="card-img-top img-rounded" src="~/assets/images/qrcode.png" alt="Card image cap">
                  </div>
                  <div class="card mb-12">
                    <div class="card-body">
                      <h4 class="card-title mt-0">
                        If you cannot scan or use Qr code, enter this text code
                      </h4>
                      <p class="card-text">
                        2355465489
                      </p>
                      <p class="card-text" />
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="row mb-3">
                        <label for="example-text-input" class="col-sm-2 col-form-label">Enter 6-digit code</label>
                        <div class="col-sm-10">
                          <input
                            id="example-text-input"
                            class="form-control"
                            type="text"
                            placeholder="Enter 6-digit code"
                          >
                          <br>
                          <button type="button" class="btn btn-success btn-rounded waves-effect waves-light">
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
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

<style lang="scss" scoped>

</style>
